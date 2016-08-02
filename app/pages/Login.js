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
	InteractionManager,
	Platform,
	Alert
} from 'react-native';

/* npm install react-native-simple-store --save */
import Store from 'react-native-simple-store';
import TouchableButton from '../components/TouchableButton';
import MainView from './MainView'
import Global from '../utils/global'
import {
	toastShort
} from '../utils/ToastUtil';

var windowsWidth = 0;
var windowsHeight = 0;

export default class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			user: null,
			loggedIn: false,
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
		var longinUrl = 'http://ims.hongtai.org.cn/Io/LogIn?account=' + username + '&pwd=' + password;

		fetch(longinUrl).then((response) => response.json())
			.then((responseData) => {
				if (responseData.code == 200) {
					/*Alert.alert('登录信息', responseData.msg);*/
					toastShort(responseData.msg);

					/* 本地保存用户登录信息 */
					Store.save('user', {
						Account: responseData.user.Account,
						Name: responseData.user.Name,
						OrgName: responseData.user.MemberSysOrgName
					});

					Global.userName = responseData.user.Account;
					if (responseData.user.Account == 'zxl') {
						Global.userName = 'admin'
					}

					/* 跳转到主页面 */
					/*if (navigator) {
						navigator.push({
							name: 'MainView',
							component: MainView,
							params: {
								navigator: navigator
							}
						});
					}*/
					/*为了是页面跳转画面不卡*/
					InteractionManager.runAfterInteractions(() => {
						navigator.resetTo({
							component: MainView,
							name: 'MainView'
						});
					});
				} else {
					/*Alert.alert('登录信息', responseData.msg);*/
					toastShort(responseData.msg);
				}
			}).done();

	}

	render() {
			windowsWidth = Dimensions.get('window').width;
			windowsHeight = Dimensions.get('window').height;
			return (
					<View style={styles.box}>
		                <View style={styles.top}>
						< /View>
						<View style={styles.body}>
						    <Image source={require('../../images/loginbak.jpg')} style={[styles.imgloginbak,{width:windowsWidth},{height:windowsHeight-150}]}/>
						    <View style={[styles.txtBorder,{marginTop:75}]}>
						        <TextInput style={[styles.txtaccount,{width:windowsWidth-5}]} placeholder='输入帐户' onChangeText={(text)=>this.setState({username:text})} value={this.state.username}></TextInput>
						    </View>
						    <View style={[styles.txtBorder]}>
						        <TextInput password={true} style={[styles.txtpwd,{width:windowsWidth-5}]}  placeholder='输入密码' onChangeText={(text)=>this.setState({password:text})} value={this.state.password}></TextInput>
			                </View>
			                <TouchableButton underlayColor='#4169e1' style={[styles.button,{width:windowsWidth}]} onPress={e=>this.login(e)} text='登       录'>  
		                    </TouchableButton> 
						</View>
						<Image source={require('../../images/logo.png')} style={styles.imglogo}/>
						<View style={[styles.bottom,{width:windowsWidth}]}>
						    <Text style={styles.bottom_text}>意见反馈：it_helpdesk@vcansenior.cn</Text>
						< /View>
			        </View>
			);
	 }
}   

const styles = StyleSheet.create({
	box: {
		flex: 1,
		backgroundColor:'#FFFFFF'	
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
    	height:90,
		top: 65,
    	left:80,
    	resizeMode: 'stretch'
    },
    body: { 
		backgroundColor: '#FFFFFF',
		justifyContent: 'center',
		alignItems: 'center',
    },
    imgloginbak:{
    	position: 'absolute',
    	resizeMode: 'stretch',
    },
    txtBorder: {
         height: 50,
         flex: 1,
         borderBottomWidth: 1,
         borderBottomColor: '#9E003F',
         flexDirection: 'row'
     },
     txtName: {
         height: 20,
         width: 40,
         marginLeft: 20,
         fontSize: 15,
         marginTop: 15,
         color: '#9E003F',
         marginRight: 10,
     },
    txtaccount:{
    	height:50,
    	width:250,
    	backgroundColor:'transparent',
    	fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
        fontSize: 14
    },
     txtpwd:{
    	height:50,
    	width:250,
    	backgroundColor:'transparent',
    	fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
        fontSize: 14
    },
    button:{   
	  marginTop: 30,
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