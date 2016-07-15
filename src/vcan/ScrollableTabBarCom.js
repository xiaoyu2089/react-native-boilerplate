import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ScrollView
} from 'react-native';

const tabIcons = [];

export default class ScrollableTabBarCom extends Component {

	propTypes: {
		goToPage: React.PropTypes.func,
		activeTab: React.PropTypes.number,
		tabs: React.PropTypes.array,
	}

	componentDidMount() {
		this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
	}

	setAnimationValue({
		value,
	}) {
		tabIcons.forEach((icon, i) => {
			const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
			icon.setNativeProps({
				style: {
					color: this.iconColor(progress),
				},
			});
		});
	}

	iconColor(progress) {
		const red = 59 + (204 - 59) * progress;
		const green = 89 + (204 - 89) * progress;
		const blue = 152 + (204 - 152) * progress;
		return `rgb(${red}, ${green}, ${blue})`;
	}

	render() {
		return <View style={[styles.tabs, this.props.style]}>
			<ScrollView horizontal={true} >
		        <View style={styles.scrollView}>
			      {this.props.tabs.map((tab, i) => {
			        return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
			          <Text>{tab}</Text>
			        </TouchableOpacity>;
			      })}
 < /View >
            < /ScrollView>
        </View>
	}
}

const styles = StyleSheet.create({
	tabs: {
		height: 30,
		flexDirection: 'row',
		borderWidth: 1,
		borderTopWidth: 0,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderBottomColor: '#F2F2F2',
	},
	scrollView: {
		flex:1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	tab: {
		width: 40,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 10,
	},
});