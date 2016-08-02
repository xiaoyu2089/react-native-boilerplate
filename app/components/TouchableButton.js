'use strict';

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity,
	Platform
} from 'react-native';

export default class TouchableButton extends Component {
	render() {
		return (
			<TouchableOpacity underlayColor={this.props.underlayColor} activeOpacity={0.5} style={this.props.style} onPress={this.props.onPress}>
			   <Text style={{fontSize:18,color:'#fff',fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti '}}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}