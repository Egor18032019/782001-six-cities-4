// здесь собираем все данные от каждого reducera
import {combineReducers} from 'redux';
import {dataReducer} from './data/data-reducer.js';
import {usersReducer} from './user/user-reducer.js';
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.USERS]: usersReducer,
});

