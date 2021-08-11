import React, {useEffect} from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { fetchPopularData } from '../redux/actions/fetchPopularData'

const PopularNews = () => {
    const newsSelector = useSelector((state)=> state.PopularNews);
    const dispatch = useDispatch();
    const getPopularNews = () => dispatch(fetchPopularData())
    
    useEffect(()=>{
        getPopularNews()
    }, [])

    const popularSearchResults = newsSelector.popularData.map((article, index) =>(
        <a href={article.url}
            target="blank"
            rel="noopener noreferrer"
            key={index}
        >
        <div className="news" key={article + index}>
            <img src={article.urlToImage} alt=""/>
            <div className="titleAndParagraph" key={article.id}>
                <h2 className="title">{article.title}</h2>
                <p className="date">{article.publishedAt} <span></span>{article.author}</p>
                <br/>
                <p className="articleDescription">{article.description}</p> 
            </div>
        </div>
    </a>
    ))

    return (
        <div className="PopularNewsPage">
            <h2 className="PopularNewsTitle">Popular News</h2>
            {popularSearchResults}
        </div>
    )
}

export default PopularNews
