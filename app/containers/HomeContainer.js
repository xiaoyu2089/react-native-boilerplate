import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';

import HomePage from '../pages/HomePage';
import Storage from '../utils/Storage';
import LoadingView from '../components/LoadingView';
import {
	DSS_PROVINCE_LIST
} from '../constants/Urls';
import {
	CATEGORIES
} from '../constants/Alias';
import Global from '../utils/global'

class HomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false
		}
	}

	componentWillMount() {
		var url = DSS_PROVINCE_LIST + '?account=' + Global.userName;
		fetch(url).then((response) => response.json())
			.then((responseData) => {
				var cityIds = [];
				Global.cityList = [];
				responseData.map((city) => {
					for (var i = 0; i <= 3; i++) {
						if (CATEGORIES[i] == city.City) {
							cityIds.push(i);
							Global.cityList.push(i);
						}
					}
				});

				Storage.save('cityIds', cityIds);
				this.setState({
					loading: true
				});
			}).done();
	}

	render() {
		if (this.state.loading) {
			return (
				<HomePage {...this.props} />
			);
		} else {
			return (
				<LoadingView isVisible={true} color='gray' size='large' text='加载中...'/>
			);
		}
	}

}

function mapStateToProps(state) {
	const {
		read
	} = state;
	return {
		read
	};
}

export default connect(mapStateToProps)(HomeContainer);