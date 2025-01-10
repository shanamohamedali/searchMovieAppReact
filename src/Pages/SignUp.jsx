import React from "react";
import { FormLayout } from "../layouts/FormLayout";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAddField } from "../hooks/useAddField";

export function SignUp() {
  const { field, handleChange } = useAddField({
    firstname: "",
    username: "",
    password: "",
  });

  const [error, seterror] = useState({
    firstname: "",
    username: "",
    password: "",
  });
  const validateFirstname = () => {
    if (field.firstname === "") {
      seterror((prev) => ({
        ...prev,
        username: "Required",
      }));
      return false;
    } 
    seterror((prev) => ({
      ...prev,
      username: "",
    }));
    return true;
  };
  

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
    if (field.username === "") {
      seterror((prev) => ({
        ...prev,
        password: "Required",
      }));
      return false;
    } else if ((field.password).length < 6) {
      seterror((prev) => ({
        ...prev,
        password: "Password should have atleast 6 characters",
      }));
      return false;
    }
    seterror((prev) => ({
      ...prev,
      password: "",
    }));
    return true;
  };
  return (
    <FormLayout
      label="Sign Up"
      linkForgotPassword=""
      labelForgotPassword=""
      Question="Already have an Account?"
      linkUserReg="\login"
      labeluserReg="Sign In"
    >
      <form onSubmit="">
        <Input
          type="text"
          placeholder="FirstName"
          name="firstname"
          id="firstname"
          value={field.firstname}
          onChange={handleChange}
          onBlur={validateFirstname}
        />
        {error.firstname && <p className="text-error">{error.firstname}</p>}
        <Input
          type="text"
          placeholder="Email or Phone Number"
          name="username"
          id="username"
          value={field.username}
          onChange={handleChange}
          onBlur={validateUsername}
        />
         {error.username && <p className="text-error">{error.username}</p>}

        <Input
          type="password"
          placeholder="Password"
          name="Password"
          id="Password"
          value={field.password}
          onChange={handleChange}
          onBlur={validatePassword}
        />
         {error.password && <p className="text-error">{error.password}</p>}

        <Button label="Sign Up" type="Submit" />
      </form>
    </FormLayout>
  );
}
