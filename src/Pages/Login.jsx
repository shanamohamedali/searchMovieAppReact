import React from "react";
import  {useAddField}  from "../hooks/useAddField";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Login() {
  const {field, handleChange, handleSubmit } = useAddField({
    username: "",
    password: ""
  });
  console.log(field)

  return (
    <div>
      <Header/>
    <div className="w-[450px] bg-primary-color p-3 mx-auto
     dark:bg-white dark:text-primary-color mt-[50px] flex justify-center items-center mb-[80px]">
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
          />
          <input
          type="password"
            className="bg-[#333333] p-2 w-full mb-3 rounded-[4px] hover:border border-font-color 
            focus:outline-none text-[16px] placeholder:text-[14px] placeholder:text-font-color"
            placeholder="Password"
            name="password"
            id="password"
            value={field.name}
            onChange={handleChange}
          />
          <button
            className="w-full bg-secondary-color text-center mt-3 p-2 text-white text-[16px] font-[700]"
            type="submit"
          >
            Sign In
          </button>
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
<Footer/>
    
    </div>
  );
}
