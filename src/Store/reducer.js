import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage'

import global from './global';
import user from './user';

const config = {
	key: "root",
	debug: true,
	storage: AsyncStorage,
};

const AppReducers = combineReducers({
	global,
	user
});

const rootReducer = (state, action) => {
	return AppReducers(state, action);
}

const pReducer = persistReducer(config, rootReducer);

export default pReducer;

