import React, { useState } from "react";
import PropTypes from "prop-types";
import GiftCart from "./GiftCart";

export const GiftItem = ({ id, title, url }) => {
  return (
    <>
      <li key={id}>
        <div className="drop-shadow-xl">
          <img
            src={url}
            alt={title}
            className=" transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-110 object-cover h-48 w-96 rounded-lg drop-shadow-xl"
          />
          <div>
            <button>add</button>
          </div>
        </div>
      </li>
    </>
  );
};

GiftItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
