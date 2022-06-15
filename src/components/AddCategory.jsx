import React, { useState } from "react";

function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    const result =
      inputValue.trim().length > 2
        ? setCategories((valorAnterior) => [inputValue])
        : alert("Invalid");
    const reset = setInputValue("");

    return result + reset;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <input
          type="text"
          className="py-4 px-4 pl-9 border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1  rounded-full text-lg"
          placeholder="Gifs Searcher"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </form>
  );
}

export default AddCategory;
