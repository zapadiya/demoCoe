import React, { useEffect, useState } from "react";
import { useColorScheme, Appearance} from "react-native";
import { color } from "./Color";

export function themeBased () {   
	let colorScheme = useColorScheme();
	return {
		PRIMARY_BACKGROUND_COLOR: colorScheme=='dark'?'#000':'#fff',
		PRIMARY_TEXT_COLOR: colorScheme=='dark'?color._e8e8e8:'#000',
		SECONDARY_TEXT_COLOR: '#333333',
		PRIMARY_BUTTON_COLOR: '#b9d6f3',
		SECONDARY_BUTTON_COLOR: '#a1c9f1',
		PRIMARY_ICON_COLOR: colorScheme=='dark'?'#fff':'#000',
		PRIMARY_HEADER_COLOR:colorScheme=='dark'?'#555':'#fff',
	}  
}  
