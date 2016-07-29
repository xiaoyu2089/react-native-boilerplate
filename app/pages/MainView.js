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

import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../components/Header'
import HomeContainer from '../containers/HomeContainer'
import MsgPage from './MsgPage'
import PersonPage from './PersonPage'



const HOME = 'home';
const HOME_CH = '首页';
const MESSAGE = 'message';
const MESSAGE_CH = '消息';
const APPLICATION = 'application';
const APPLICATION_CH = '应用';
const PERSON = 'person';
const PERSON_CH = '个人';

export default class MainView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedTab: HOME,
			headerTag: HOME_CH,
		}
	}

	componentDidMount() {

	}

	createChildView(tag) {
		const {
			navigator
		} = this.props;
		switch (tag) {
			case 'home':
				return (<HomeContainer {...this.props}/>);
				break;
			case 'message':
				return (<MsgPage navigator={navigator}/>);
				break;
			case 'application':
				return (<View><Text style={{fontSize:20}}>{tag}</Text></View>);
				break;
			case 'person':
				return (<PersonPage navigator={navigator}/>);
				break;
			default:
				return (<View><Text style={{fontSize:20}}>{tag}</Text></View>);
				break;
		}
	}

	render() {
		return (
			<View style={{flex: 1}}>
			   <Header tag={this.state.headerTag}/>
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
		            onPress={()=>this.setState({selectedTab:'home',headerTag:HOME_CH})}>
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
					onPress={()=>this.setState({selectedTab:'message',headerTag:MESSAGE_CH})}>
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
					onPress={()=>this.setState({selectedTab:'application',headerTag:APPLICATION_CH})}>
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
					onPress={()=>this.setState({selectedTab:'person',headerTag:PERSON_CH})}>
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