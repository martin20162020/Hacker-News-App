import { SEARCH_NEWS, FETCH_NEWS, FETCH_POPULAR_NEWS  } from "../actions/types"

const initialState = {
    text:'',
    mainData: [],
}

const searchNews = (state = initialState, action) =>{
    switch(action.type){
        case SEARCH_NEWS:
            return {
                ...state,
                text: action.payload
            }
        case FETCH_NEWS:
            return {
                ...state,
                mainData: action.payload
            }
        case FETCH_POPULAR_NEWS:
            return{
                ...state,
                popularData: action.payload
            }
        default:
            return state
    }
}

export default searchNews