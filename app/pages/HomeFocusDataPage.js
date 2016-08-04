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
	ScrollView,
	Platform,
} from 'react-native';

import BackBar from '../components/BackBar'
import TabNavigator from 'react-native-tab-navigator'
import OrgSituationPage from './OrgSituationPage'
import FocusDataPage from './FocusDataPage'

const ORGSITUATION = 'orgsituation';
const ORGSITUATION_CH = '机构概况';
const FOCUSDATA = 'focusdata';
const FOCUSDATA_CH = '重点数据';

export default class HomeFocusDataPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: ORGSITUATION,
			headerTag: ORGSITUATION_CH,
		}
	}

	createChildView(tag) {
		switch (tag) {
			case ORGSITUATION:
				return (<OrgSituationPage/>);
				break;
			case FOCUSDATA:
				return (<FocusDataPage/>);
				break;
			default:
				return (<View><Text style={{fontSize:20}}>{tag}</Text></View>);
				break;
		}
	}

	render() {
		return (
			<View style={styles.containers}>
			    <BackBar title={this.props.orgName} {...this.props}/>
			    <TabNavigator tabBarStyle={styles.tab}>
		            <TabNavigator.Item selected={this.state.selectedTab===ORGSITUATION} 
		            renderIcon={()=>
		            	<View style={styles.tabIconView}>
                            <Text style={styles.tabIconTxtNor}>{ORGSITUATION_CH}</Text>
		            	</View>
		            } 
		            renderSelectedIcon={()=>
		            	<View style={styles.tabIconView}>
                            <Text style={styles.tabIconTxtFocus}>{ORGSITUATION_CH}</Text>
		            	</View>
		            } 
		            onPress={()=>this.setState({selectedTab:ORGSITUATION,headerTag:ORGSITUATION_CH})}>
		                {this.createChildView(ORGSITUATION)}
					</TabNavigator.Item>
					<TabNavigator.Item selected={this.state.selectedTab===FOCUSDATA} 
					renderIcon={()=>
						<View style={styles.tabIconView}>
                            <Text style={styles.tabIconTxtNor}>{FOCUSDATA_CH}</Text>
		            	</View>
					} 
					renderSelectedIcon={()=>
						<View style={styles.tabIconView}>
                            <Text style={styles.tabIconTxtFocus}>{FOCUSDATA_CH}</Text>
		            	</View>
					} 
					onPress={()=>this.setState({selectedTab:FOCUSDATA,headerTag:FOCUSDATA_CH})}>
		                 {this.createChildView(FOCUSDATA)}
					</TabNavigator.Item>
			    </TabNavigator>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	containers: {
		flex: 1
	},
	tab: {
		height: 50,
		backgroundColor: '#dcdcdc',
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
		fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
		fontSize: 14
	},
	tabIconTxtFocus: {
		color: '#9E003F',
		fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
		fontSize: 14
	},
});