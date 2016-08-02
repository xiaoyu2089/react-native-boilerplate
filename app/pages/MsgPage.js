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
import TodoPage from './TodoPage';
import PromptPage from './PromptPage';

const types = [{
	type: "todo",
	"name": "待办事项",
	"icon": "md-checkmark-circle-outline",
	"color": "red",
	"count": 2
}, {
	type: "prompt",
	"name": "提示消息",
	"icon": "md-volume-up",
	"color": "#56ABE4",
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

	redirect(type) {
		const {
			navigator
		} = this.props;

		if (navigator) {
			if (type == "todo") {
				navigator.push({
					name: 'TodoPage',
					component: TodoPage,
				});
			} else if (type == "prompt") {
				navigator.push({
					name: 'PromptPage',
					component: PromptPage,
				});
			}
		}
	}

	renderTypes(data) {
		return (
			<TouchableHighlight onPress={()=>this.redirect(data.type)}>
		        <View style={styles.typeItem}>
				    <View style={styles.iconView}>
					    <Icon name={data.icon} color={data.color} size={30}  style={styles.icon}/>
					</View>
		            <Text style={styles.title}>{data.name}</Text>
		            <View style={styles.countView}>
		                <Text style={styles.countTxt}>{data.count}</Text>
		            </View>
	            </View>
            </TouchableHighlight>
		);
	}

	render() {
		return (<ListView dataSource = {this.state.dataSource} renderRow = {this.renderTypes.bind(this)} style = {styles.listView}/>);
	}
}

var styles = StyleSheet.create({
	listView: {
		backgroundColor: '#FCFCFC',
	},
	typeItem: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#FCFCFC',
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
	countView: {
		marginLeft: 150,
		backgroundColor: '#FF0000',
		width: 25,
		height: 25,
		borderRadius: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	countTxt: {
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
});