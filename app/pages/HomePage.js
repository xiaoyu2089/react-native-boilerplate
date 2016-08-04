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

import HomeFocusDataPage from './HomeFocusDataPage'

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
		var orgId = data.Id;
		var orgImgUrl = require('../../images/lezj.png');
		switch (orgId) {
			case 19:
				orgImgUrl = require('../../images/vcan/g9.jpg');
				break;
			case 24:
				orgImgUrl = require('../../images/vcan/g5g6.jpg');
				break;
			case 39:
				orgImgUrl = require('../../images/vcan/ac.jpg');
				break;
			case 40:
				orgImgUrl = require('../../images/vcan/jll.jpg');
				break;
			case 41:
				orgImgUrl = require('../../images/vcan/cll.jpg');
				break;
		}

		var occupancy = (Number(data.CusCount) / Number(data.BedCount) * 100).toFixed(2) + '%';

		if (data.CusCount == 0 || data.BedCount == 0) {
			occupancy = '0%';
		}

		return (
			<TouchableOpacity onPress={()=>this.orgDetail(name)}>
				<View style={styles.itemView}>
				    <Image source={orgImgUrl} style={styles.orgImg}/>
				    <View style={styles.orgView}>
				       <Text style={styles.orgNameTxt}>{data.Name}</Text>
				       <Text style={styles.orgTxt}>住户数：{data.CusCount}</Text>
				       <Text style={styles.orgTxt}>床位数：{data.BedCount}</Text>
				       <Text style={styles.orgTxt}>入住率：{occupancy}</Text>
				       <Text style={styles.orgTxt}>员工数：{data.UserCount}</Text>
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
			navigator.push({
				component: HomeFocusDataPage,
				name: 'HomeFocusDataPage',
				passProps: {
					orgName: name
				}
			});
		} else {
			navigator.push({
				component: HomeFocusDataPage,
				name: 'HomeFocusDataPage',
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
			<ScrollableTabView style={styles.container} initialPage={0} 
			renderTabBar={()=><ScrollableTabBar/>} 
			tabBarUnderlineColor='#9E003F' tabBarBackgroundColor='#fcfcfc' tabBarActiveTextColor='#9E003F' 
			tabBarInactiveTextColor='#aaaaaa' tabBarTextStyle={{fontSize: 16,fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti '}}>
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
		height: 150,
		backgroundColor: '#fcfcfc',
		borderBottomWidth: 0.5,
		borderBottomColor: 'gray',
		flexDirection: 'row',
		alignItems: 'center'
	},
	orgImg: {
		height: 130,
		width: 200,
		resizeMode: 'stretch'
	},
	orgView: {
		marginLeft: 30,
		marginTop: 20,
		height: 130,
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	orgNameTxt: {
		fontSize: 16,
		fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
	},
	orgTxt: {
		fontSize: 12,
		fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
	},
});

HomePage.propTypes = propTypes;
export default HomePage;