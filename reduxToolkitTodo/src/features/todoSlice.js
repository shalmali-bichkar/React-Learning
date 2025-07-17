import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos:[{id:1, text:"Hello world", allowEdit:false}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            const todo = state.todos.find(t => t.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
                
            }
        },
        allowTodoEdit: (state,action) => {
            const todo = state.todos.find(t => t.id === action.payload.id);
            if (todo) {
                todo.allowEdit = !todo.allowEdit;
            }
        }
    }
})

export const {addTodo,removeTodo,editTodo,allowTodoEdit} = todoSlice.actions

export default todoSlice.reducer