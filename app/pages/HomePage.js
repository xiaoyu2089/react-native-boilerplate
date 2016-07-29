'use strict';

import React, {
	Component,
	PropTypes
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
	RefreshControl,
	InteractionManager,
	Platform
} from 'react-native';
import ScrollableTabView, {
	ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingView from '../components/LoadingView';
import {
	fetchSysOrgs
} from '../actions/read';
import {
	toastShort
} from '../utils/ToastUtil';
import Storage from '../utils/Storage';
import {
	CATEGORIES
} from '../constants/Alias';
import Global from '../utils/global'

import HomeFocusDataPageAndroid from './HomeFocusDataPage.android'
// import HomeFocusDataPageIOS from './HomeFocusDataPage.ios'

const propTypes = {
	dispatch: PropTypes.func.isRequired,
	read: PropTypes.object.isRequired
};

let canLoadMore;
let page = 1;
let loadMoreTime = 0;

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			cityIds: []
		};

		this.renderItem = this.renderItem.bind(this);
		canLoadMore = false;
	}

	componentWillMount() {
		const {
			dispatch
		} = this.props;

		InteractionManager.runAfterInteractions(() => {
			Storage.get('cityIds')
				.then((cityIds) => {
					if (!cityIds) {
						cityIds = Global.cityList;
					}
					cityIds.forEach((cityId) => {
						dispatch(fetchSysOrgs(false, true, cityId));
					});
					this.setState({
						cityIds: cityIds
					});
				});
		});
	}

	/*组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用*/
	componentWillReceiveProps(nextProps) {
		const {
			read
		} = this.props;
		if (read.isLoadMore && !nextProps.read.isLoadMore && !nextProps.read.isRefreshing) {
			if (nextProps.read.noMore) {
				toastShort('没有更多数据了');
			}
		}
	}

	renderContent(orgs, cityId) {
		var dataSource = this.state.dataSource.cloneWithRows(orgs === undefined ? [] : orgs);
		const {
			read
		} = this.props;
		if (read.loading) {
			return (<LoadingView isVisible={true} color='gray' size={Platform.OS==='ios'?'large':'Large'} text='加载中...'/>);
		} else {
			const isEmpty = read.sysOrgList[cityId] === undefined || read.sysOrgList[cityId].length === 0;
			if (isEmpty) {
				return (
					<ScrollView automaticallyAdjustContentInsets = {false} horizontal = {false} contentContainerStyle = {styles.no_data} style = {{flex: 1}}>
			        <View style={{ alignItems: 'center' }}>
			            <Text style={{ fontSize: 16 }}>
			              目前没有数据，请刷新重试……
			            </Text>
			        </View>
		        </ScrollView>
				);
			} else {
				return (
					<ListView dataSource={dataSource} renderRow={this.renderItem} style={styles.listView}/>
				);
			}
		}
	}

	renderItem(data) {
		var name = data.Name;
		return (
			<TouchableOpacity onPress={()=>this.orgDetail(name)}>
				<View style={styles.itemView}>
				    <Image source={require('../../images/vcan/user.jpg')} style={styles.orgImg}/>
				    <View style={styles.orgView}>
				       <Text>{data.Name}</Text>
				       <Text style={styles.orgTxt}>住户数：</Text>
				       <Text style={styles.orgTxt}>床位数：{data.BedCount}</Text>
				       <Text style={styles.orgTxt}>入住率：</Text>
				       <Text style={styles.orgTxt}>员工数：</Text>
				    </View>
				</View>
            </TouchableOpacity>
		);
	}

	orgDetail(name) {
		toastShort(name);
		const {
			navigator
		} = this.props;

		if (Platform.OS === 'ios') {
			// navigator.push({
			// 	component: HomeFocusDataPageIOS,
			// 	name: 'HomeFocusDataPageIOS',
			// 	passProps: {
			// 		orgName: name
			// 	}
			// });
		} else {
			navigator.push({
				component: HomeFocusDataPageAndroid,
				name: 'HomeFocusDataPageAndroid',
				params: {
					orgName: name
				}
			});
		}
	}

	render() {
		const {
			read,
			navigator
		} = this.props;
		return (
			<ScrollableTabView style={styles.container} initialPage={0} renderTabBar={()=><ScrollableTabBar/>} 
			tabBarUnderlineColor='#3e9ce9' tabBarBackgroundColor='#fcfcfc' tabBarActiveTextColor='#3e9ce9' 
			tabBarInactiveTextColor='#aaaaaa' tabBarTextStyle={{fontSize: 16}}>
			    {
		        	this.state.cityIds.map((cityId, i) => {
					    return(
					    	<View key={'tab-'+i} tabLabel={CATEGORIES[cityId]} style={styles.tabView}>
					    	    {
					    	    	this.renderContent(read.sysOrgList[cityId], cityId)
					            }
					        </View>
					    );
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
		backgroundColor: 'white'
	},
	itemView: {
		flex: 1,
		height: 100,
		backgroundColor: '#F5FCFF',
		borderBottomWidth: 0.5,
		borderBottomColor: 'gray',
		flexDirection: 'row',
		alignItems: 'center'
	},
	orgImg: {
		height: 80,
		width: 80,
		resizeMode: 'stretch'
	},
	orgView: {
		marginLeft: 10,
		flexDirection: 'column',
	},
	orgTxt: {
		marginLeft: 15,
		fontSize: 12
	},
});

HomePage.propTypes = propTypes;
export default HomePage;