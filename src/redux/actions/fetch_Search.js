import { SEARCH_NEWS } from "./types"

export const searchStories = text => dispatch =>{
    dispatch({
        type: SEARCH_NEWS,
        payload: text
    });
};

export function fetchStories(text){
    return function(dispatch){
        const api_key = process.env.REACT_APP_NEWS_API_KEY
        let url = `https://newsapi.org/v2/everything?q=${text}&apiKey=${api_key}`

        fetch(url).then(res =>{
            return res.json()
        }).then(res =>{
            dispatch({type:"FETCH_NEWS", payload: res.articles})
        })
        .catch(err =>{
            console.log(err)
        })
    }
}


