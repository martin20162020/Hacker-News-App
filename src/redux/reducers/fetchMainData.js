const fetchMainData = (state = {
    mainData: []
}, actions) => {
    if(actions.type === "FETCH_NEWS"){
        state = {...state, mainData:actions.payload}
    }
    return state
}
export default fetchMainData