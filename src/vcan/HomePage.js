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

export default class HomePage extends Component {
	render() {
		return (
			<View style={styles.box}>
			    <Image source={require('../../images/vcan/logo.png')} style={styles.img}/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	box: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		height: 60,
		width: 250,
		resizeMode: 'stretch'
	}
});