/*
  icon的使用说明：
  1. npm install react-native-vector-icons --save
  2. npm install rnpm -g
  3. rnpm link
  4. android/app/build.gradle
  dependencies {
    compile project(':react-native-vector-icons')
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"  // From node_modules
  }
  5.将node_modules/react-native-vector-icons/Fonts 下的文件拷贝至android/app/src/main/assets/fonts
*/

import React, {
  Component
} from 'react';
import {
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


class icon1 extends Component {
  render() {
    return (
      <View >
         <Icon name='md-wine' color='black' size={100}/>
      </View>
    );
  }
}

//export t1;

export default icon1;