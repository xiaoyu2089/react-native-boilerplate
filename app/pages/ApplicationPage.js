import React, {
	Component
} from 'react';
import {
	Image,
	TextInput,
	Text,
	View,
	WebView,
	StyleSheet
} from 'react-native';

export default class ApplicationPage extends Component {
	render() {
		return (
			<View style = {styles.container}>
				<View style = {styles.cusView}>
				
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	cusView: {
		alignItems: 'center',
		justifyContent: 'center'
	},
});