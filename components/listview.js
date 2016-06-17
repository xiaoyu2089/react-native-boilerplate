'use strict';

import React, {
	Component
}
from 'react';

import {
	StyleSheet,
	View,
	Text,
	ListView
}
from 'react-native';

var ds = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2,
		});

class listview extends Component {
	constructor() {
		super();
		this.state = {
			dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 4'])
		}
	}
	render() {
		return ( <ListView dataSource={this.state.dataSource} renderRow={(rowData)=><Text>{rowData}</Text>} /> );
	}
}

const styles = StyleSheet.create({

});


export
default listview;