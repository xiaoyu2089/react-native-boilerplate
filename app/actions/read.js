import * as types from '../constants/ActionTypes';
import {
	toastShort
} from '../utils/ToastUtil';
import {
	request
} from '../utils/RequestUtil';
import {
	DSS_SYSORG_LIST
} from '../constants/Urls';
import {
	CATEGORIES
} from '../constants/Alias';
import Global from '../utils/global'

export function fetchSysOrgs(isRefreshing, loading, cityId, isLoadMore, page = 1) {
	var cityName = CATEGORIES[cityId];

	return dispatch => {
		dispatch(fetchSysOrgList(isRefreshing, loading, isLoadMore));
		return request(`${DSS_SYSORG_LIST}?account=${Global.userName}&cityName=${cityName}`)
			.then((sysOrgList) => {
				dispatch(receiveSysOrgList(sysOrgList, cityId));
			})
			.catch(() => {
				dispatch(receiveSysOrgList([], cityId));
				toastShort('网络发生错误，请重试');
			});
	};
}

function fetchSysOrgList(isRefreshing, loading, isLoadMore = false) {
	return {
		type: types.FETCH_SYSORG_LIST,
		isRefreshing,
		loading,
		isLoadMore
	};
}

function receiveSysOrgList(sysOrgList, cityId) {
	return {
		type: types.RECEIVE_SYSORG_LIST,
		sysOrgList,
		cityId
	};
}