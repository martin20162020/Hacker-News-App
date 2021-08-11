import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchMainData} from '../redux/actions/fetchMainData';

const MainNews = () => {
    const newsSelector = useSelector((state) => state.MainNews)
    const dispatch = useDispatch();
    const getMainNews = () => dispatch(fetchMainData())

    useEffect(()=>{
        getMainNews()
    }, [])

    const searchResults = newsSelector.mainData.map((article, index) =>(
        <a href={article.url}
            target="blank"
            rel="noopener noreferrer"
            key={index}
        >
        <div className="news" key={article.source.name + index}>
            <img src={article.urlToImage} alt=""/>
            <div className="titleAndParagraph">
                <h2 className="title">{article.title}</h2>
                <p className="date">{article.publishedAt} <span></span>{article.author}</p>
                <br/>
                <p className="articleDescription">{article.description}</p> 
            </div>
        </div>
    </a>
    ))

    return (
        <div className="mainNews">
            <h1 className="mainNewsFeed">Main News Feed</h1>
            {searchResults}
        </div>
    )
}

export default MainNews
