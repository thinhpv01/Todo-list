import React, { useState } from "react";
import todoImg from "../../img/todoImg.webp";
import "./style.scss";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
    console.log(items);
  };
  const deleteItem = (id) => {
    const updateItems = items.filter((item, idx) => idx !== id);
    setItems(updateItems);
  };

  const removeAll = () => {
    setItems([]);
  };
  return (
    <div>
      <div className="todo">
        <div className="todo__head">
          <img className="todo__logo" src={todoImg} alt="todo-img" />
          <div className="todo__title">Add Your List Here ✌</div>
        </div>
        <div className="todo__input">
          <input
            type="text"
            placeholder="✍ Add Item..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i
            className="fa-solid fa-plus"
            title="Add Item"
            onClick={addItem}
          ></i>
        </div>
        <div className="todo__list">
          {items.map((item, idx) => {
            return (
              <div key={idx} className="todo__list-item">
                <h3>{item}</h3>
                <i
                  className="far fa-trash-alt"
                  title="delete Item"
                  onClick={() => deleteItem(idx)}
                ></i>
              </div>
            );
          })}
        </div>
        <div className="todo__remove">
          <button data-sm-link-text="Remove All" onClick={removeAll}>
            <span>REMOVE ALL</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
