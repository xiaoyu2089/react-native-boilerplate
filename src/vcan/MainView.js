'use strict';

import React, {
	Component
} from 'react';
import {
	Image,
	TextInput,
	Text,
	View,
	WebView,
	StyleSheet,
	Navigator
} from 'react-native';

import Header from './Header'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons'
import HomePage from './HomePage'
import MsgPage from './MsgPage'

export default class MainView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'home'
		}
	}

	createChildView(tag) {

		switch (tag) {
			case 'home':
				return (<HomePage/>);
				break;
			case 'message':
				return (<MsgPage/>);
				break;
			case 'application':
				return (<View><Text style={{fontSize:20}}>{tag}</Text></View>);
				break;
			case 'person':
				return (<View><Text style={{fontSize:20}}>{tag}</Text></View>);
				break;
		}
	}

	render() {
		return (
			<View style={{flex: 1}}>
			   <Header/>
			   <TabNavigator tabBarStyle={styles.tab}>
		            <TabNavigator.Item selected={this.state.selectedTab==='home'} 
		            renderIcon={()=>
		            	<View style={styles.tabIconView}>
		            	    <Icon name='md-home' color='white' size={30} style={styles.tabIcon}/>
                            <Text style={styles.tabIconTxtNor}>首页</Text>
		            	</View>
		            } 
		            renderSelectedIcon={()=>
		            	<View style={styles.tabIconView}>
		            	    <Icon name='md-home' color='red' size={30} style={styles.tabIcon}/>
                            <Text style={styles.tabIconTxtFocus}>首页</Text>
		            	</View>
		            } 
		            onPress={()=>this.setState({selectedTab:'home'})}>
		                {this.createChildView('home')}
					</TabNavigator.Item>
					<TabNavigator.Item selected={this.state.selectedTab==='message'} 
					renderIcon={()=>
						<View style={styles.tabIconView}>
		            	    <Icon name='ios-text-outline' color='white' size={30} style={styles.tabIcon}/>
                            <Text style={styles.tabIconTxtNor}>消息</Text>
		            	</View>
					} 
					renderSelectedIcon={()=>
						<View style={styles.tabIconView}>
		            	    <Icon name='ios-text-outline' color='red' size={30} style={styles.tabIcon}/>
                            <Text style={styles.tabIconTxtFocus}>消息</Text>
		            	</View>
					} 
					onPress={()=>this.setState({selectedTab:'message'})}>
		                 {this.createChildView('message')}
					</TabNavigator.Item>
					<TabNavigator.Item selected={this.state.selectedTab==='application'} 
					renderIcon={()=>
						<View style={styles.tabIconView}>
		            	    <Icon name='ios-apps-outline' color='white' size={30} style={styles.tabIcon}/>
                            <Text style={styles.tabIconTxtNor}>应用</Text>
		            	</View>
					} 
					renderSelectedIcon={()=>
						<View style={styles.tabIconView}>
		            	    <Icon name='ios-apps-outline' color='red' size={30} style={styles.tabIcon}/>
                            <Text style={styles.tabIconTxtFocus}>应用</Text>
		            	</View>
					} 
					onPress={()=>this.setState({selectedTab:'application'})}>
		                 {this.createChildView('application')}
					</TabNavigator.Item>
					<TabNavigator.Item selected={this.state.selectedTab==='person'} 
					renderIcon={()=>
						<View style={styles.tabIconView}>
		            	    <Icon name='md-person' color='white' size={30} style={styles.tabIcon}/>
                            <Text style={styles.tabIconTxtNor}>个人</Text>
		            	</View>
					} 
					renderSelectedIcon={()=>
						<View style={styles.tabIconView}>
		            	    <Icon name='md-person' color='red' size={30} style={styles.tabIcon}/>
                            <Text style={styles.tabIconTxtFocus}>个人</Text>
		            	</View>
					} 
					onPress={()=>this.setState({selectedTab:'person'})}>
		                 {this.createChildView('person')}
					</TabNavigator.Item>
			   </TabNavigator>
			</View>);
	}
}

var styles = StyleSheet.create({
	tab: {
		height: 50,
		backgroundColor: '#282828',
		justifyContent: 'center',
		alignItems: 'center'
	},
	tabIconView: {
		top: 5
	},
	tabIcon: {
		width: 30,
		height: 30
	},
	tabIconTxtNor: {
		color: 'white',
		fontSize: 12
	},
	tabIconTxtFocus: {
		color: 'red',
		fontSize: 12
	},
});