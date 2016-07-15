'use strict';

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
} from 'react-native';

export default class TouchableButton extends Component {
	render() {
		return (
			<TouchableHighlight underlayColor={this.props.underlayColor} activeOpacity={0.5} style={this.props.style} onPress={this.props.onPress}>
			   <Text style={{fontSize:16,color:'#fff'}}>{this.props.text}</Text>
			</TouchableHighlight>
		);
	}
}