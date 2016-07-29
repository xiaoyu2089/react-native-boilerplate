import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Navigator,
	StatusBar,
	BackAndroid,
	View
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
		/*if (route.name === 'Login') {
			BackAndroid.removeEventListener('hardwareBackPress', this.goBack);

			isRemoved = true;
		} else {
			if (isRemoved) {
				BackAndroid.addEventListener('hardwareBackPress', this.goBack);
			}
		}*/
		return (
			<Component navigator={navigator} route={route} />
		);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
		        <StatusBar
		          backgroundColor="#3e9ce9"
		          barStyle="default"
		        />
		        <Navigator
		          ref="navigator"
		          style={styles.navigator}
		          configureScene={this.configureScene}
		          renderScene={this.renderScene}
		          initialRoute={{
		            component: Splash,
		            name: 'Splash'
		          }}
		        />
            </View>
		);
	}
}

const styles = StyleSheet.create({
	navigator: {
		flex: 1
	}
});