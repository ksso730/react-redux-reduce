
import rootReducer from './reducers'
import {createLogger} from "redux-logger/src";
import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
// 미들웨어

// Logger 생성
const logger = createLogger();
// thunk 생성 (비동기 프로그램)
const initialState= {}
const middleware = [thunk, logger];

    const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)



