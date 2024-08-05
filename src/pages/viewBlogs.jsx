import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import image from "../assets/post.png";
import { IconButton, Tooltip } from "@material-tailwind/react";
import {  BiSolidTrash } from "react-icons/bi";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import CreateBlog from "../components/createBlog";
import UpdateBlog from "../components/updateBlog";
import api from "../utils/api";
import Navbar from "../components/nav";

export default function ViewBook() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const[isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    
      setIsLoading(true)
      const response = await api.get("posts"); 
      setIsLoading(false)
    setData(response.data.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteRecord = (id) => {
    const sendRequest = async () => {
       await api.delete(
          `posts/${id}`)
        .then(({ data }) => {
          notification.success({ message: data.message });
          getData();
        })
        .catch((err) => {
          notification.error({
            message: "Error Occurred!",
          });
        });
    };

    return (
      <Tooltip content="Delete Blog">
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
    <div className="min-h-screen w-full font-quicksand bg-gray-100">
      <div className="w-full bg-blue p-2 h-32 md:h-72 ">
        <Navbar />
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="w-full md:w-[80%] lg:w-[60%] mt-[-8%] md:mt-[-12%] px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex gap-2 items-center mb-4 md:mb-0">
              <img
                src={logo}
                alt="Logo"
                className="h-16 md:h-24 w-16 md:w-24"
              />
              <p className="font-bold text-xl md:text-2xl">QtBlog</p>
            </div>
            <div>
              <CreateBlog getData={getData}/>
            </div>
          </div>
          <div className="bg-white rounded-lg flex flex-col w-full mt-6 md:mt-10 p-4 gap-4 shadow-md">
            {/* {isLoading && "Loading...."} */}
            {data?.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row w-full gap-4 md:gap-6 bg-white border-b pb-4 border-[#F2F2F7]"
              >
                <div className="w-full md:w-[25%]">
                  <img
                  //post image placeholder
                    src={image}
                    alt="Blog Post"
                    className="w-full h-auto md:h-48 object-cover rounded-md md:rounded-l-md"
                  />
                </div>
                <div className="flex flex-col justify-between py-4 w-full">
                  <h3
                    className="font-bold text-lg md:text-xl hover:cursor-pointer"
                    onClick={() => navigate(`/blog/${item.id}`)}
                  >
                    {item.title}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: item.content.slice(0,150) + "...."  }}></div>
                  <div className="flex justify-between mt-4">
                    <div>
                      <p className="text-xs text-gray-500">Author</p>
                      <p className="text-brand">{item.author.fullName}</p>
                    </div>
                    <p className="text-[#9795A3] text-xs md:text-sm">
                      Posted {item.createdAt}
                    </p>
                  </div>
                  <div className="flex justify-end mt-2">
                    <UpdateBlog blog={item} />
                    {deleteRecord(item.id)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
