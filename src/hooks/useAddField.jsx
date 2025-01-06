import { useState } from "react";

export const useAddField = (initialValue) => {
  const [field, setField] = useState(initialValue);

  const handleChange = (e) => {
    setField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setField("");
  };

  return {
    field,
    handleChange,
    handleSubmit,
  };
};
