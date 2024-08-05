import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mantine/core";
import { ReactSVG } from "react-svg";
import { BiSolidPencil } from "react-icons/bi";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { notification } from "antd";
import axios from "axios";
import Cookies from "js-cookie";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Line from "../assets/svg/small-line.svg";
import Wrapper from "./wrapper";
import Button from "./button";
import useCustomDisclosure from "../hooks/useCustomDisclosure";

export default function UpdateBlog({ blog }) {
  const { opened, open, close } = useCustomDisclosure();
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: blog?.title,
    content: blog?.content,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendRequest(data.title, data.content);
    close();
  };

  async function sendRequest(title, content) {
    try {
      const response = await axios.put(
        `http://localhost:9000/api/v1/posts/${blog.id}`,
        { title, content },
        {
          headers: {
            Authorization: "Bearer " + Cookies.get("accessToken"),
          },
        }
      );

      notification.success({ message: "Blog updated successfully!" });
      navigate("/viewBlogs");
    } catch (err) {
      notification.error({
        message: err.response?.data?.message || "Error occurred!",
      });
    }
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Tooltip content="Edit Blog">
        <IconButton variant="text" onClick={open}>
          <BiSolidPencil className="h-4 w-4" />
        </IconButton>
      </Tooltip>
      <Modal opened={opened} onClose={close} centered>
        <div className="bg-white h-full w-full rounded-md p-2 font-quicksand">
          <div className="flex flex-col gap-4">
            <p className="text-center font-bold text-darkb">UPDATE BLOG</p>
            <p className="text-center text-gray">
              Please fill out to edit the blog
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
                placeholder="Enter the title"
              />
            </div>

            <div className="flex flex-col gap-8 mt-8">
              <div className="flex flex-col">
                <label className="font-medium text-gray-700">Content</label>
                <ReactQuill
                  value={data.content}
                  onChange={(value) => setData({ ...data, content: value })}
                  modules={{ toolbar: true }}
                  theme="snow"
                />
              </div>
            </div>

            <Button content="Submit" className="px-4 mt-8" type="submit" />
          </form>
        </div>
      </Modal>
    </>
  );
}
