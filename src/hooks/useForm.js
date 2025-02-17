import React from "react";

const useForm = ({ initialState }) => {
  const [formData, setFormData] = React.useState(initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    let { checked, name, value } = e.target;
    if(name === "status"){
      value = checked ? "active" : "inactive";

    }
    setFormData({ ...formData, [name]: value });
  };
  return {
    formData,
    setFormData,
    isLoading,
    setIsLoading,
    handleChange
  };
};

export default useForm;
