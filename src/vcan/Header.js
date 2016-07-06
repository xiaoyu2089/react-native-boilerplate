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

export default class Header extends Component {
	render() {
		return (
			<View style={styles.container}>
			   <View>
                    <Image source={require('../../images/jd/header/icon_qr.png')} style={styles.scanIcon}/>
               </View>
               <Text style={styles.titletxt}>永泰红磡</Text>
               <View style={styles.search}>
                    <Image source={require('../../images/jd/header/icon_search.png')} style={styles.scanIcons}/>
               </View>
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
		alignItems: 'center' // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
	},
	scanIcon: {
		marginLeft: 7,
		height: 26.7,
		width: 26.7,
		resizeMode: 'stretch'
	},
	titletxt: {
		left: 100,
		color: '#FFFFFF',
		fontSize: 18
	},
	search: {
		left: 200,
		justifyContent: 'center',
		alignItems: 'center'
	},
	scanIcons: {
		height: 26.7,
		width: 26.7,
		resizeMode: 'stretch'
	}
});