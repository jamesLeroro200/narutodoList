import TodoComponent from "./Todo.component";
import {useDispatch, useSelector} from "react-redux";
import {TrashIcon} from "@heroicons/react/20/solid";
import {actions} from "../redux/store";

export default function TodoListComponent(){

    const filterMap = {
      "Toutes":(t=>t.completed || !t.completed),
      "Terminée(s)":t=>t.completed,
      "Non terminée(s)":t=>!t.completed
    }

    const tasks=useSelector(state => state.todo);
    const filter= useSelector(state => state.filter);
    const dispatch=useDispatch();

    const handleDeleteAll=()=>{
        dispatch(actions.deleteAllTasks(null));
    }

    return(
        <div className="max-w-7xl grid grid-cols-7 gap-x-0">
            <img src="images/naruto.png" width="170" alt="cutie anime png" />
            <div className="col-span-5 col-start-2 col-end-7 p-8 mb-8 border border-blue-200 rounded-lg shadow-lg shadow-blue-400 text-center">
                <span className="font-bold py-2 px-4 border border-dashed border-blue-500 rounded-lg dark:text-white dark:hover:text-black hover:cursor-default hover:text-white hover:bg-blue-300">Total : { tasks.filter(filterMap[filter]).length } / {tasks.length}</span>
                <ul className="font-mono pt-5 col-span-2">
                    {
                        tasks.filter(filterMap[filter]).length>0 ?
                            tasks.filter(filterMap[filter])
                                .map((task)=>{
                                    return <TodoComponent key={`${Date.now() - task.id}`} task={task}/>
                                })
                            :
                            tasks.length>0?
                            (filter==="Terminée(s)" &&
                                <div>
                                    <div className="flex justify-center items-center">
                                        <img src="images/sad-naruto.png" className="object-cover" width="170" alt="cutie anime png" />
                                    </div>
                                    <span className="block w-full text-center text-blue-500 text-3xl w-full">
                                        Tu n'as encore terminé aucune tâche
                                    </span>
                                </div>
                            ) ||
                            (filter==="Non terminée(s)" &&
                                <div>
                                    <div className="flex justify-center items-center">
                                        <img src="images/good-naruto.png" className="object-cover" width="170" alt="cutie anime png" />
                                    </div>
                                    <span className="block text-center text-blue-500 text-3xl w-full">
                                        Super, tu as terminé toutes les tâches
                                    </span>
                                </div>
                            ):
                            <span className="block w-full text-center text-blue-500 text-3xl w-full"> Aucune tâche à afficher 🤐️</span>
                    }
                </ul>
                {
                    tasks.length>0?
                        <div className="flex justify-center items-center mt-20">
                            <button onClick={handleDeleteAll} className="flex self-center py-2 px-4 bg-red-600 text-white hover:text-black hover:bg-red-300 rounded-lg">
                                <TrashIcon width={20} height={20}/>
                                Tout supprimer
                            </button>
                        </div>:
                        null
                }

            </div>
            <img src="images/naruto-ermite.png" width="150"  alt="cutie anime png" />
        </div>
    );
}