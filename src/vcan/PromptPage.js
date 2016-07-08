'use strict';

import React, {
	Component
} from 'react';
import {
	Image,
	TextInput,
	Text,
	View,
	ListView,
	StyleSheet,
	TouchableHighlight,
	Alert
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const prompts = [{
	type: "",
	"name": "入住申请-申请单已通过",
	"icon": "ios-clock-outline",
	"color": "red",
	"time": "2016-05-23"
}, {
	type: "",
	"name": "离院申请-申请单被驳回",
	"icon": "md-checkmark-circle-outline",
	"color": "gray",
	"time": "2016-05-23"
}, {
	type: "",
	"name": "支出申请-申请单已经终止",
	"icon": "md-checkmark-circle-outline",
	"color": "gray",
	"time": "2016-05-23"
}, {
	type: "",
	"name": "事件上报-护理经理已经处理",
	"icon": "md-checkmark-circle-outline",
	"color": "gray",
	"time": "2016-05-23"
}, , {
	type: "",
	"name": "培训管理-护理经理已经处理",
	"icon": "md-checkmark-circle-outline",
	"color": "gray",
	"time": "2016-05-23"
}, , {
	type: "",
	"name": "事件上报-运营总监已经处理",
	"icon": "md-checkmark-circle-outline",
	"color": "gray",
	"time": "2016-05-23"
}, ];

export default class PromptPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			loaded: false,
		};
		this.fetchData = this.fetchData.bind(this);
	}

	/* 组件加载完成后，使用componentDidMount方法发送请求，并且只发送一次。*/
	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(prompts),
			loaded: true,
		});
	}

	renderTypes(data) {
		return (
			<View style={styles.typeItem}>
				<View style={styles.iconView}>
					<Icon name={data.icon} color={data.color} size={30}  style={styles.icon}/>
				</View>
		        <Text style={[styles.title,{color:data.color}]}>{data.name}</Text>
		        <Text style={[styles.timeTxt,{color:data.color}]}>{data.time}</Text>
	        </View>
		);
	}

	back() {
		const {
			navigator
		} = this.props;
		if (navigator) {
			navigator.pop();
		}
	}

	render() {
		return (
			<View>
		        <View style={styles.topView}>
		            <View style={styles.backView}>
			            <TouchableHighlight onPress={()=>this.back()}>
			                <View>
			                    <Icon name='ios-arrow-back' color='white' size={30}  style={styles.topIcon}/>
			                </View>
			            </TouchableHighlight>
		            </View>
		            <View style={styles.topTitleView}>
		                <Text style={styles.topTitleTxt}>提示消息</Text>
		            </View>
				</View>
		       <ListView dataSource = {this.state.dataSource} renderRow = {this.renderTypes.bind(this)} style = {styles.listView}/>
		    </View>
		);
	}
}

var styles = StyleSheet.create({
	listView: {
		backgroundColor: '#F5FCFF',
	},
	topView: {
		flex: 1,
		flexDirection: 'row',
		height: 30,
		backgroundColor: '#9E003F',
		alignItems: 'center'
	},
	backView: {
		width: 50,
		height: 30,
	},
	topIcon: {
		marginLeft: 10,
	},
	topTitleView: {
		marginLeft: 80,
	},
	topTitleTxt: {
		color: '#F5FCFF',
		fontSize: 20,
	},
	typeItem: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#F5FCFF',
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		alignItems: 'center'
	},
	iconView: {
		marginTop: 10,
		marginLeft: 10,
	},
	icon: {
		width: 40,
		height: 40,
	},
	title: {
		marginTop: 5,
		marginLeft: 10,
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center',
	},
	timeTxt: {
		marginTop: 2,
		marginLeft: 20,
		fontSize: 16,
		textAlign: 'center',
	},
});