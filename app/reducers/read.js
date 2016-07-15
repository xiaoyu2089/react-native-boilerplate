import * as types from '../constants/ActionTypes';

const initialState = {
	isRefreshing: false,
	loading: false,
	isLoadMore: false,
	noMore: false,
	sysOrgList: {}
};

export default function read(state = initialState, action) {
	switch (action.type) {
		case types.FETCH_SYSORG_LIST:
			return Object.assign({}, state, {
				isRefreshing: action.isRefreshing,
				loading: action.loading,
				isLoadMore: action.isLoadMore
			});
		case types.RECEIVE_SYSORG_LIST:
			return Object.assign({}, state, {
				isRefreshing: false,
				isLoadMore: false,
				noMore: action.sysOrgList.length === 0,
				sysOrgList: state.isLoadMore ? loadMore(state, action) : combine(state, action),
				loading: state.sysOrgList[action.cityId] === undefined
			});
		default:
			return state;
	}
}

function combine(state, action) {
	state.sysOrgList[action.cityId] = action.sysOrgList;
	return state.sysOrgList;
}

function loadMore(state, action) {
	state.sysOrgList[action.cityId] = state.sysOrgList[action.cityId].concat(action.sysOrgList);
	return state.sysOrgList;
}