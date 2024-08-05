import image from "../assets/signup.png";
import logo from "../assets/logo.png";
import Button from "../components/button";
import Wrapper from "../components/wrapper";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../context/authContext";

export default function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(data.username, data.password);
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen font-quicksand">
      {/* Image and Info Section */}
      <div
        className="relative w-full md:w-1/2 lg:w-3/5 flex flex-col justify-between p-6 md:p-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <img src={logo} alt="Logo" className="w-20 md:w-32" />
        <div className="text-white mt-auto">
          <p className="font-bold text-lg md:text-xl lg:text-2xl">
            Interesting ideas worth reading, from Rwanda’s top authors
          </p>
          <p className="mt-2 text-sm md:text-base lg:text-lg font-light">
            Join the world of 100+ creative writers and more.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-md space-y-8">
          <h3 className="text-center text-xl md:text-2xl font-semibold">
            Welcome Back!
          </h3>
          <p className="text-center text-gray-500">
            Please enter your information to login!
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Wrapper
              label="Email"
              name="username"
              required
              handleChange={(e) =>
                setData({ ...data, username: e.target.value })
              }
              placeholder="Enter your email"
              value={data.username}
              icon={
                <AiOutlineUser className="text-darkb text-lg font-extrabold" />
              }
            />
            <Wrapper
              label="Password"
              name="password"
              type={"password"}
              required
              handleChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
              value={data.password}
              placeholder="Enter your password"
              icon={
                <AiFillLock className="text-darkb text-lg font-extrabold" />
              }
            />
            <Button className="w-full" content="Login" type="submit" />
          </form>
          <div className="flex justify-center gap-2 mt-4">
            <p>Don't have an account?</p>
            <Link to="/signup">
              <p className="text-darkb">Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
