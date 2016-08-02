'use strict';

import React, {
	Component
} from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

export default class BackBar extends Component {
	constructor(props) {
		super(props);
	}

	goBack(e) {
		const {
			navigator
		} = this.props;

		navigator.pop();
	}

	render() {
		return (
			<View style={styles.containers}>
		            <View style={styles.backView}>
			            <TouchableOpacity onPress={(e)=>this.goBack(e)}>
			                <View>
			                    <Icon name='ios-arrow-back' color='white' size={35}  style={styles.backIcon}/>
			                </View>
			            </TouchableOpacity>
		            </View>
		            <View style={styles.backTitleView}>
		                <Text style={styles.backTitleTxt}>{this.props.title}</Text>
		            </View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	containers: {
		flexDirection: 'row',
		height: 48,
		backgroundColor: '#9E003F',
		alignItems: 'center'
	},
	backView: {
		width: 50,
		height: 48,
	},
	backIcon: {
		marginLeft: 10,
		top: 8
	},
	backTitleView: {
		marginLeft: 80,
	},
	backTitleTxt: {
		color: '#F5FCFF',
		fontSize: 20,
	}
});