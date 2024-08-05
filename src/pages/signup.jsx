import image from "../assets/rectangle.png";
import logo from "../assets/logo.png";
import Button from "../components/button";
import Wrapper from "../components/wrapper";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { notification } from "antd";
import api from "../utils/api";

export default function SignUp() {
    const Navigate = useNavigate("");
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendRequest(
            data.firstName,
            data.lastName,
            data.email,
            data.password,
        );
    };
    async function sendRequest(
        firstName,
        lastName,
        email,
        password,
    ) {
       await api
            .post("author/register", {
                firstName,
                lastName,
                email,
                password,
            })
            .then(({ data }) => {
                Navigate("/");
                notification.success({ message: "Registered successfully!" });
            }).catch((err) => {
                notification.error({
                    message: err.response.data.message || "Error Occured!",
                });
            });
    }

    return (
      <div className="flex w-full h-[100vh] font-urbanist">
        <div className="w-full h-full overflow-hidden">
          <img className="" src={image}></img>
          <div className="absolute w-[60%] h-full top-0 flex-col flex  z-50 justify-end px-12 pb-12">
            <img className="w-32 h-32" src={logo}></img>
            <p className="font-bold text-white text-xl  z-50 ">
              Interesting ideas worth reading, from Rwanda’s top authors
            </p>
            <p className=" text-white text-lg z-50 font-light">
              Join the world of 100+ creative writers and more{" "}
            </p>
          </div>
        </div>
        <div className="w-[50%] absolute h-full overflow-hidden bg-white font-urbanist right-0">
          <div className="w-full h-full p-16 flex flex-col  items-center gap-8 absolute z-50">
            <h3 className="text-center text-xl font-semibold font-urbanist">
              Welcome On Board!
            </h3>
            <p className="text-[#696778] text-center">
              Please enter your information to create account!
            </p>
            <form
              className="w-[70%] flex flex-col gap-8"
              onSubmit={handleSubmit}
            >
              <Wrapper
                label="First Name"
                name="firstName"
                required={true}
                handleChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
                placeholder="Enter your first name"
                value={data.firstName}
                // icon={
                //     <AiOutlineUser className="text-darkb text-lg font-extrabold" />
                // }
              />
              <Wrapper
                label="Last Name"
                name="lastName"
                required={true}
                handleChange={(e) =>
                  setData({ ...data, lastName: e.target.value })
                }
                placeholder="Enter your last name"
                value={data.lastName}
              />
              <Wrapper
                label="Email"
                name="email"
                required={true}
                handleChange={(e) =>
                  setData({ ...data, email: e.target.value })
                }
                placeholder="Enter your email"
                value={data.email}
                // icon={
                //     <AiOutlineUser className="text-darkb text-lg font-extrabold" />
                // }
              />

              <Wrapper
                label="Password"
                name="password"
                required={true}
                handleChange={(e) =>
                  setData({ ...data, password: e.target.value })
                }
                value={data.password}
                placeholder="Enter your password"
                // icon={
                //     <AiFillLock className="text-darkb text-lg font-extrabold" />
                // }
              />
              {/* <Link to="/view"> */}
              <Button
                className="mt-4 w-full"
                content={"Sign up"}
                type="submit"
              />
              {/* </Link> */}

              <div className="flex gap-4 justify-center">
                <p>Already have an account?</p>
                <Link to="/">
                  <p className="text-darkb">Sign In</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
