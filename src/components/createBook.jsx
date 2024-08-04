import { ReactSVG } from "react-svg";
import Line from "../assets/svg/small-line.svg";
import Wrapper from "./wrapper";
import { AiOutlineUser } from "react-icons/ai";
import Button from "./button";
import { Modal } from "@mantine/core";
import useCustomDisclosure from "../hooks/useCustomDisclosure";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";

export default function CreateBook() {
  const { opened, open, close } = useCustomDisclosure();
  const [step, setStep] = useState(1);

  const increment = () => {
    if (step != 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const [data, setData] = useState({
    name: "",
    author: "",
    publisher: "",
    publicationYear: "",
    subject: ""

  });
  const [details, setDetails] = useState(null);

  const Navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendRequest(
      data.name,
      data.author,
      data.publisher,
      data.publicationYear,
      data.subject
    );
    close();
  };
  async function sendRequest(
    name,
    author,
    publisher,
    publicationYear,
    subject
  ) {
    // setLoading(true);
    const api = await axios
      .post("http://localhost:8000/api/v1/books/create", {
        headers: {
          Authorization: "Bearer " + Cookies.get("accessToken"),
        }
      }, {
        name,
        author,
        publisher,
        publicationYear,
        subject
      })
      .then(({ data }) => {
        setDetails(data.data);
        notification.success({ message: "Book Created successfully!" });
        Navigate("/viewBooks");
      }).catch((err) => {
        notification.error({
          message: err.response.data.message || "Error Occured!",
        });
      });
  }

  return (
    <>
      <button
        class="flex select-none items-center gap-3 rounded-lg bg-darkb text-white py-2 px-4 text-center align-middle text-xs font-bold uppercase shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          stroke-width="2"
          class="w-4 h-4"
        >
          <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
        </svg>
        Add Book
      </button>
      <Modal opened={opened} onClose={close} centered>
        <div className="bg-white h-full w-full rounded-md p-2 font-quicksand">
          <div className="flex flex-col gap-4">
            <p className="text-center font-bold text-darkb">
              Create New Book
            </p>
            <p className="text-center text-gray">
              Please fill out the form to register a new Book
            </p>

          </div>
          <form onSubmit={handleSubmit}>

            <div className="flex flex-col gap-8 mt-8">
              <Wrapper
                name="name"
                handleChange={(e) =>
                  setData({ ...data, name: e.target.value })
                }
                value={data.name}
                label="Name"
                icon={<AiOutlineUser />}
                placeholder={"Enter book's name"}
              />
              <Wrapper
                name="author"
                handleChange={(e) =>
                  setData({ ...data, author: e.target.value })
                }
                value={data.author}
                label="Author"
                icon={<AiOutlineUser />}
                placeholder={"Enter book's author"}
              />
              <Wrapper
                name="publisher"
                handleChange={(e) =>
                  setData({ ...data, publisher: e.target.value })
                }
                value={data.publisher}
                label="Book's publisher"
                icon={<AiOutlineUser />}
                placeholder={"Enter book's publisher"}
              />
              <Wrapper
                name="publicationYear"
                handleChange={(e) =>
                  setData({ ...data, publicationYear: e.target.value })
                }
                value={data.publicationYear}
                label="Publication Year"
                icon={<AiOutlineUser />}
                placeholder={"Enter book's publication Year"}
              />
              <Wrapper
                name="subject"
                handleChange={(e) =>
                  setData({ ...data, subject: e.target.value })
                }
                value={data.subject}
                label="Subject"
                icon={<AiOutlineUser />}
                placeholder={"Enter book's subject"}
              />
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
