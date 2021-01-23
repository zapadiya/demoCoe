import {apiConfig, HeaderSecretKey, mode} from "../Config";
import AsyncStorage from '@react-native-community/async-storage'

class HTTP {
	constructor() {
	}

	GET = async (url) => {
		if(mode == 'production'){
			var mainDomain = apiConfig.productionApiURL;
		} else if(mode == 'testing'){
			var mainDomain = apiConfig.testingApiURL;
		} else {
			var mainDomain = apiConfig.developmentApiURL;	
		}
		let accessToken = await AsyncStorage.getItem('accessToken');
		if(accessToken == null || accessToken == undefined){
			accessToken = ''
		}

		console.log("HeaderSecretKey==", HeaderSecretKey.Development);
		console.log("AccessToken==", accessToken);
		console.log("URL==", mainDomain + url);

		try {			
			let response = await fetch(mainDomain + url, {
				method: "GET",
				credentials: 'same-origin',
				headers: {
					//Header Defination
					Authorization: accessToken,
					apiSecretKey: HeaderSecretKey.Development,
					Accept: "application/json",
					'Content-Type': 'application/json;charset=utf-8'
				}
			});
			
			if (response.status == 200) {
				const responseJson = await response.json();	
				if (responseJson) {
					return responseJson;
				} else if (!responseJson.status) {
					return {
						error: responseJson.error.message,
						status: "failed"
					};
				} else {
					return null
				}
			}else{
				return null
			}
		} catch (error) {
			console.log(error);
			return error;
		}
	}

	POST = async (url, data) => {
		if(mode == 'production'){
			var mainDomain = apiConfig.productionApiURL;
		} else if(mode == 'testing'){
			var mainDomain = apiConfig.testingApiURL;
		} else {
			var mainDomain = apiConfig.developmentApiURL;	
		}
		
		let accessToken = await AsyncStorage.getItem('accessToken');
		if(accessToken == null || accessToken == undefined){
			accessToken = ''
		}

		console.log("HeaderSecretKey==", HeaderSecretKey.Development);
		console.log("AccessToken==", accessToken);
		console.log("URL==", mainDomain + url);

		try {			
			let response = await fetch(mainDomain + url, {
				method: "POST",
				credentials: 'same-origin',
				headers: {
					//Header Defination
					Authorization: accessToken,
					apiSecretKey: HeaderSecretKey.Development,
					Accept: "application/json",
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify(data)
			});
			if (response.status == 200) {
				const responseJson = await response.json();	
				if (responseJson) {
					return responseJson;
				} else if (!responseJson.status) {
					return {
						error: responseJson.error.message,
						status: "failed"
					};
				} else {
					return null
				}
			}else{
				return null
			}
		} catch (error) {
			console.log(error);
			return error;
		}
	}
}
export default new HTTP();