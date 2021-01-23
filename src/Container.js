import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from "react-native";
import Navigation from "./Navigation";
import {Loader} from "@Component";
import NetInfo, {NetInfoSubscription} from "@react-native-community/netinfo";
import {noInternetConnected} from "src/Store/global";

class Containers extends Component {
    _subscription: NetInfoSubscription | null = null;

    constructor(props) {
        super(props);
        this.state = {
            isConnected: true,
            isUpdateAvailable: false,
        }
    }
    async componentDidMount() {
        this._subscription = NetInfo.addEventListener(state => {
            this.setState({
                isConnected: state.isConnected
            })
            this.props.noInternetConnected(state.isConnected)
        });
    }

    onUpdateButton() {

    }

    componentWillUnmount() {
        this._subscription && this._subscription();
    }


    render() {
        return (
            <>
                <Navigation/>
                <Loader loading={this.props.globalLoding}/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isInternetConnected: state.global.isInternetConnected,
        globalLoding: state.global.loading,
    };
};
const mapActionCreators = {noInternetConnected};

export default connect(mapStateToProps, mapActionCreators)(Containers);
