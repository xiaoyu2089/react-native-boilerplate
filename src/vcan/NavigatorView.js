'use strict';

import React, {
	Component
} from 'react';
import {
	Navigator
} from 'react-native';

import MsgPage from './MsgPage'

export default class NavigatorView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			defaultName: this.props.defaultName
		}
	}

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