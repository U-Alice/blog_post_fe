import { ReactSVG } from "react-svg";
import Wrapper from "./wrapper";
import { AiOutlineUser } from "react-icons/ai";
import Button from "./button";
import { Modal } from "@mantine/core";
import useCustomDisclosure from "../hooks/useCustomDisclosure";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Cookies from "js-cookie";
import api from "../utils/api";
export default function CreateBlog() {
  const { opened, open, close } = useCustomDisclosure();
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [details, setDetails] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("here!!")
    await sendRequest(data.title, data.content);
    close();
  };

  async function sendRequest(title, content) {
    try {
      const response = await api.post(
        "posts",
        {
          title,
          content,
        }
      );
      console.log(response);
      setData({title: "", content: ""})
      notification.success({ message: "Blog Created successfully!" });
      navigate("/viewBlogs");
    } catch (err) {
      console.log(err);
      notification.error({
        message: err.response.data.message || "Error Occurred!",
      });
    }
  }

  return (
    <>
      <button
        className="flex select-none items-center gap-3 rounded-lg bg-darkb text-white py-2 px-4 text-center align-middle text-xs font-bold uppercase shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={open}
      >
        + Add Blog
      </button>
      <Modal opened={opened} onClose={close} centered>
        <div className="bg-white h-full w-full rounded-md p-2 font-quicksand">
          <div className="flex flex-col gap-4">
            <p className="text-center font-bold text-darkb">Create New Blog</p>
            <p className="text-center text-gray">
              Please fill out the form to add a new blog post
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8 mt-8">
              <Wrapper
                name="title"
                handleChange={(e) =>
                  setData({ ...data, title: e.target.value })
                }
                value={data.title}
                label="Title"
                icon={<AiOutlineUser />}
                placeholder={"Enter blog title"}
              />
              <div className="flex flex-col gap-2">
                <label className="text-gray-700">Content</label>
                <ReactQuill
                  value={data.content}
                  onChange={(value) => setData({ ...data, content: value })}
                  placeholder={"Write your blog content here..."}
                />
              </div>
            </div>

            <div className="w-full flex justify-end mt-16">
              <Button content="Submit" className="px-4" type="submit" />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
