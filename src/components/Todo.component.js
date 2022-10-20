import EditTodoFormComponent from "./EditTodoForm.component";
import { useState } from "react";
import {useDispatch} from "react-redux";
import {actions} from "../redux/store";
import {PencilSquareIcon, TrashIcon} from "@heroicons/react/20/solid";

export default function TodoComponent (props){

    const [showEditForm, SetShowEditForm]=useState(false);
    const [buttonLabel, setButtonLabel]=useState("Modifier");
    const dispatch= useDispatch();

    const handleDelete = () => {
      dispatch(actions.deleteTask(props.task.id));
    }

    const handleEdit = (event) => {
      SetShowEditForm(!showEditForm);
      setButtonLabel(event.target.innerText==="Modifier"?"Annuler":"Modifier");
    }

    const handleToggle = () => {
        const task={
            id:props.task.id,
            content:props.task.content,
            completed:!props.task.completed
        }
        dispatch(actions.editTask(task));
    }

    return(
        <>
            <li className="flex border-b border-blue-500 shadow-blue-300 last:border-none justify-between items-center text-center">
            <label htmlFor={props.task.id} className="flex items-center dark:text-white">
                <input type="checkbox" id={props.task.id} onChange={handleToggle} className="mr-4 w-7 h-7 shadow-lg shadow-blue-400" checked={props.task.completed}/>
                {props.task.content}
            </label>
            <span className="flex items-center space-x-3 p-3">
                <button onClick={(event=>handleEdit(event))} className="flex py-2 px-4 bg-amber-300 hover:bg-amber-100 shadow-lg shadow-amber-100 rounded-lg">
                    <PencilSquareIcon width={20} height={20}/>
                    {buttonLabel}
                </button>
                <button onClick={handleDelete} className="flex py-2 px-4 bg-red-400 hover:bg-red-200 shadow-lg shadow-red-200 rounded-lg">
                    <TrashIcon width={20} height={20}/>
                    Supprimer
                </button>
            </span>
            </li>
            {showEditForm && <EditTodoFormComponent task={props.task}/>}
        </>
    );
}