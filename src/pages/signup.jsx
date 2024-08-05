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
    await sendRequest(data.firstName, data.lastName, data.email, data.password);
  };

  async function sendRequest(firstName, lastName, email, password) {
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
      })
      .catch((err) => {
        notification.error({
          message: err.response.data.message || "Error Occurred!",
        });
      });
  }

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen font-urbanist">
      {/* Image and Info Section */}
      <div
        className="relative w-full md:w-1/2 lg:w-3/5 flex flex-col justify-between p-6 md:p-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="mt-auto">
          <img src={logo} alt="Logo" className="w-20 md:w-32" />
          <p className="font-bold text-white text-lg md:text-xl lg:text-2xl mt-4">
            Interesting ideas worth reading, from Rwanda’s top authors
          </p>
          <p className="mt-2 text-white text-sm md:text-base lg:text-lg font-light">
            Join the world of 100+ creative writers and more.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex items-center justify-center p-8 md:p-16 bg-white">
        <div className="w-full max-w-md space-y-8">
          <h3 className="text-center text-xl md:text-2xl font-semibold">
            Welcome On Board!
          </h3>
          <p className="text-center text-gray-500">
            Please enter your information to create an account!
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Wrapper
              label="First Name"
              name="firstName"
              required
              handleChange={(e) =>
                setData({ ...data, firstName: e.target.value })
              }
              placeholder="Enter your first name"
              value={data.firstName}
            />
            <Wrapper
              label="Last Name"
              name="lastName"
              required
              handleChange={(e) =>
                setData({ ...data, lastName: e.target.value })
              }
              placeholder="Enter your last name"
              value={data.lastName}
            />
            <Wrapper
              label="Email"
              name="email"
              required
              handleChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="Enter your email"
              value={data.email}
            />
            <Wrapper
              label="Password"
              name="password"
              required
              type={"password"}
              handleChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
              placeholder="Enter your password"
              value={data.password}
            />
            <Button className="w-full" content="Sign Up" type="submit" />
          </form>
          <div className="flex justify-center gap-2 mt-4">
            <p>Already have an account?</p>
            <Link to="/">
              <p className="text-darkb">Sign In</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
