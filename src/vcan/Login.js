'use strict';

import React, {
	Component
} from 'react';
import {
	Image,
	TextInput,
	Text,
	View,
	WebView,
	StyleSheet,
	Dimensions,
	Alert
} from 'react-native';

import TouchableButton from './TouchableButton';
import MainView from './MainView';
import MainScreen from '../jd/MainScreen';

const windowsWidth = 0;

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "zxl",
			password: "1"
		};
	}

	/* render前执行 */
	componentWillMount() {

	}

	login(e) {
		const {
			navigator
		} = this.props;

		var username = this.state.username;
		var password = this.state.password;
		/*Alert.alert('登录信息', username + ":" + password)*/

		var longinUrl = 'http://ims.hongtai.org.cn/Io/LogIn?account=' + username + '&pwd=' + password;
		var url2 = 'http://10.10.10.69//Io/LogIn?account=' + username + '&pwd=' + password;

		fetch(longinUrl).then((response) => response.json())
			.then((responseData) => {
				if (responseData.code == 200) {
					Alert.alert('登录信息', responseData.msg);
					if (navigator) {
						navigator.push({
							name: 'MainView',
							component: MainView
						});
					}
				} else {
					Alert.alert('登录信息', responseData.msg);
				}
				/*responseData.map(function(data, index) {});*/
			}).done();

	}

	render() {
			windowsWidth = Dimensions.get('window').width;
			return (
					<View style={styles.box}>
		                <View style={styles.top}>
						< /View>
						<View style={styles.body}>
						   <TextInput style={styles.txtaccount} placeholder='输入帐户名' onChangeText={(text)=>this.setState({username:text})} value={this.state.username}></TextInput>
						   <TextInput password={true} style={styles.txtpwd}  placeholder='输入密码' onChangeText={(text)=>this.setState({password:text})} value={this.state.password}></TextInput>
			               <TouchableButton underlayColor='#4169e1' style={[styles.button,,{width:windowsWidth}]} onPress={e=>this.login(e)} text='登录'>  
		                   </TouchableButton> 
						</View>
						<Image source={require('../../images/vcan/logo.png')} style={styles.imglogo}/>
						<View style={[styles.bottom,{width:windowsWidth}]}>
						   <Text style={styles.bottom_text}>意见反馈：it_helpdesk@vcansenior.cn</Text>
						< /View>
			        </View>);
	}
}

const styles = StyleSheet.create({
	box: {
		flex: 1,
	},
	top: {
		height: 120,
		backgroundColor: '#9E003F',
		justifyContent: 'center',
		alignItems: 'center'  
    },
    imglogo:{
		position: 'absolute',
    	width:210,
    	height:40,
		top: 95,
    	left:80,
    	resizeMode: 'stretch'
    },
    body: { 
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center'  
    },
    txtaccount:{
    	 flex: 1,
    	 height:45,
    	 marginTop:  80,
		backgroundColor: 'transparent',
        fontSize: 14
    },
     txtpwd:{
    	 flex: 1,
    	 height:45,
    	 marginTop:  20,
        backgroundColor: 'transparent',
        fontSize: 14
    },
    button:{   
      marginTop:20,  
      backgroundColor:'#9E003F',    
      height:45,  
      borderRadius:5,  
      justifyContent: 'center',  
      alignItems: 'center',  
    },  
    bottom: { 
		height: 30,
		backgroundColor: '#5A5857',
		justifyContent: 'center',
		alignItems: 'center',
        position:'absolute',
        bottom:0,
    },
    bottom_text: { 
        fontSize:12,
        color:'white'
    },
});