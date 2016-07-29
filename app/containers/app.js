import React, {
	Component
} from 'react';
import {
	StyleSheet,
	StatusBar,
	Navigator,
	StatusBarIOS,
	NavigatorIOS,
	BackAndroid,
	View,
	Platform
} from 'react-native';

import Splash from '../pages/Splash';
import {
	naviGoBack
} from '../utils/CommonUtil';

let tempNavigator;
let isRemoved = false;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.renderScene = this.renderScene.bind(this);
		this.goBack = this.goBack.bind(this);
		/* 监听安卓手机的返回键*/
		BackAndroid.addEventListener('hardwareBackPress', this.goBack);
		this.creatNavigator = this.creatNavigator.bind(this);
	}

	goBack() {
		return naviGoBack(tempNavigator);
	}

	configureScene() {
		return Navigator.SceneConfigs.PushFromRight;
	}

	renderScene(route, navigator) {
		let Component = route.component;
		tempNavigator = navigator;
		if (route.name === 'WebViewPage') {
			BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
			isRemoved = true;
		} else {
			if (isRemoved) {
				BackAndroid.addEventListener('hardwareBackPress', this.goBack);
			}
		}
		return (
			<Component navigator={navigator} route={route} />
		);
	}

	//根据不同系统创建对应的navigator 
	creatNavigator() {
		if (Platform.OS === 'ios') {
			return (
				<View style={styles.containers}>	
				    <StatusBar hidden={true} backgroundColor="#3e9ce9" barStyle="default"/>		        
					<NavigatorIOS ref = "navigator" style = {styles.navigator} navigationBarHidden={true} initialRoute = {{component: Splash,title: 'Splash'}}/>
				</View>
			);
		} else {
			return (
				<View style={styles.containers}>
			        <StatusBar hidden={true} backgroundColor="#3e9ce9" barStyle="default"/>
					<Navigator ref = "navigator" style = {styles.navigator} configureScene = {this.configureScene} renderScene = {this.renderScene} initialRoute = {{component: Splash,name: 'Splash'}}/>
				</View>
			);
		}
	}

	render() {
		return (
			<View style={styles.containers}>
				{
					this.creatNavigator()
				}
            </View>
		);
	}
}

const styles = StyleSheet.create({
	containers: {
		flex: 1
	},
	navigator: {
		flex: 1
	}
});