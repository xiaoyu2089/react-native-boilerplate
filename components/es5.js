'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Image,
  StyleSheet,
  Text,
  View,
} = ReactNative;


var Entity = React.createClass({
  render: function() {
    return (
      <Text style={{fontWeight: 'bold', color: '#527fe4'}}>
        abc
      </Text>
    );
  }
});



module.exports = Entity;