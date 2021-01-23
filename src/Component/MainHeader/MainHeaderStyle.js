import {StyleSheet} from "react-native";
import {color} from "../../Constants/Color";
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    leftcontainer:{
    },
    backIcon:{
        width: 20,
        height: 20,
    },
    centerText:{
        color: color._SECONDARY, 
        fontSize: wp(4.5), 
        fontWeight: '600'
    }
});

export default styles;