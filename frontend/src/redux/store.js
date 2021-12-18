import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { jobsReducer } from './reducers/jobsReducer';
import { loaderReducer } from './reducers/loaderReducer';
import { themeModeReducer } from './reducers/themeModeReducer';

const rootReducer = combineReducers({
    jobsReducer,
    loaderReducer,
    themeModeReducer
});

// Create Store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;