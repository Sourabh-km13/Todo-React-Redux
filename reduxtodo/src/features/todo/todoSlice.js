import { createSlice, nanoid } from "@reduxjs/toolkit";
 
const initialState= {
    todos:[{id:1, text:""}],
    edit:false,
    editVal:"",
    editInfo:""

}

export const todoSlice= createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const to = {id:nanoid(), text:action.payload}
            state.todos.push(to)
        },
        removeTodo:(state, action)=>{
            state.todos=state.todos.filter((tod)=>tod.id!=action.payload)
        },
        updateTodo:(state, action)=>{
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id
                  ? { ...todo, text: action.payload.text }
                  : todo
              );
      
        },
        setEdit:(state)=>{
            state.edit= !state.edit
        },
        setEditinfo:(state, action)=>{
            state.editInfo=action.payload
        },
        setEditval:(state, action)=>{
            state.editVal= action.payload
        }
        
    }
})

export const { addTodo, removeTodo, updateTodo, setEdit, setEditinfo, setEditval} = todoSlice.actions
export default todoSlice.reducer