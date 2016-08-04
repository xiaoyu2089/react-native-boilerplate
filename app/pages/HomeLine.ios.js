'use strict';

import React, {
	Component
} from 'react';
import {
	Image,
	TextInput,
	Text,
	View,
	StyleSheet,
	Dimensions
} from 'react-native';

import Line from '../components/charts/Line'

export default class HomeLine extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var windowsHeight = Dimensions.get('window').height;
		return (
			<View style={styles.containers}>		
			    <View style={[styles.bartChartView,{height:windowsHeight-150}]}>	
				    <Line/>
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	containers: {
		flex: 1
	},
	bartChartView: {
		flex: 1
	}
});