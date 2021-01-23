import React, {Component} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';

import styles from './NoInternetStyle';



class NoInternet extends Component {
    state = {
        modalVisible: true,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    handleRetry = () => {
        this.props.onRetry && this.props.onRetry();
    }

    render() {
        return (
            <Modal
                // animationType="slide"
                transparent={true}
                visible={this.props.isInternetConnected}
                onRequestClose={() => {

                }}>
                <View style={styles.mainView}>
                    <Image style={styles.imageStyle} source={NOINTERNET}/>
                    <View style={styles.innerView}>
                        <Text style={styles.headerMsg}>{'NO INTERNET CONNECTION'}</Text>
                        <Text style={styles.bodyMsg}>{'You are offline please check you internet connection'}</Text>

                    </View>
                </View>
            </Modal>
        );
    }
}

export default NoInternet;
