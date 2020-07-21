// здесь собираем все данные от каждого reducera
import {combineReducers} from 'redux';
import {dataReducer} from './data/data-reducer.js';
import {offersReducer} from './offers/offers-reducer.js';
import {usersReducer} from './user/user-reducer.js';
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.OFFERS]: offersReducer,
  [NameSpace.USERS]: usersReducer,
});

