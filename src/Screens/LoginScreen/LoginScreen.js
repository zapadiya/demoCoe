import React, {Component} from 'react';
import {SafeAreaView, View, TextInput, Text} from 'react-native';
import styles from "./LoginScreenStyle";
import {connect} from "react-redux";
import{Button} from 'react-native-elements';
import {isEmpty} from './../../Utility/Validation';
import {loginAction} from './../../Store/user';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'test@gmail.com',
            emailError: '',
            password: '12345678',
            passwordError: ''
        };
	}
	


    _doLogin = () => {
		let isvalid = true;
		if(isEmpty(this.state.email)){
			this.setState({emailError: 'Please enter email.'})
			isvalid = false;
		}
		if(isEmpty(this.state.password)){
            this.setState({passwordError: 'Please enter password.'})
			isvalid = false;
		}
		if(isvalid){
			this.props.navigation.reset({
				index: 0,
				routes: [{ name: 'Home' }],
			});
			//this.props.loginAction({username:this.state.email, password:this.state.password}, this.props.navigation);
		}
	}

    render() {
        return (
            <View style={styles.container}>
				<SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
					<View style={styles.formContainer}>
						<TextInput style={styles.inputBox} placeholder="Enter email here" onChangeText={text => {this.setState({email: text}); this.setState({emailError:''})}} defaultValue={this.state.email}/>
						<Text style={styles.inputError}>{this.state.emailError != ''?this.state.emailError: ''}</Text>
						<TextInput secureTextEntry={true} style={styles.inputBox} placeholder="Enter password here" onChangeText={text => {this.setState({password: text}); this.setState({passwordError: ''})}} defaultValue={this.state.password}/>
						<Text style={styles.inputError}>{this.state.passwordError != ''?this.state.passwordError: ''}</Text>
						<Button	title={'Login'} type={'solid'}	onPress={() => {this._doLogin()}} containerStyle={styles.buttonContainerStyle} buttonStyle={styles.buttonStyle}/>
					</View>
				</SafeAreaView>
			</View>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapActionCreators = {loginAction};

export default connect(mapStateToProps, mapActionCreators)(LoginScreen);
