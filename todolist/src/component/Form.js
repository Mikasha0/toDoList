import React from "react";
import { useState } from "react";

export default function Form() {
  const [text, setText] = useState("Start");

  const [list, setList] = useState([]);

  const handleClick = () => {
    const newList = {
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      name: text,
    };
    setList([...list, newList]);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

 const deleteList = (id) => {
  setList(list.filter((newTask)=> newTask.id !== id));
 }

  return (
    <>
      <div className="container w-50 my-5 input-group">
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          placeholder="Enter Anything Here."
        />
        <button
          className="btn btn-primary mx-3"
          onClick={handleClick}
          type="submit"
        >
          AddList
        </button>
      </div>
      <div className="container w-50 my-5">
        {list.map((newTask) => {
          return (
            <div>
              <li key="uniqueId1 ">{newTask.name}</li>
              <button className="btn btn-primary mx-4 my-1" onClick={()=>{deleteList(newTask.id)}}>X</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
