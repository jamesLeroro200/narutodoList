import {useState} from "react";
import {useDispatch} from "react-redux";
import {actions} from "../redux/store";

export default function EditTodoFormComponent({task}) {

    const [content, setContent]=useState(task.content);
    const dispatch= useDispatch();

    const handleChange = (event) => {
      setContent(event.target.value);
    }
    const handleSave = (event) => {
      event.preventDefault();
        const editedTask={
            id:task.id,
            content:content,
            completed:task.completed
        }
      dispatch(actions.editTask(editedTask));
    }
    return(
        <span className="p-5 flex items-center justify-between bg-blue-200 rounded-b-lg border border-blue-500">
            <input type="text" value={content.toString()} onChange={(event => handleChange(event))} className="p-3 w-4/5 border border-2 border-blue-500 rounded-lg"/>
            <button onClick={(event => handleSave(event))} className="px-4 py-2 bg-green-500 hover:bg-green-300 shadow-lg shadow-green-100 rounded-lg disabled:bg-green-300 disabled:cursor-not-allowed disabled:shadow-none" disabled={content === ""}>Enregistrer</button>
        </span>
    );
}