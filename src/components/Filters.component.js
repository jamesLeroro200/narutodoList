import {useDispatch, useSelector} from "react-redux";
import {filterActions} from "../redux/store";

export default function FiltersComponent() {

    const filters=["Terminée(s)", "Non terminée(s)", "Toutes"];
    const active= useSelector(state => state.filter);
    const dispatch= useDispatch();

    const handleClick = (event) => {
        dispatch(filterActions.switchToFilter(event.target.innerText.toString()));
    }

    return(
        <div className="flex max-w-4xl mx-auto p-8 justify-center items-center space-x-3">
            {
                filters.map((filter => <button key={`${Date.now()}-${filter}`} onClick={(event => handleClick(event))} className={filter===active? "px-6 py-2 bg-blue-500 text-slate-100 rounded-lg shadow-blue-300":"px-6 py-2 bg-blue-300 text-slate-100 hover:bg-blue-500 rounded-lg shadow-blue-300" }>{filter}</button>))
            }
        </div>
    );
}