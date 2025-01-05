import React from "react";

const useForm = ({ initialState }) => {
  const [data, setData] = React.useState(initialState);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return {
    data,
    isLoading,
    setIsLoading,
    handleChange
  };
};

export default useForm;
