import * as types from './actionTypes'
import {apiLoadingStart, apiLoadingStop} from './../global';


export const addLocationAction = (params, nav) => {
	return (dispatch) => {
		console.log("params===", params)
		apiLoadingStart()
		dispatch({ type: types.ADDLOCATION_SUCCESS, payload: params});
		setTimeout(() => {
			nav.goBack();
			apiLoadingStop()
		}, 1000);
		
	};
};