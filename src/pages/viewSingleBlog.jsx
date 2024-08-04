import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Header from "../components/dashboardHeader";
import image from "../assets/post.png";
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


export default function ViewSingleBlog() {
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
  const post = {
      title:
        "The Akagera national park of Rwanda is one of this year’s most visited parks in East Africa",
      author: {
        name: "name",
      },
      content:
        "The Livestreaming Material Setup chapter is a course module that focuses on the technical aspects of preparing a successful livestream. The chapter covers topics such as selecting the right camera and microphone, setting up lighting, and optimizing internet connection speed. Students will learn about the different types of cameras and microphones available, as well as the best lighting and sound techniques for producing high-quality video content. By the end of the chapter, students will have a solid understanding of how to set up and configure their livestreaming equipment for optimal results.  The Livestreaming Material Setup chapter is a course module that focuses on the technical aspects of preparing a successful livestream. The chapter covers topics such as selecting the right camera and microphone, setting up lighting, and optimizing internet connection speed. Students will learn about the different types of cameras and microphones available, as well as the best lighting and sound techniques for producing high-quality video content. By the end of the chapter, students will have a solid understanding of how to set up and configure their livestreaming equipment for optimal results.",
      date: "12-02-2020",
      image: image,
    }
     const comments = [
       {
         author: {
           name: "name",
         },
         content:
           "To set up and configure their livestreaming equipment for optimal results.",
         date: "12-02-2020",
         image: image,
       },
       {
         author: {
           name: "UMUGWANEZA Alice",
         },
         content:
           "To set up and configure their livestreaming equipment for optimal results.",
         date: "12-02-2020",
         image: image,
       },
       {
         author: {
           name: "UMUGWANEZA Alice",
         },
         content:
           "To set up and configure their livestreaming equipment for optimal results.",
         date: "12-02-2020",
         image: image,
       },
       {
         author: {
           name: "UMUGWANEZA Alice",
         },
         content:
           "To set up and configure their livestreaming equipment for optimal results.",
         date: "12-02-2020",
         image: image,
       },
       {
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
            <div className="flex flex-col gap-2 items-center w-full">
              <p className="font-bold">QtBlog</p>
              <img src={image} alt="" className="h-60 w-full" />
            </div>
          </div>
          <div className="bg-white rounded-lg flex flex-col w-full mt-10 p-3 gap-4 ">
            <div className="flex flex-col w-full gap-6 bg-white border-b pb-4 border-[#F2F2F7]">
              <h3 className="font-bold">{post.title}</h3>
              <div className="flex justify-between">
                <div className="">
                  <p className="text-xs text-[]">Author</p>
                  <p className="text-brand">{post.author.name}</p>
                </div>
                <p className="text-[#9795A3] text-sm">Posted {post.date}</p>
              </div>
              <div className="flex flex-col justify-between py-4">
                <p className="text-[#696778] text-sm">{post.content}</p>
              </div>
            </div>
            <div>
              <h3 className="font-urbanist  font-bold gap-4">Discussions</h3>
              <div className="flex flex-col gap-4">
                {comments.map((item) => {
                  return (
                    <div className=" flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <img
                          src={image}
                          className="h-8 w-8 rounded-full"
                          alt=""
                        />
                        <p className="text-sm">{item.author.name}</p>
                        <p className="text-sm">2 minutes ago</p>
                      </div>
                      <p className="pl-12 text-[#696778] bg-[#FBFBFB] p-4 rounded-sm">
                        {item.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
