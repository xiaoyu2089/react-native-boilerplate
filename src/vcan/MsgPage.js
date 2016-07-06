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
	StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

const types = [{
	"name": "待办事项",
	"icon": "ios-checkmark-circle-outline",
	"color": "red",
	"count": 2
}, {
	"name": "提示消息",
	"icon": "ios-volume-up-outline",
	"color": "blue",
	"count": 3
}];

export default class MsgPage extends Component {
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
			dataSource: this.state.dataSource.cloneWithRows(types),
			loaded: true,
		});
	}

	renderTypes(data) {
		return (
			<View style={styles.container}>
				<Icon name={data.icon} color={data.color} size={30}  style={styles.icon}/>
	             <Text style={styles.title}>{data.name}</Text>
	             <Text style={styles.title}>{data.count}</Text>
            </View>
		);
	}

	render() {
		return (<ListView dataSource = {this.state.dataSource} renderRow = {this.renderTypes} style = {styles.listView}/>);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		borderBottomWidth: 1,
		borderBottomColor: 'black'
	},
	title: {
		fontSize: 20,
		marginBottom: 8,
		textAlign: 'center',
	},
	icon: {
		left: 5,
		width: 40,
		height: 40,
	},
	listView: {
		backgroundColor: '#F5FCFF',
	},
});