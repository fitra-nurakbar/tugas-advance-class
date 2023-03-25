import React, { useState } from "react";
import { useFungsiDispatch } from "../context/StorageContext";

export default function AddList() {
  const [input, setInput] = useState({
    name: "",
  });
  const dispatch = useFungsiDispatch();

  const handlerChange = (e) => {
    const value = e.target.value;
    const name = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const handlerClick = (e) => {
    e.preventDefault();

    dispatch
  }

  return (
    <>
      <input type="text" name="name" onChange={handlerChange} />
      <button onClick={handlerClick}>ADD</button>
    </>
  );
}
