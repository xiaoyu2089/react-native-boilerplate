'use strict';

import React, {
	Component
} from 'react';
import {
	Image,
	TextInput,
	Text,
	View,
	WebView,
	StyleSheet,
	Navigator
} from 'react-native';

import Login from './Login';

export default class HomeView extends Component {
	render() {
		var defaultName = 'Login';
		var defaultComponent = Login;

		return ( < Navigator initialRoute = {
				{
					name: defaultName,
					component: defaultComponent
				}
			}
			configureScene = {
				(route) => {
					return Navigator.SceneConfigs.FadeAndroid;
				}
			}
			renderScene = {
				(route, navigator) => {
					let Component = route.component;
					if (route.component) {
						return <Component  navigator={navigator} />
					}
				}
			}
			/>
		);
	}
}