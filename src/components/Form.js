import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/actions";

export const Form = () => {
    const [todoValue, setTodoValue] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = ((e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();

        setTodoValue("");
        let todoObj = {
            id: time,
            todo: todoValue,
            completed: false,
        }
        dispatch(addTodo(todoObj))
    })

    return (
        <form className="form-group custom-form" onSubmit={handleSubmit}>
            <label>Add your todo-items</label>
            <div className="input-and-btn">
                <input
                    type="text"
                    className="form-control"
                    value={todoValue}
                    onChange={(e) => setTodoValue(e.target.value)}
                />
                <button
                    type="submit"
                    className="btn"
                    >
                    Add
                </button>
            </div>
        </form>
    )
}