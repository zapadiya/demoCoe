import React, {Component} from 'react';
import {View, Platform, Image, TouchableHighlight, Text, Alert} from 'react-native';
import{Button} from 'react-native-elements';
import {connect} from "react-redux";
import {MainHeader} from "@Component";
import styles from "./HomeScreenStyle";
import * as resources from '../../Resources';
import { scrollInterpolator, animatedStyles } from '../../Utility/Utils';
import MapView, { AnimatedRegion, Animated, Marker, Polyline, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import  {request, check, PERMISSIONS, RESULTS, openSettings} from 'react-native-permissions';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocusOn: true,
            ready: true,
            region: null,
            isFocusOn: true,
            ready: true,
            filteredMarkers: [
            {
                latitude: 23.0225,
                longitude: 71.3424,
                latitudeDelta: 5.1,
                longitudeDelta: 5.1,
                title: "Marker 2",
                color: 'GREEN',
                comments: 'Just Imagine, you get a functionality to show random images in html page.'
            },
            {
                latitude: 24.0225,
                longitude: 74.5424,
                latitudeDelta: 5.1,
                longitudeDelta: 5.1,
                title: "Point A",
                color: 'BLUE',
                comments: 'Just Imagine, you get a functionality to show random images in html page.'
            },
            {
                latitude: 25.0225,
                longitude: 75.5424,
                latitudeDelta: 5.1,
                longitudeDelta: 5.1,
                color: 'BLUE',
                title: "Point B",
                comments: 'Just Imagine, you get a functionality to show random images in html page.',
            }],
            coordsArray: []
        };
        map = null;
    }

    async componentDidMount(){
        this.findCoordinates();
        this.unsubscribe = this.props.navigation.addListener('focus', () => {
            // Will be called twice when navigated from dashboard buttons            
            if(this.props.locationDetail != null && this.props.locationDetail != undefined){
                let filteredMarkers = this.state.filteredMarkers;
                filteredMarkers[2].latitude = parseFloat(this.props.locationDetail.latitude)
                filteredMarkers[2].longitude = parseFloat(this.props.locationDetail.longitude)
                this.setState({filteredMarkers: filteredMarkers}, ()=>{
                    this.setRegion()
                })
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    requestLocationPermission(){
        if(Platform.OS == 'android'){
            request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((permissionStatus) => {
                console.log(permissionStatus)
                if(permissionStatus == 'granted') {
                    this.findCoordinates();
                }else if(permissionStatus == 'blocked'){
                    this.gotoSettingAlert()
                }else{
                    this.requestLocationPermission();
                }
            })
        }
    }


    setRegion(region) {
        let allLatLongArr = [];
        for(let i = 0; i < this.state.filteredMarkers.length; i++){
            allLatLongArr.push({ latitude: this.state.filteredMarkers[i].latitude, longitude: this.state.filteredMarkers[i].longitude })
        }
        this.map.fitToCoordinates(allLatLongArr)
    }

    openSetting(){
        openSettings().catch(() => console.warn('cannot open settings'));
    }

    focustOnRegion() {
        if(this.state.isFocusOn){
            let region = this.state.filteredMarkers[2];
            setTimeout(() => this.map.animateToRegion(region), 1000);
        }else{
            this.setRegion();
        }
        this.setState({isFocusOn: !this.state.isFocusOn})
    }

    findCoordinates = () => {
		Geolocation.getCurrentPosition(
            //Will give you the current location
            (position) => {
                console.log("position", position)
                //getting the Longitude from the location json
                const region = {
                    latitude: Platform.OS?position.coords.latitude: parseFloat(position.coords.latitude),
                    longitude: Platform.OS?position.coords.longitude: parseFloat(position.coords.longitude),
                    latitudeDelta: 5.4,
                    longitudeDelta: 5.9,
                    title: "Marker 1",
                    color: 'ORANGE',
                    comments: 'Just Imagine, you get a functionality to show random images in html page.'
                };
                this.setRegion(region);
                if(this.state.filteredMarkers.length != 4 ){
                    let filteredMarkers = this.state.filteredMarkers;
                    filteredMarkers.push(region);
                    this.setState({filteredMarkers: filteredMarkers})
                }else{
                    let filteredMarkers = this.state.filteredMarkers;
                    filteredMarkers[3] = region;
                    this.setState({filteredMarkers: filteredMarkers})
                }
                this.setState({region: region})
            }, (error) => {
                console.log("Error====", error)
                if(error.PERMISSION_DENIED == 1){
                    this.requestLocationPermission();
                }else{
                    Alert.alert("", "Error in detect location");
                }
            }, { 
                enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 
            }
        );
    };

    gotoSettingAlert = () =>{
        Alert.alert( "Ask permission", "Your permission in never ask mode, Please go to setting and approve.",
            [
                {text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel"},
                { text: "OK", onPress: () => this.openSetting() }
            ],
            { cancelable: false }
        );
    }
    
    onMapReady = (e) => {
        if(!this.state.ready) {
            this.setState({ready: true});
        }
    };

    mapMarkers = () => {
        return this.state.filteredMarkers.map((report) => <Marker
                key={report.title}
                coordinate={{ latitude: report.latitude, longitude: report.longitude }}
                title={report.title}
                description={report.comments}
                >
                <Image
                    source={resources[report.color]}
                    //source={resources.BLUE}
                    style={{width: 26, height: 28}}
                    resizeMode="contain"
                />
        </Marker >)
    }

    

    render() {
        return (
            <View style={styles.container}>
                <MainHeader centerTitle={'Home Screen'} />
                <View>
                    <MapView zoomEnabled={true} onMapReady={this.onMapReady} containerStyle={{backgroundColor: 'white', borderColor: '#BC8B00'}}
                    ref={ map => { this.map = map }} style={styles.map} initialRegion={this.state.filteredMarkers[0]}>
                    {this.mapMarkers()}
                    {this.state.region != null &&
                        <Polyline coordinates={
                            [this.state.region, this.state.filteredMarkers[0]]
                        } strokeWidth={6} strokeColor="red"/>
                    }
                    </MapView>
                </View>
                <View style={styles.bottomButton}>
                    <Button	title={'Click me'} type={'solid'} onPress={() => this.props.navigation.navigate("AddLocation")} containerStyle={styles.buttonContainerStyle1} buttonStyle={styles.buttonStyle}/>
                    <Button	title={this.state.isFocusOn?'Focus Out':'Focus In'} type={'solid'}	onPress={() => {this.focustOnRegion()}} containerStyle={styles.buttonContainerStyle} buttonStyle={styles.buttonStyle}/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        locationDetail: state.user.locationDetail
    };
};

const mapActionCreators = {};

export default connect(mapStateToProps, mapActionCreators)(HomeScreen);
