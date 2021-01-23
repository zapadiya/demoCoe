import React, {Component} from 'react';
import {SafeAreaView, View, TextInput, Text} from 'react-native';
import styles from './AddLocationScreenStyle';
import {MainHeader} from "@Component";
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import {isEmpty} from './../../Utility/Validation';
import {addLocationAction} from './../../Store/user';

class AddLocationScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			latitude: '26.2548',
			latitudeError: '',
			longitude: '76.2154',
			longitudeError: '',
		};
	}

	_addLocation = () => {
		let isvalid = true;
		if (isEmpty(this.state.latitude)) {
			this.setState({latitudeError: 'Please enter latitude.'});
			isvalid = false;
		}
		if (isEmpty(this.state.longitude)) {
			this.setState({longitudeError: 'Please enter longitude.'});
			isvalid = false;
		}
		if (isvalid) {
			this.props.addLocationAction({latitude:this.state.latitude, longitude:this.state.longitude}, this.props.navigation);
		}
	};

	_gotoBack = () => {
		this.props.navigation.goBack();
	}

	render() {
		return (
		<View style={styles.container}>
			<MainHeader centerTitle={'Add Location'} leftIcon={'chevron-left'} _onLeftAction={this._gotoBack}/>
			<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
				<View style={styles.formContainer}>
					<TextInput style={styles.inputBox} placeholder="Enter latitude here" onChangeText={(text) => {this.setState({latitude: text}); this.setState({latitudeError: ''});}} defaultValue={this.state.latitude}/>
					<Text style={styles.inputError}> {this.state.latitudeError != '' ? this.state.latitudeError : ''}</Text>
					<TextInput secureTextEntry={false} style={styles.inputBox} placeholder="Enter longitude here" onChangeText={(text) => { this.setState({longitude: text}); this.setState({longitudeError: ''}); }} defaultValue={this.state.longitude}/>
					<Text style={styles.inputError}>{' '}{this.state.longitudeError != ''? this.state.longitudeError: ''}{' '}</Text>
					<Button title={'Add'} type={'solid'} onPress={() => {this._addLocation();}} containerStyle={styles.buttonContainerStyle} buttonStyle={styles.buttonStyle}/>
				</View>
			</SafeAreaView>
		</View>
		);
	}
	}

const mapStateToProps = (state) => {
  return {};
};

const mapActionCreators = {addLocationAction};

export default connect(mapStateToProps, mapActionCreators)(AddLocationScreen);
