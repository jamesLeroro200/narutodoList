import './App.css';
import TodoListComponent from "./components/TodoList.component";
import AddTodoFormComponent from "./components/AddTodoForm.component";
import FiltersComponent from "./components/Filters.component";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {useState} from "react";
import {MoonIcon, SunIcon} from "@heroicons/react/20/solid";

function App() {
    const [mode, setMode]=useState("Sombre");
    const switchMode = () => {
        const doc = document.getElementById("doc");
        if(doc.classList.contains("dark")){
            doc.classList.remove("dark");
            setMode("Sombre");
        }
        else{
            doc.classList.add("dark");
            setMode("Éclairé");
        }
    }
  return (
    <Provider store={store}>
        <div className="dark:bg-gray-800 pb-8">
            <div className="flex p-8 justify-end items-center">
                <button onClick={switchMode} className="flex font-bold text-gray-800 dark:text-yellow-300">
                    {
                        mode === "Sombre"?
                            <MoonIcon width={20} height={20} className="mx-1 my-0.5"/> :
                            <SunIcon width={20} height={20} className="mx-1 my-0.5" />
                    }
                    {mode}
                </button>
            </div>
            <AddTodoFormComponent />
            <FiltersComponent />
            <TodoListComponent />
        </div>
    </Provider>
  );
}

export default App;
