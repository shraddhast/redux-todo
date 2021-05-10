import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../Action/ItemAction";

function AddItems() {
  const [inputData, setinputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.ItemReducer.list);
  console.log("state", list)
  return (
    <>
      Add your list here
      <div>
        <input
          type="text"
          placeholder="Add items"
          value={inputData}
          onChange={(e) => setinputData(e.target.value)} />

        <i className="fa fa-plus add-btn"
           onClick={() => dispatch(addTodo(inputData), setinputData(""))}>Add</i>
      </div>
      
      <div>
        {list.map((elem) => {
            return  (
                <div key={elem.id}><h3>
                {elem.data}
                <i className="far fa-trash-alt add-btn"
                onClick={() => dispatch(deleteTodo(elem.id))}></i>
            </h3></div>
            )
          
        } )}
      </div>
      <div>
      <i className="far fa-trash-alt add-btn" onClick={() => dispatch(removeTodo())}> Delete All</i>
            
      </div>
    </>
  );
}

export default AddItems;
