import HTTP from "./http";

class APIList {
	constructor() { }

	getConfiguration(){
		return HTTP.GET("configuration");
	}

	login(params) {
		return HTTP.POST("login", params);
	}

}

export default new APIList();