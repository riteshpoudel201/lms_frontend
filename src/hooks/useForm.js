import React from "react";

const useForm = ({ initialState }) => {
  const [formData, setFormData] = React.useState(initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return {
    formData,
    isLoading,
    setIsLoading,
    handleChange
  };
};

export default useForm;
