import { combineReducers } from 'redux';
import fetchMainData from './fetchMainData';
import fetchPopularData from './fetchPopularData';
import searchReducer from './searchReducer';

export default combineReducers({
    FetchStories: searchReducer,
    MainNews: fetchMainData,
    PopularNews: fetchPopularData
})