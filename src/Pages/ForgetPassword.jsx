import React from "react";
import { FormLayout } from "../layouts/FormLayout";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAddField } from "../hooks/useAddField";

export function ForgetPassword() {
  const { field, handleChange } = useAddField({
    username:"",
    password:""
  });
  return (
    <FormLayout
      label="Forget Password"
      linkForgotPassword="\login"
      labelForgotPassword="Back to logIn"
      Question="New to ReelMagic?"
      linkUserReg="\signup"
      labeluerReg="SignUp"
    >
      <form onSubmit="">
        <Input
          type="text"
          placeholder="Email or Phone Number"
          name="username"
          id="username"
          value={field.username}
          onChange={handleChange}
          onBlur=""
        />
        <Input
          type="New password"
          placeholder="Password"
          name="Password"
          id="Password"
          value={field.password}
          onChange={handleChange}
          onBlur=""
        />
        <Button label="Sign Up" type="Submit" />
      </form>
    </FormLayout>
  );
}
