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
	ScrollView
} from 'react-native';

import BackBar from '../components/BackBar'
import Bar from '../components/charts/Bar'
import Bubble from '../components/charts/Bubble'
import CandleStick from '../components/charts/CandleStick'
import Combined from '../components/charts/Combined'
import HorizontalBar from '../components/charts/HorizontalBar'
import Line from '../components/charts/Line'
import LiveUpdating from '../components/charts/LiveUpdating'
import Pie from '../components/charts/Pie'
import Radar from '../components/charts/Radar'
import Scatter from '../components/charts/Scatter'


import {
	BarChart
} from 'react-native-ios-charts';

export default class HomeFocusDataPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.containers}>
				<BackBar title={this.props.orgName} {...this.props}/>
				<ScrollView automaticallyAdjustContentInsets = {false} horizontal = {false} style={styles.containers}>
					<View style={styles.bartChartView}>
					    <Bar/>
					</View>
					<View style={styles.bartChartView}>
					    <Bubble/>
					</View>
					<View style={styles.bartChartView}>
					    <CandleStick/>
					</View>
					<View style={styles.bartChartView}>
					    <Combined/>
					</View>
					<View style={styles.bartChartView}>
					    <HorizontalBar/>
					</View>
					<View style={styles.bartChartView}>
					    <Line/>
					</View>
					<View style={styles.bartChartView}>
					    <LiveUpdating/>
					</View>
					<View style={styles.bartChartView}>
					    <Pie/>
					</View>
					<View style={styles.bartChartView}>
					    <Radar/>
					</View>
					<View style={styles.bartChartView}>
					    <Scatter/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	containers: {
		flex: 1
	},
	bartChartView: {
		flex: 1,
		height: 400,
	}
});