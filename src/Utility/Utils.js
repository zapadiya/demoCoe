import { Dimensions } from 'react-native';
export const DEVICEHEIGHT = Dimensions.get('window').height;
export const DEVICEWIDTH = Dimensions.get('window').width;



export const isObjectEmpty = (obj) => {    
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct. 
    if (Object.keys(obj).length  > 0)    return false;
    if (Object.keys(obj).length  === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}
