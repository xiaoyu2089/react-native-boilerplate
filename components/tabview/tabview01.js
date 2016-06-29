/*'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
	Image,
	StyleSheet,
	Text,
	View,
} = ReactNative;
var ScrollableTabView = require('react-native-scrollable-tab-view');


var tabview01 = React.createClass({
	render() {
		return (
			<ScrollableTabView>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
      </ScrollableTabView>
		);
	}
});



module.exports = tabview01;*/

import React from 'react';
import {
	Text,
} from 'react-native';

import ScrollableTabView, {
	DefaultTabBar
} from 'react-native-scrollable-tab-view';

export default React.createClass({
	render() {
		return <ScrollableTabView
      style={{marginTop: 20, }}
      renderTabBar={() => <DefaultTabBar />}
    >
      <Text tabLabel='CRM'>您有1个待审批的内容</Text>
      <Text tabLabel='HCS'>无待审批内容</Text>
      <Text tabLabel='MMS'>无待审批内容</Text>
    </ScrollableTabView>;
	},
});