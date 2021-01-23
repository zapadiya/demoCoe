import * as types from './actionTypes'

const initialState = {
    loading: false,
    locationDetail: {
        latitude: 36.0225,
        longitude: -121.5424
    },
    isLogin: false
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADDLOCATION_SUCCESS:
			return {
				...state, 
                locationDetail: action.payload,
			};
		case types.ADDLOCATION_ERROR:
			return {
                ...state,
				message: action.payload,
			};
        default:
            return state
    }
};

export default userReducer
