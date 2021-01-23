import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "src/Store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import {apiConfig} from "./src/Config";
import Containers from './src/Container';

console.disableYellowBox = true;
const Store = configureStore();

class App extends React.Component {
    constructor(props) {
		super(props);
    }
    
    render() {
		const persistor = persistStore(Store);
		return (
            <Provider store={Store}>
				<PersistGate persistor={persistor} >
					<Containers />
				</PersistGate>
			</Provider>
        );
    }
};

export default App;
