import React, {Component} from 'react';
import {ImageBackground, ActivityIndicator} from 'react-native';
import MainHeader from 'src/Component/MainHeader/MainHeader';
import {connect} from "react-redux";
import * as resources from '../../Resources';
import styles from "./SplashScreenStyle";

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        setTimeout(() => { 				
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }, 2000);
    }


    render() {
        return (
            <ImageBackground source={resources.SPLASH_BG} style={styles.container}>
                <ActivityIndicator size="large" color="#000000" />
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
const mapActionCreators = {};
export default connect(mapStateToProps, mapActionCreators)(SplashScreen);
