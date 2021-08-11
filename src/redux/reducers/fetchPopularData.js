const fetchPopularData = (state ={
    popularData: []
}, actions) =>{
    if(actions.type === "FETCH_POPULAR_NEWS"){
        state = {...state, popularData:actions.payload}
    }
    return state
}
export default fetchPopularData