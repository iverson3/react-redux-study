/**
 * Created by stefan.wang on 8/22/2016.
 */

export function setName(name) {
    return {
        type: 'SET_NAME',
        name: name
    };
}

export function addItem(item) {
    return {
        type: 'ADD_ITEM',
        item: item
    };
}

export function asyncAction_1(message) {
    return function (dispatch) {
        setTimeout(function () {
            console.log(new Date(), 'Dispatch action now');

            // 发出一个action (异步action)
            dispatch({
                type: 'ASYNC_ACTION',
                message
            });
        }, 3000);
    }
}