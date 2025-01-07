import React, { useContext, useState } from "react";
import { useAddField } from "../hooks/useAddField";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const { field, handleChange } = useAddField({
    username: "",
    password: "",
  });
  const [error, seterror] = useState({ username: "", password: "" });
  const [formError, setFormError] = useState("");
  console.log(field);
  const { login } = useContext(AuthContext);

  const validateUsername = () => {
    if (field.username === "") {
      seterror((prev) => ({
        ...prev,
        username: "Required",
      }));
      return false;
    } else if (!/^(?:\d{10}|\w+@\w+\.\w{2,3})$/.test(field.username)) {
      seterror((prev) => ({
        ...prev,
        username: "Invalid Format",
      }));
      return false;
    }
    seterror((prev) => ({
      ...prev,
      username: "",
    }));
    return true;
  };

  const validatePassword = () => {
    if (field.password === "") {
      seterror((prev) => ({
        ...prev,
        password: "Required",
      }));
      return false;
    }
    seterror((prev) => ({
      ...prev,
      password: "",
    }));
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (validateUsername() && validatePassword()) {
        if (
          field.username === "test@gmail.com" &&
          field.password === "testpass"
        ) {
          console.log("login Successfull");
          login("dummyToken");
          navigate("/home");
          setFormError("");
        }
        setFormError("Enter username=test@gmail.com and password=testpass");
      }
    } catch (error) {
      console.log(error);
    }
    setFormError("Required above fields");
  };
  
  return (
    <div>
      <Header />
      <div
        className="w-[450px] bg-primary-color p-3 mx-auto
     dark:bg-white dark:text-primary-color mt-[50px] flex justify-center items-center mb-[80px]"
      >
        <div className="mx-10 mt-2 p-3 w-full">
          <h3 className="text-white dark:text-primary-color text-[24px] font-[500] pb-4 ">
            Sign In
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="bg-[#333333] p-2 w-full mb-3 rounded-[4px] hover:border border-font-color 
            focus:outline-none text-[16px] placeholder:text-[14px] placeholder:text-font-color"
              placeholder="Email or Phone Number"
              name="username"
              id="username"
              value={field.name}
              onChange={handleChange}
              onBlur={validateUsername}
            />
            {error.username && <p className="text-red-700">{error.username}</p>}
            <input
              type="password"
              className="bg-[#333333] p-2 w-full mb-3 rounded-[4px] hover:border border-font-color 
            focus:outline-none text-[16px] placeholder:text-[14px] placeholder:text-font-color"
              placeholder="Password"
              name="password"
              id="password"
              value={field.name}
              onChange={handleChange}
              onBlur={validatePassword}
            />
            {error.password && <p className="text-red-700">{error.password}</p>}
            <button
              className="w-full bg-secondary-color text-center mt-3 p-2 text-white text-[16px] font-[700]"
              type="submit"
            >
              Sign In
            </button>
            {formError && <p className="text-red-700">{formError}</p>}
          </form>
          <div className="flex justify-end p-2">
            <a>Forgot Password?</a>
          </div>
          <div className="flex justify-center items-baseline mt-12">
            <p>New to ReelMagic? </p>{" "}
            <span className="text-white dark:text-primary-color ml-2">
              <a>Sign up now</a>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
