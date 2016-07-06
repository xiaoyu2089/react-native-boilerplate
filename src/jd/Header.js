'use strict';

import React,{Component} from 'react';
import {Image,TextInput,Text,View,StyleSheet} from 'react-native';

export default class Header extends Component{
	render(){
		return(
			<View style={styles.container}>
			   <View>
                    <Image source={require('../../images/jd/header/icon_qr.png')} style={styles.scanIcon}/>
                    <Text style={styles.scanIconText}>扫啊扫</Text>
               </View>
                <View style={styles.searchBox}>
                    <Image source={require('../../images/jd/header/icon_search.png')} style={styles.searchIcon}/>
                    <TextInput
                        keyboardType='web-search'
                        placeholder='搜索京东商品/店铺'
                        style={styles.inputText}/>
                    <Image source={require('../../images/jd/header/icon_voice.png')} style={styles.voiceIcon}/>
                </View>
               <View>
                    <Image source={require('../../images/jd/header/icon_search.png')} style={styles.scanIcons}/>
                    <Text style={styles.scanIconText}>消息</Text>
               </View>
			</View>
			);
	}
}

const styles = StyleSheet.create({  
      container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop:  0,
        height: 48,   
        backgroundColor: '#d74047',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    logo: {
        height: 24,
        width: 64,
        resizeMode: 'stretch'  // 设置拉伸模式
    },
    searchBox: {
        height: 30,
        flexDirection: 'row',
        flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
        borderRadius: 5,  // 设置圆角边
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12
    },
    scanIcon: {
    	 marginLeft:7,
        height: 21.7,
        width: 21.7,
        resizeMode: 'stretch'
    },
    scanIconText: {
       flex: 1,
       color:'white',
       textAlign:'center',
        fontSize: 12
    },
     scanIcons: {
        height: 21.7,
        width: 21.7,
        resizeMode: 'stretch'
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch'
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14
    }
});