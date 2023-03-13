import React from "react";
import "./InputTodo.css";
const InputTodo = ({onChange, onSubmit, value}) => {
  return (
    <div>
      <label htmlFor="InputTodo">Masukkan Kegiatan :</label>
      <input type="text" onChange={onChange} value={value} placeholder="Input todo ..." />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default InputTodo;
