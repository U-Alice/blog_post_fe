import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import image from "../assets/post.png";
import Sidebar from "../components/nav";
import axios from "axios";
import Cookies from "js-cookie";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { BiArrowBack, BiSolidTrash } from "react-icons/bi";
import { notification } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/button";
import Wrapper from "../components/wrapper";

export default function ViewSingleBlog() {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();
  const {id} = useParams();
  const getData = async () => {
    const api = await fetch(
      `http://localhost:9000/api/v1/posts/id/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + Cookies.get("accessToken"),
        },
      }
    );
    let data = await api.json();  
    console.log(data);

    let blog = await data.data;
    setBlog(blog);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="min-h-screen w-full font-quicksand bg-gray-100">
      <div className="w-full bg-blue p-2">
        <Sidebar />
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-full md:w-[80%] lg:w-[60%] mt-[-8%] md:mt-[-12%] p-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <BiArrowBack className="text-xl" />
              <p className="font-bold text-lg">Back</p>
            </div>
          </div>
          <div className="w-full">
            <img
              src={image}
              alt="Blog Post"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="bg-white rounded-lg p-4 mt-4 shadow-md">
            <h3 className="font-bold text-2xl">{blog.title}</h3>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-xs text-gray-500">Author</p>
                <p className="text-brand">{blog.author?.fullName}</p>
              </div>
              <p className="text-sm text-gray-400">Posted {blog.date}</p>
            </div>
            <div className="mt-4 text-gray-700 " dangerouslySetInnerHTML={{ __html: blog.content }}>
              {/* <div </div> */}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-bold text-xl mb-4">Discussions</h3>
            <div className="space-y-4">
              {blog.comments?.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <img
                      src={item.image}
                      alt="User"
                      className="h-8 w-8 rounded-full"
                    />
                    <p className="ml-2 text-sm font-semibold">
                      {item.author.name}
                    </p>
                    <p className="ml-auto text-xs text-gray-400">{item.date}</p>
                  </div>
                  <p className="text-sm text-gray-600 pl-10 bg-gray-50 p-4 rounded-md">
                    {item.content}
                  </p>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-4">
                <img src={image} className="h-8 w-8 rounded-full" alt="" />
                <Wrapper placeholder={"What are your thoughts?"} />
              </div>
              <div className="flex justify-end mt-2">
                <Button content={"Submit"} className={"p-2 h-fit w-fit"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
