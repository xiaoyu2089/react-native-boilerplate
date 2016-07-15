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
	TouchableOpacity,
	ListView,
	RefreshControl
} from 'react-native';

import ScrollableTabView, {
	ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabBarCom from './ScrollableTabBarCom'
import HomeListView from './HomeListView'
import Global from './global'

export default class HomePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			citys: [{
				"City": "全国",
				"SysOrgs": [],
			}]
		}
		Global.userName = "admin";
		this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		var cityName = '全国';
		var url = 'http://10.10.10.69/Io/GetMapIndexData?account=' + Global.userName + '&cityName=' + cityName;
		fetch(url).then((response) => response.json())
			.then((responseData) => {
				var citys = [{
					"City": "全国",
					"SysOrgs": []
				}];
				var orgs = [];
				responseData.map((list, i) => {
					citys.push(list);
					list.SysOrgs.map((org, i) => {
						orgs.push(org);
					});
				});

				citys[0].SysOrgs = orgs;
				this.setState({
					citys: citys
				})

			}).done();
	}

	render() {
		return (
			<ScrollableTabView style={styles.container} initialPage={0} renderTabBar={()=><ScrollableTabBar/>}>
		        {
		        	this.state.citys.map((city, i) => {
					    return <View key={'tab-'+i} tabLabel={city.City} style={styles.tabView}>
					        <HomeListView cityName={city.City}  />
					    </View>
				    })
			    }
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
		backgroundColor: 'red'
	},
});