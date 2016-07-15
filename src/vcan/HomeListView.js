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

import Global from './global'

export default class HomeListView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			loaded: false,
		}
		Global.userName = "admin";
		this.fetchData = this.fetchData.bind(this);
	}

	componentWillMount() {
		this.fetchData();

	}

	fetchData() {
		var url = 'http://10.10.10.69/Io/GetMapIndexData?account=' + Global.userName + '&cityName=' + this.props.cityName;
		fetch(url).then((response) => response.json())
			.then((responseData) => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData)
				})
				this.setState({
					loaded: true
				})
			}).done();
	}

	renderItem(data) {
		return (
			<TouchableOpacity>
		        <View style={styles.itemView}>
		          <Text>{data.City}</Text>
		        </View>
            </TouchableOpacity>
		);
	}

	render() {
		if (this.state.loaded) {
			if (this.state.dataSource._cachedRowCount < 1) {
				return (
					<ScrollView contentContainerStyle = {styles.no_data} style = {{flex: 1}}>
					<View style={{alignItems:'center'}}>
						<Text style={{ fontSize: 16 }}>目前没有数据，请刷新重试</Text>
	                </View>
                </ScrollView>
				);
			} else {
				return (
					<ListView dataSource={this.state.dataSource} renderRow = {this.renderItem.bind(this)} style={styles.listView}/>
				);
			}
		} else {
			return (
				<View>
<Text>加载中........</Text>
				</View>
			);
		}
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
		flex: 1
	},
	itemView: {
		flex: 1,
		height: 40,
		flexDirection: 'row',
		backgroundColor: '#F5FCFF',
		borderBottomWidth: 0.5,
		borderBottomColor: 'gray',
		alignItems: 'center'
	},
});