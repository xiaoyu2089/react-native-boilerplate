import React, {
	Component
} from 'react';
import {
	Dimensions,
	Image,
	View,
	StyleSheet,
	InteractionManager
} from 'react-native';

import Store from 'react-native-simple-store';
import Login from './Login';
import MainView from './MainView'
import Global from '../utils/global'

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;
const splashImg = require('../../images/vcan/logo.png');

export default class Splash extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {
			navigator
		} = this.props;
		this.timer = setTimeout(() => {
			Store.get('user').then(user => {
				if (user != null && user.Name != null && user.Name != "") {
					this.setState({
						loggedIn: true
					})
					Global.userName = 'admin';
					InteractionManager.runAfterInteractions(() => {
						navigator.resetTo({
							component: MainView,
							name: 'MainView'
						});
					});
				} else {
					InteractionManager.runAfterInteractions(() => {
						navigator.resetTo({
							component: Login,
							name: 'Login'
						});
					});
				}
			});

		}, 2000);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}

	render() {
		return (
			<View style={styles.box}>
			<Image style={styles.splashImg} source={splashImg}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	box: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	splashImg: {
		width: 200,
		height: 60,
		resizeMode: 'stretch'
	}
});