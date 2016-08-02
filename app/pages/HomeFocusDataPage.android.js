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

export default class HomeFocusDataPageAndroid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.containers}>
				<BackBar title={this.props.orgName} {...this.props}/>
				<ScrollView automaticallyAdjustContentInsets = {false} horizontal = {false} style={styles.containers}>
					
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