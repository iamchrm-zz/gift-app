import React, { useEffect, useState } from "react";

export const useForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log("montando email");

    return () => {
      console.log("desmontando email");
    };
  }, [email]);

  const handleInputChange = ({ e }) => {
    console.log("set input ");

    setformValues(
      ...formValues,
      setFormValues(() => e.value)
    );
  };

  return formValues, handleInputChange;
};
