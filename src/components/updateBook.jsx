import { ReactSVG } from "react-svg";
import Line from "../assets/svg/small-line.svg";
import Wrapper from "./wrapper";
import { AiOutlineUser } from "react-icons/ai";
import Button from "./button";
import { Modal } from "@mantine/core";
import useCustomDisclosure from "../hooks/useCustomDisclosure";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { BiSolidPencil } from "react-icons/bi";

export default function UpdateBook({Book}) {
  const { opened, open, close } = useCustomDisclosure();
  const [step, setStep] = useState(1);

  const increment = () => {
    if (step != 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const [data, setData] = useState({
    id: Book.id,
    firstName: Book.firstName,
    lastName: Book.lastName,
    national_id: Book.national_id,
    telephone: Book.telephone,
    email: Book.email,
    department: Book.department,
    position: Book.position,
    laptop_manufacturer: Book.laptop_manufacturer,
    model: Book.model,
    serialNumber: Book.serialNumber,
  });
  const [details, setDetails] = useState(null);
  const [response, setResponse] = useState({});
  const Navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendRequest(
      data.email,
      data.firstName,
      data.lastName,
      data.national_id,
      data.telephone,
      data.department,
      data.position,
      data.laptop_manufacturer,
      data.model,
      data.serialNumber
    );
    close();
  };
  async function sendRequest(
    email,
    firstName,
    lastName,
    national_id,
    telephone,
    department,
    position,
    laptop_manufacturer,
    model,
    serialNumber
  ) {
    // setLoading(true);
    const api = await axios
      .put(`http://localhost:8000/api/v1/Books/updateBook/${data.id}`,{headers: {
        Authorization: "Bearer " + Cookies.get("accessToken"),
      }}, {
        firstName: firstName,
        lastName: lastName,
        national_id: national_id,
        telephone: telephone,
        email: email,
        department: department,
        position: position,
        laptop_manufacturer: laptop_manufacturer,
        model: model,
        serialNumber: serialNumber,
      })
      .then(({ data }) => {
        setDetails(data.data);
        notification.success({ message: "Book Created successfully!" });
        Navigate("/viewBooks");
      })
      .catch((err) => {
        notification.error({
          message: err.response.data.message || "Error Occurred!",
        });
      });
  }
useEffect(()=>{
    console.log(data);
}, [])  
  return (
    <>
      <Tooltip content="Edit Book">
        <IconButton variant="text" onClick={open}>
          <BiSolidPencil className="h-4 w-4" />
        </IconButton>
      </Tooltip>
      <Modal opened={opened} onClose={close} centered>
        <div className="bg-white h-full w-full rounded-md p-2 font-quicksand">
          <div className="flex flex-col gap-4">
            <p className="text-center font-bold text-darkb">
              UPDATE Book FORM
            </p>
            <p className="text-center text-gray">
              Please fill out the form to register a new Book
            </p>
            <div className="flex items-center">
              <ReactSVG src={Line} className="" />
              <div
                className={`h-10 w-16 flex items-center justify-center border border-gray rounded-full ${
                  step == 1 ? "bg-darkb text-white" : "bg-white text-black"
                }`}
              >
                <button onClick={() => setStep(1)}>1</button>
              </div>
              <ReactSVG src={Line} className="" />
              <div
                className={`h-10 w-18 flex items-center justify-center border border-gray rounded-full ${
                  step == 2 ? "bg-darkb text-white" : "bg-white text-black"
                }`}
              >
                <button onClick={() => setStep(2)}>2</button>
              </div>
              <ReactSVG src={Line} className="" />
              <div
                className={`h-10 w-16 flex items-center justify-center border border-gray rounded-full ${
                  step == 3 ? "bg-darkb text-white" : "bg-white text-black"
                }`}
              >
                <button onClick={() => setStep(3)}>3</button>
              </div>
              <ReactSVG src={Line} className="" />
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            {step == 1 && (
              <div className="flex flex-col gap-8 mt-8">
                <Wrapper
                  name="firstName"
                  handleChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                  value={data.firstName}
                  label="First Name"
                  icon={<AiOutlineUser />}
                  placeholder={"Enter your first name"}
                />
                <Wrapper
                  name="lastName"
                  handleChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                  value={data.lastName}
                  label="Last Name"
                  icon={<AiOutlineUser />}
                  placeholder={"Enter your last name"}
                />
                <Wrapper
                  name="national_id"
                  handleChange={(e) =>
                    setData({ ...data, national_id: e.target.value })
                  }
                  value={data.national_id}
                  label="National Identity"
                  icon={<AiOutlineUser />}
                  placeholder={"Enter your national identity"}
                />
                <Wrapper
                  name="telephone"
                  handleChange={(e) =>
                    setData({ ...data, telephone: e.target.value })
                  }
                  value={data.telephone}
                  label="Telephone"
                  icon={<AiOutlineUser />}
                  placeholder={"Enter your phone number"}
                />
              </div>
            )}

            {step == 2 && (
              <div className="flex flex-col gap-8 mt-8">
                <Wrapper
                  name="email"
                  handleChange={(e) =>
                    setData({ ...data, email: e.target.value })
                  }
                  value={data.email}
                  label="Email"
                  icon={<AiOutlineUser />}
                  placeholder={"Enter your first name"}
                />
                <Wrapper
                  name="department"
                  handleChange={(e) =>
                    setData({ ...data, department: e.target.value })
                  }
                  value={data.department}
                  label="Department"
                  icon={<AiOutlineUser />}
                  placeholder={"Enter your last name"}
                />
                <Wrapper
                  name="position"
                  handleChange={(e) =>
                    setData({ ...data, position: e.target.value })
                  }
                  value={data.position}
                  label="Position"
                  icon={<AiOutlineUser />}
                  placeholder={"Enter your national identity"}
                />
              </div>
            )}
            {step == 3 && (
              <div className="flex flex-col gap-8 mt-8">
                <Wrapper
                  name="laptop_manufacturer"
                  handleChange={(e) =>
                    setData({ ...data, laptop_manufacturer: e.target.value })
                  }
                  value={data.laptop_manufacturer}
                  label="Laptop Manufacturer"
                  icon={<AiOutlineUser />}
                  placeholder={"Enter your first name"}
                />
                <Wrapper
                  name="model"
                  handleChange={(e) =>
                    setData({ ...data, model: e.target.value })
                  }
                  value={data.model}
                  label="Model"
                  icon={<AiOutlineUser />}
                  placeholder={"Enter your last name"}
                />
                <Wrapper
                  name="serialNumber"
                  handleChange={(e) =>
                    setData({ ...data, serialNumber: e.target.value })
                  }
                  value={data.serialNumber}
                  label="Serial Number"
                  icon={<AiOutlineUser />}
                  placeholder={"Enter your national identity"}
                />
              </div>
            )}
            <div className="w-full flex justify-end mt-16">
              {step == 3 && (
                <Button content="Submit" className="px-4" type="submit" />
              )}
              {(step == 1 || step == 2) && (
                <Button
                  content="Next"
                  className="px-4"
                  onClick={increment}
                  type="button"
                />
              )}
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
