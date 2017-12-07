import { Tool, merged } from '../Tool';
import * as actionConstant from '../constants/actionConstant';

export function setRegistStateFn(registState) {
    return {
        type: actionConstant.SET_REGIST_STATE,
        registState :registState
    }
}

export function setUserInfoFn(userInfo) {
    return {
        type: actionConstant.SET_USERINFO,
        userInfo :userInfo
    }
}

export const setRegistState = (registState) => {
    return dispatch => {
        dispatch(setRegistStateFn(registState))
    }
}

export const setUserInfo = (userInfo) => {
    return dispatch => {
        dispatch(setUserInfoFn(userInfo))
    }
}

