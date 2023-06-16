import { combineReducers } from "redux";
import FormData from './reducer'
const CombRed =combineReducers(
    {
        data:FormData,  
    }
)
export default CombRed