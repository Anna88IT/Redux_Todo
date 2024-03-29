import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_CHECKBOX } from "../actions/actions";

const initialState = [
    { id: 1, todo: 'Buy Laptop', completed: false },
    { id: 2, todo: 'Master Redux', completed: true }
]

export const operationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_ALL:
            return [];
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo) => todo.id !== action.payload)
            return filteredTodos;
        case UPDATE_CHECKBOX:
            return  state.map((todo) => {
                if(todo.id === action.payload){
                    return {
                        id: todo.id,
                        todo: todo.todo,
                        completed: !todo.completed
                    }
                }
                return {
                    id: todo.id,
                    todo: todo.todo,
                    completed: todo.completed
                }
            });

        default:
            return state;
    }
}
