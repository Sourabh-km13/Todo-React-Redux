import React, {useState, useEffect} from 'react'
import { addTodo, updateTodo,setEdit,setEditinfo,setEditval } from '../features/todo/todoSlice'
import { useDispatch, useSelector } from "react-redux";

export function AddTodos() {

    const [input, setInput] = useState('')
    const edit= useSelector(state=>state.edit)
    const editVal = useSelector(state=>state.editVal)
    const editInfo = useSelector(state=>state.editInfo)

    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
      e.preventDefault()
      if(input.length>0 && !edit){
      dispatch(addTodo(input))
      setInput('')
      }
      else if(input.length>0 && edit){
       console.log(input);
        dispatch(updateTodo({id:editInfo, text:input}))
        dispatch(setEdit())
        setInput('')
      }
    }
    
    useEffect(() => {
      edit?setInput(editVal): setInput('')
    }, [edit])
    

    return (
        
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 text-center">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {!edit?<button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>:null}
      {edit ? (
          <button className="bg-blue-500 px-2 py-2 text-white rounded-md hover:bg-orange-500 " type='submit'>
          ✔
          </button>
        ) : null}
    </form>
        
    )
}
