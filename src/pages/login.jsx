import image from "../assets/signup.png";
import logo from "../assets/logo.png";
import Button from "../components/button";
import Wrapper from "../components/wrapper";
import { AiOutlineUser, AiOutlineMail, AiFillLock } from "react-icons/ai";
import { ReactSVG } from "react-svg";
import Line from "../assets/svg/line.svg";
import Google from "../assets/svg/google-icon.svg";
import Facebook from "../assets/svg/facebook-icon.svg";
import ExternalSignIn from "../components/externalSignin";
import LoginBg from "../assets/svg/login-bg.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { notification } from "antd";
import useAuth from "../context/authContext";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const {login} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(data.email, data.password);
 };

  return (
    <div className="flex w-full h-[100vh] font-quicksand">
      <div className="w-[60%] h-full overflow-hidden">
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
          <h3 className="text-center text-xl font-semibold font-quicksand">
            Welcome Back!
          </h3>
          <p className="text-[#C0C0C0] text-center">
            Please enter your information to login!
          </p>
          <form className="w-[70%] flex flex-col gap-8" onSubmit={handleSubmit}>
            <Wrapper
              label="Email"
              name="email"
              required={true}
              handleChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Enter your email"
              value={data.email}
              icon={
                <AiOutlineUser className="text-darkb text-lg font-extrabold" />
              }
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
              icon={
                <AiFillLock className="text-darkb text-lg font-extrabold" />
              }
            />
            {/* <Link to="/view"> */}
            <Button className="mt-4 w-full" content={"Login"} type="submit" />
            {/* </Link> */}

            <div className="flex gap-4 justify-center">
              <p>Already have an account?</p>
              <Link to="/signup">
                <p className="text-darkb">Sign Up</p>
              </Link>
            </div>

            
          </form>
        </div>
    
      </div>
    </div>
  );
}
