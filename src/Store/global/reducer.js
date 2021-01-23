import * as types from './actionTypes';

const initialState = {
    loading: false,
    isInternetConnected:true,
    errorMessage: '',
    configData: {},
	isError: false,
	currentRouteName:'',
};
const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.API_LOADING_START:
            return {
				...state, 
				loading: true
			};
        case types.API_LOADING_STOP:
            return {
				...state, 
				loading: false
			};
        case types.IS_INTERNET_CONNECTED: 
            if(action.payload === false){
                return {
					...state, 
					isInternetConnected: action.payload, 
					loading: false
				};
            }else{
                return {
					...state, 
					isInternetConnected: action.payload
				};
            }
        case types.ON_ERROR_RECEIVED:
            return {
                ...state, 
                loading: false, 
                errorMessage: action.payload.message, 
                isError: action.payload.type
            };
        case types.CONFIG_SUCCESS:
            return {
                ...state, 
                configData: {...action.payload},
            };
        case types.CONFIG_ERROR:
            return {
                ...state,
                message: action.payload,
			};
			case types.SET_CURRENT_ROUTE_NAME:
            return {
                ...state,
                currentRouteName: action.payload,
			};
			
        default:
            return state
    }
};

export default globalReducer

