import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../redux/store";

export default function AddTodoFormComponent(){

    const[content, setContent]=useState("");
    const textTield= useRef();
    const tasks= useSelector(state => state.todo)
    const dispatch= useDispatch();

    const handleChange = (content) => {
      setContent(content);
    }
    const onClik = (event) => {
        event.preventDefault();
        const task={
            id:tasks.length+1,
            content:content,
            completed:false
        }
      dispatch(actions.addTask(task));
      handleChange("");
    }

    return(
        <div className="p-8 mt-6 max-w-xl mx-auto space-y-6 justify-center items-center">
            <span className="flex justify-center items-center text-5xl text-blue-500 font-bold">
                <img src="images/logo-naruto.png" className="object-cover" width="100" alt="cutie anime png" />
                <span className="text-orange-600 dark:text-yellow-300">NaruTo</span>doList
            </span>
            <form title="Ajouter une tâche" className="flex rounded-lg shadow-lg items-center bg-blue-200">
                <span className="w-4/5">
                    <input type="text" value={content} className="w-full rounded-lg border border-4 border-blue-500 p-4" placeholder="Ajouter une tâche ..." ref={textTield} onChange={(event => handleChange(event.target.value))}/>
                </span>
                <button type="submit" disabled={content===""} className="text-slate-100 hover:text-slate-800 rounded-lg bg-blue-500 hover:bg-blue-300 border shadow-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed disabled:shadow-none disabled:text-slate-100 disabled:hover:py-2 px-4 py-2 hover:py-4 duration-100" onClick={(event)=>{
                    onClik(event)
                }}>
                    Ajouter
                </button>
            </form>
        </div>
    );
}