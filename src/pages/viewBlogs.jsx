import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Header from "../components/dashboardHeader";
import image from "../assets/login.jpg";
import Sidebar from "../components/nav";
import Table from "../components/table";
import axios from "axios";
import Cookies from "js-cookie";
import PaginatedTable from "../components/PaginatedTable";
import UpdateBook from "../components/updateBook";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { BiSolidTrash } from "react-icons/bi";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";


export default function ViewBook() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const headers = [
    "Id",
    "Name",
    "Author",
    "Publisher",
    "Publication Year",
    "Subject"
  ];

  const getData = async () => {
    const api = await fetch("http://localhost:8000/api/v1/Books/getAll", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("accessToken"),
      },
    });
    let data = await api.json();
    let Books = await data.data;
    setData(Books);
    console.log(Books);
  };

  useEffect(() => {
    getData();
  }, []);

  const updateRecord = (Book) => {
    return <UpdateBook Book={Book} />;
  };
  const posts = [
    {
      title:
        "The Akagera national park of Rwanda is one of this year’s most visited parks in East Africa",
      author: {
        name: "name",
      },
      content:
        "To set up and configure their livestreaming equipment for optimal results.",
      date: "12-02-2020",
      image: image,
    },
    {
      title:
        "The Akagera national park of Rwanda is one of this year’s most visited parks in East Africa",
      author: {
        name: "UMUGWANEZA Alice",
      },
      content:
        "To set up and configure their livestreaming equipment for optimal results.",
      date: "12-02-2020",
      image: image,
    },
    {
      title:
        "The Akagera national park of Rwanda is one of this year’s most visited parks in East Africa",
      author: {
        name: "UMUGWANEZA Alice",
      },
      content:
        "To set up and configure their livestreaming equipment for optimal results.",
      date: "12-02-2020",
      image: image,
    },
    {
      title:
        "The Akagera national park of Rwanda is one of this year’s most visited parks in East Africa",
      author: {
        name: "UMUGWANEZA Alice",
      },
      content:
        "To set up and configure their livestreaming equipment for optimal results.",
      date: "12-02-2020",
      image: image,
    },
    {
      title:
        "The Akagera national park of Rwanda is one of this year’s most visited parks in East Africa",
      author: {
        name: "UMUGWANEZA Alice",
      },
      content:
        "To set up and configure their livestreaming equipment for optimal results.",
      date: "12-02-2020",
      image: image,
    },
  ];
  const deleteRecord = (id) => {
    const sendRequest = async () => {
      // setLoading(true);
      const api = await axios
        .delete(`http://localhost:8000/api/v1/Books/deleteBook/${id}`,{headers: {
          Authorization: "Bearer " + Cookies.get("accessToken"),
        },})
        .then(({ data }) => {
          notification.success({ message: data.message });
          navigate("/viewBooks");
        })
        .catch((err) => {
          console.log(err)
          notification.error({
            message: "Error Occurred!",
          });
        });
    };

    

    return (
      <Tooltip content="Delete Book">
        <IconButton variant="text">
          <BiSolidTrash
            className="h-4 w-4 text-red-400"
            onClick={sendRequest}
          />
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <div className=" h-screen w-full font-quicksand">
      <div className="w-full h-64 bg-blue p-2">
        <Sidebar />
      </div>
      <div className="h-full w-full flex justify-center">
        <div className="w-[60%] mt-[-12%]">
          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <img src={logo} alt="" className="h-24 w-24" />
              <p className="font-bold">QtBlog</p>
            </div>
            <div className="flex items-center">
              <Button content={"Add blog"} className={"p-4"}></Button>
            </div>
          </div>
          <div className="bg-white rounded-lg flex flex-col w-full mt-10 p-3 gap-4 ">
            {posts.map((item) => {
              return (
                <div className="flex w-full gap-6 bg-white border-b pb-4 border-[#F2F2F7]">
                  <div className="w-[25%] ">
                    <img
                      src={item.image}
                      alt=""
                      className=" h-48 w-full rounded-l-md"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-4">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-[#696778] text-sm">{item.content}</p>
                    <div className="flex justify-between">
                      {/* <img src={item.image} alt="" /> */}
                      <div className="">
                        <p className="text-xs text-[]">Author</p>
                        <p className="text-brand">{item.author.name}</p>
                      </div>
                      <p className="text-[#9795A3] text-sm">
                        Posted {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
