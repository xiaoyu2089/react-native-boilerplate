import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	PixelRatio,
	TouchableOpacity,
	Image,
	Platform
} from 'react-native';

/* 安装组件命令：npm install react-native-image-picker@latest --save*/
import ImagePicker from 'react-native-image-picker';

export default class ImagePickerCom extends Component {

	state = {
		avatarSource: require('../../images/photo/123214.jpg'),
		videoSource: require('../../images/photo/798464.jpg')
	};

	selectPhotoTapped() {
		const options = {
			title: 'Photo Picker',
			takePhotoButtonTitle: 'Take Photo...',
			chooseFromLibraryButtonTitle: 'Choose from Library...',
			quality: 0.5,
			maxWidth: 300,
			maxHeight: 300,
			allowsEditing: true,
			storageOptions: {
				skipBackup: true
			}
		};

		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled photo picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				var source;

				// You can display the image using either:
				source = {
					uri: 'data:image/jpeg;base64,' + response.data,
					isStatic: true
				};

				// Or:
				// if (Platform.OS === 'android') {
				//   source = {uri: response.uri, isStatic: true};
				// } else {
				//   source = {uri: response.uri.replace('file://', ''), isStatic: true};
				// }

				this.setState({
					avatarSource: source
				});
			}
		});
	}

	selectVideoTapped() {
		const options = {
			title: 'Video Picker',
			takePhotoButtonTitle: 'Take Video...',
			mediaType: 'video',
			videoQuality: 'medium'
		};

		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled video picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				this.setState({
					videoSource: response.uri
				});
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
		        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
		          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
		          { this.state.avatarSource === null ? <Text>Select a Photo11</Text> :
		            <Image style={styles.avatar} source={this.state.avatarSource} />
		          }
		          </View>
		        </TouchableOpacity>

		        <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
		          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
		            { this.state.videoSource === null ? <Text>Select a Video</Text> :
		            <Image style={styles.avatar} source={this.state.videoSource} />
		          }
		          </View>
		        </TouchableOpacity>
      </View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	avatarContainer: {
		borderColor: '#9B9B9B',
		borderWidth: 1 / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatar: {
		borderRadius: 75,
		width: 150,
		height: 150
	}
});