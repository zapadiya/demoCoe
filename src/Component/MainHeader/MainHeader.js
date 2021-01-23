import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import * as resources from '../../Resources';
//import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './MainHeaderStyle';
import { color } from "../../Constants/Color";

export const MainHeader = (props) => {
	const leftComponent = () => {
		if(props.leftIcon != undefined){
			return (
				<TouchableOpacity onPress={() => props._onLeftAction()} style={styles.leftcontainer}>
					<Image source={resources.BACK} style={styles.backIcon}></Image>
				</TouchableOpacity>
			);
		}else{
			return null
		}
		
	}
	const rightComponent = () => {
		return (
			<TouchableOpacity onPress={() => props._onRightAction()}>
				<Icon name="" size={25} color={color._PRIMARY} />
			</TouchableOpacity>
		);
	}

	return (
		<Header backgroundColor={color._PRIMARY} 
			leftContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center'}} 
			centerContainerStyle={{ flex: 5, alignItems: 'center', justifyContent: 'center'}} 
			rightContainerStyle={{ flex: 1, }}
			containerStyle={[props.style, { backgroundColor: color._PRIMARY, paddingLeft: 15 }]}
			leftComponent={leftComponent()}
			style={{ borderBottomColor: color._PRIMARY }}
			rightComponent={rightComponent()}
			centerComponent={{ text: props.centerTitle, style: [styles.centerText] }} />
	);}

export default MainHeader;
