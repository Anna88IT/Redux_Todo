import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteAll} from "../store/actions/actions";

export const Delete = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.operationsReducer)

    const handleDelete = () => {
        dispatch(deleteAll())
    }
    return (
        <>
            {
                Object.keys(todos).length !== 0 &&
                <button className="delete" onClick={handleDelete}>Delete All</button>
            }

        </>


    )
}
