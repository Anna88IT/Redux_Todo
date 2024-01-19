import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleCheckbox, removeTodo } from "../store/actions/actions";

export const Todos = () => {
    const dispatch = useDispatch();

    const todos = useSelector((state) => state.operationsReducer);
    return todos.map((todo) => (
        <div key={todo.id} className="todo-box">
            <div className="content">
                <input
                    className="checkbox"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(handleCheckbox(todo.id))}
                />
                <p className="todo" style={todo.completed === true ?
                    { textDecoration: "line-through" } :
                    { textDecoration: "none" }}>
                    {todo.todo}
                </p>
            </div>
            <div className="actions-box">
                <span onClick={() => dispatch(removeTodo(todo.id))}>X</span>
            </div>
        </div>
    ))
}