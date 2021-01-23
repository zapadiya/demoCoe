import * as types from './actionTypes'
import ApiList from "../../Webservice/ApiList";

export const apiLoadingStart = () => ({type: types.API_LOADING_START});
export const apiLoadingStop = () => ({type: types.API_LOADING_STOP});
export const noInternetConnected = (isConnected) => ({type: types.IS_INTERNET_CONNECTED, payload:isConnected});

const errorHendler = (type, message) => {
    return (dispatch) => {
        dispatch(onError({message: message, type: type}));
        setTimeout(() => {dispatch(onError(''));}, 2000)
    }
};
const onError = (data) => ({type: types.ON_ERROR_RECEIVED, payload: data});
export const getConfigurationAction = () => {	
	return (dispatch) => {
		return  ApiList.getConfiguration().then(data => {        
			if(data.status == 200){
				dispatch({ type: types.CONFIG_SUCCESS, payload: data.data});
			}else{
				dispatch({ type: types.CONFIG_ERROR, payload:data.error});
			}
		}).catch((error) => {
			dispatch({ type: types.CONFIG_ERROR, payload: error.error });
		});
		
	};
};

export const setCurrentRouteName = (routeName) => {	
	return (dispatch) => {
		dispatch({ type: types.SET_CURRENT_ROUTE_NAME, payload: routeName });

	};
};