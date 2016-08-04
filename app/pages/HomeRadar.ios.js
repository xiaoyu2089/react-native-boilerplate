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

import Radar from '../components/charts/Radar'

export default class HomeRadar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var windowsHeight = Dimensions.get('window').height;
		return (
			<View style={styles.containers}>		
			    <View style={[styles.bartChartView,{height:windowsHeight-150}]}>	
				    <Radar/>
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