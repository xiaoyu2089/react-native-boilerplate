'use strict';

import React, {
	Component
} from 'react';
import {
	Image,
	TextInput,
	Text,
	View,
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

		/*		User.find().then(resp => this.setState({
					userName: resp[0].Name
				}));*/
	}

	render() {
		return (
			<View style={styles.container}>
               <Text style={styles.titletxt}>永泰红磡</Text>
               <Text style={styles.tagTxt}>{this.props.tag}</Text>
               <Text style={styles.userTxt}>用户：{this.state.userName}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row', // 水平排布
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 0,
		height: 48,
		backgroundColor: '#9E003F',
		alignItems: 'center'
	},
	titletxt: {
		color: '#FFFFFF',

		fontFamily: 'STKaiti',
		fontSize: 16
	},
	tagTxt: {
		marginLeft: 80,
		color: '#FFFFFF',
		fontSize: 16
	},
	userTxt: {
		marginLeft: 80,
		color: '#FFFFFF',
		fontSize: 16
	},
});