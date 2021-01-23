import { StyleSheet, Platform, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0,
        // alignItems: 'center',
    },
    map: {
        position: 'absolute',
        width: wp(100),
        height: hp(80),
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    bottomButton:{
        flexDirection: 'row',
        position: 'absolute',
        bottom: hp(3),
        paddingHorizontal: 30
    },
    buttonContainerStyle1:{
        marginRight: 20,
		marginTop: 20
    },
    buttonContainerStyle: {	
		marginTop: 20
	},
	buttonStyle: { 
		backgroundColor: color._PRIMARY, 
		height: hp(5),
		width: wp(40),
		borderRadius: 150,
    },
    calloutText:{
        
    }
});
export default styles;

