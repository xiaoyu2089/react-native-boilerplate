'use strict';

import React, {
	Component
} from 'react';
import {
	Image,
	TextInput,
	Text,
	View,
	Platform,
	StyleSheet
} from 'react-native';

import Store from 'react-native-simple-store';

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tag: this.props.tag,
			userName: ''
		}

		Store.get('user').then(user => this.setState({
			userName: user.Name
		}));
	}

	render() {
		return (
			<View style={styles.container}>
               <Text style={styles.tagTxt}>{this.props.tag}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 0,
		height: 48,
		backgroundColor: '#9E003F',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	titletxt: {
		color: '#FFFFFF',
		fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
		fontSize: 16
	},
	tagTxt: {
		color: '#FFFFFF',
		fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
		fontSize: 16
	},
	userTxt: {
		color: '#FFFFFF',
		fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
		fontSize: 16
	},
});