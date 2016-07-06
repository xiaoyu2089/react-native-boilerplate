'use strict';

import React,{Component} from 'react';
import {Image,Text,View,StyleSheet,Navigator} from 'react-native';
/* npm i -d react-native-viewpager --save  */
import ViewPager from 'react-native-viewpager';

const imgs = [  
    require('../../images/jd/banner/1.jpg'),  
    require('../../images/jd/banner/2.jpg'),  
    require('../../images/jd/banner/3.jpg'),  
    require('../../images/jd/banner/4.jpg')  
];  

export default class MainScreen extends Component {
	constructor(props) {  
	    super(props);  
	    // 用于构建DataSource对象  
	    var dataSource = new ViewPager.DataSource({  
	        pageHasChanged: (p1, p2) => p1 !== p2,  
	    });  
	    // 实际的DataSources存放在state中  
	    this.state = {  
	        dataSource: dataSource.cloneWithPages(imgs)  
	    }  
    }  

    renderPage(data, pageID) {  
	    return (  
	        <Image  
	            source={data}  
	            style={styles.page}/>  
	    );  
    }  

	render(){
		return(
			<ViewPager style={{height:130}} dataSource={this.state.dataSource} renderPage={this.renderPage} isLoop={true} autoPlay={true}/>  
			);
	}
}

const styles = StyleSheet.create({  
    page: {  
        flex: 1,  
        height: 130,  
        resizeMode: 'stretch'  
    }  
});  