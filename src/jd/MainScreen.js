'use strict';

import React, {
    Component
} from 'react';
import {
    Image,
    Text,
    View,
    StyleSheet,
    Navigator
} from 'react-native';

import Header from './Header'
/* npm i react-native-tab-navigator --save */
import TabNavigator from 'react-native-tab-navigator';
import HomePage from './HomePage';

const HOME = 'home';
const HOME_NORMAL = require('../../images/jd/tabs/home_normal.png');
const HOME_FOCUS = require('../../images/jd/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('../../images/jd/tabs/category_normal.png');
const CATEGORY_FOCUS = require('../../images/jd/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('../../images/jd/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('../../images/jd/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('../../images/jd/tabs/cart_normal.png');
const CART_FOCUS = require('../../images/jd/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('../../images/jd/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('../../images/jd/tabs/personal_focus.png');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: HOME
        }
    }

    renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item  
	            selected={this.state.selectedTab === tag}  
	            renderIcon={() => <Image style={styles.tabIcon} source={img}/>
        }
        renderSelectedIcon = {
            () => <Image style={styles.tabIcon} source={selectedImg}/>
        }
        onPress = {
            () => this.setState({
                selectedTab: tag
            })
        } > {
            childView
        } < /TabNavigator.Item>  
    );
}

_createChildView(tag) {
    return (
        <View><HomePage/><Text style={{fontSize:22}}>{tag}</Text></View>
    )
}

render() {
    return (
        <View style={{flex: 1}}>
                <Header />
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                {this.renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, this._createChildView(HOME))}  
			    {this.renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, this._createChildView(CATEGORY))}  
			    {this.renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, this._createChildView(FAXIAN))}  
			    {this.renderTabItem(CART_NORMAL, CART_FOCUS, CART, this._createChildView(CART))}  
			    {this.renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, this._createChildView(PERSONAL))}  
                </TabNavigator>
            </View >
    );
}
}

const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#333333',
        alignItems: 'center'
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 10
    }
});