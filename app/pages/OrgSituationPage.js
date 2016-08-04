import React, {
	Component
} from 'react';
import {
	Image,
	TextInput,
	Text,
	View,
	StyleSheet,
	ScrollView,
	Platform,
} from 'react-native';

import ScrollableTabView, {
	ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import LoadingView from '../components/LoadingView';
import HomeRadar from './HomeRadar'

export default class OrgSituationPage extends Component {
	constructor(props) {
		super(props);
	}

	renderContent(type) {
		return (
			<HomeRadar/>
		);
	}

	render() {
		return (
			<ScrollableTabView style={styles.container} initialPage={0} 
			renderTabBar={()=><ScrollableTabBar/>} 
			tabBarUnderlineColor='#9E003F' tabBarBackgroundColor='#fcfcfc' tabBarActiveTextColor='#9E003F' 
			tabBarInactiveTextColor='#aaaaaa' tabBarTextStyle={{fontSize: 16,fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti '}}>   
				<View tabLabel="年预算－年投资测算" style={styles.tabView}>
					{
					    this.renderContent('f')
					}
				</View>	    
				<View tabLabel="月实际－月滚动预算" style={styles.tabView}>
					{
					    this.renderContent('s')
					}
				</View>
				<View tabLabel="预算－滚动预算" style={styles.tabView}>
					{
					    this.renderContent('t')
					}
				</View>	
			</ScrollableTabView>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
	tabView: {
		flex: 1,
		padding: 10,
	},
	no_data: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 100
	},
	listView: {
		backgroundColor: 'white'
	}
})