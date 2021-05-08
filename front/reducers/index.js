import {HYDRATE} from "next-redux-wrapper";

import {combineReducers} from "redux";
import user from './user';
import post from './post';

//리듀서는 함수
// 이전상태, 액션을 이용해서 다음 스테이트를 만드는 함수
const rootReducer = combineReducers({
    index: (state={}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return {...state, ...action.payload};
            default:
                return state;

        }
    },
    user,
    post
});
export default rootReducer;
