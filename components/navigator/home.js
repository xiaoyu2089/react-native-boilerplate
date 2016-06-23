'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
	Image,
	StyleSheet,
	Text,
	View,
	Navigator
} = ReactNative;


var welcome = React.createClass({
	onPressFeed() {
		this.props.navigator.push({
			name: 'page1'
		})
	},
	render: function() {
		return (
			<View>
      			<Text style={{fontWeight: 'bold', color: '#527fe4'}} onPress={this.onPressFeed}>
        			abc
      			</Text>
      		</View>
		);
	}
});

var page1 = React.createClass({
	goBack() {
		this.props.navigator.push({
			name: 'welcome'
		})
	},
	render: function() {
		return (
			<Text onPress={this.goBack}>this is page 1</Text>
		);
	}
});

var regNavigator = React.createClass({
	configureScene(route) {
		return Navigator.SceneConfigs.FloatFromRight;
	},

	renderScene(router, navigator) {
		var Component = router.component;
		this._navigator = navigator;
		switch (router.name) {
			case "welcome":
				Component = welcome;
				break;
			case "page1":
				Component = page1;
				break;
			default: //default view
				Component = DefaultView;
		}

		return <Component navigator={navigator} />
	},
	render() {
		return (
			<Navigator 
				initialRoute={{name: 'welcome'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
		);
	}
});



module.exports = regNavigator;