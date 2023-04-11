import React from "react";
import "./InputTodo.css";
const InputTodo = ({ onChange, onSubmit, value, isEdit,  }) => {
  return (
    <div>
      <label htmlFor="InputTodo">Masukkan Kegiatan :</label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Input todo ..."
        required
      />
      <button onClick={onSubmit}>{isEdit ? "Edit" : "Submit"}</button>
    </div>
  );
};

export default InputTodo;
