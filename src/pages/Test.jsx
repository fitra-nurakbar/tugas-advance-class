import React, { useState } from "react";
import styles from "../styles/Test.module.css";

export default function Test() {
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "Andi",
    },
    {
      id: 2,
      name: "Krisna",
    },
    {
      id: 3,
      name: "Ahmad Kun",
    },
  ]);

  const handleSortAscending = () => {
    setData([...data].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const handleSortDescending = () => {
    setData([...data].sort((a, b) => b.name.localeCompare(a.name)));
  };

  const handlerChange = (e) => {
    const value = e.target.value;

    setInput(value);
  };

  const result = data.filter((x) =>
    x.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input type="text" placeholder="search" onChange={handlerChange} />
      <ol>
        {result
          ? result.map((user, index) => (
              <li key={index}>
                <p>
                  {index+1}. {user.name}
                </p>
                <button onClick={() => setNumber(user.id)}>Button</button>
              </li>
            ))
          : data.map((user, index) => (
              <li key={index}>
                <p>
                  {user.id}. {user.name}
                </p>
                <button onClick={() => setNumber(user.id)}>Button</button>
              </li>
            ))}
      </ol>
      <p>ID User : {number}</p>
      <button onClick={() => setNumber(0)}>Reset</button>
      <button onClick={handleSortAscending}>Sort Ascending</button>
      <button onClick={handleSortDescending}>Sort Descending</button>
    </div>
  );
}
