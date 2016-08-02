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
	TouchableOpacity,
	InteractionManager,
	Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Store from 'react-native-simple-store';
import Login from './Login'
import TouchableButton from '../components/TouchableButton';

export default class Person extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: 'zxl'
		};
	}

	logout(e) {
		const {
			navigator
		} = this.props;

		Store.delete('user');
		InteractionManager.runAfterInteractions(() => {
			navigator.resetTo({
				component: Login,
				name: 'Login'
			});
		});
	}

	render() {
		return (
			<View style={styles.body}>
		        <View style={styles.userView}> 
		            <View style={styles.userImgView}> 
                        <Image source={require('../../images/vcan/user.jpg')} style={styles.userPhoto}/>
					</View>
					<View style={styles.userNameView}> 
                        <Text style={styles.userNameTxt}>{this.state.userName}</Text>
                        <Icon name='ios-arrow-forward' color='#C7C7C7' size={50}  style={styles.userNameIcon}/>
				    </View>
				</View>
				<View style={styles.logoutView}> 
				    <TouchableButton underlayColor='#4169e1' style={[styles.logoutButton,{width:100}]} onPress={e=>this.logout(e)} text='退出登录'>  
		            </TouchableButton> 
		        </View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	body: {
		flex: 1,
	},
	userView: {
		height: 120,
		borderBottomWidth: 0.5,
		borderBottomColor: 'gray',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	userImgView: {
		width: 100,
		height: 100,
		left: 10,
	},
	userPhoto: {
		width: 100,
		height: 100,
		borderRadius: Platform.OS === 'ios' ? 50 : 100,
		resizeMode: 'stretch'
	},
	userNameView: {
		width: 150,
		height: 50,
		alignItems: 'center',
		justifyContent: 'flex-end',
		flexDirection: 'row',
	},
	userNameTxt: {
		color: '#CC9FB2',
		fontSize: 24,
		marginRight: 25,
		fontFamily: Platform.OS === 'ios' ? 'Georgia-Bold' : 'STKaiti ',
	},
	userNameIcon: {
		width: 30,
		height: 50,
	},
	logoutView: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	logoutButton: {
		marginTop: 50,
		backgroundColor: '#9E003F',
		height: 45,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
});