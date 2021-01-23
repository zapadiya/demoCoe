import {StyleSheet, Platform, StatusBar} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {color} from '../../Constants/Color';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	formContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputBox: {
		width: wp(80),
		height: 48,
		borderBottomColor: color._PRIMARY,
		borderBottomWidth: 1,
	},
	inputError: {
		width: wp(80),
		color: color._WARNINGTEXT,
		textAlign: 'left',
		marginTop: 3,
	},
		buttonContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	buttonStyle: {
		backgroundColor: color._PRIMARY,
		height: hp(5),
		width: wp(80),
		borderRadius: 150,
	},
});
export default styles;
