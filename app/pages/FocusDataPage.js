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
import HomeLine from './HomeLine'

export default class FocusDataPage extends Component {
	constructor(props) {
		super(props);
	}

	renderContent(type) {
		return (
			<HomeLine/>
		);
	}

	render() {
		return (
			<ScrollableTabView style={styles.container} initialPage={0} 
			renderTabBar={()=><ScrollableTabBar/>} 
			tabBarUnderlineColor='#9E003F' tabBarBackgroundColor='#fcfcfc' tabBarActiveTextColor='#9E003F' 
			tabBarInactiveTextColor='#aaaaaa' tabBarTextStyle={{fontSize: 16,fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti '}}>   
				<View tabLabel="员工流失率" style={styles.tabView}>
					{
					    this.renderContent('employeeslost')
					}
				</View>	    
				<View tabLabel="入住率" style={styles.tabView}>
					{
					    this.renderContent('occupancy')
					}
				</View>
				<View tabLabel="搬离居民数量" style={styles.tabView}>
					{
					    this.renderContent('leftcus')
					}
				</View>	
				<View tabLabel="事故次数" style={styles.tabView}>
					{
					    this.renderContent('accident')
					}
				</View>	
				<View tabLabel="质控检查结果" style={styles.tabView}>
					{
					    this.renderContent('quality')
					}
				</View>	
				<View tabLabel="运营成本" style={styles.tabView}>
					{
					    this.renderContent('costavg')
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