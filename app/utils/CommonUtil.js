/*navigator返回上一页公共方法工具类*/
export function naviGoBack(navigator) {
	if (navigator && navigator.getCurrentRoutes().length > 1) {
		navigator.pop();
		return true;
	}
	return false;
}