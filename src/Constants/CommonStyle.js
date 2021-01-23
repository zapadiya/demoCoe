import { StyleSheet ,Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import { color } from "./Color";

const commonStyle = StyleSheet.create({
	containerStyle:{
		flex: 1,
		backgroundColor: color._BGCOLOR
	},
});

export default commonStyle;