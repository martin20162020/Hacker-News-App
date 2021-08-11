import React, {useState, useEffect} from 'react';
import { fetchStories } from '../redux/actions/fetch_Search'
import { useSelector, useDispatch } from 'react-redux';


const Search = () => {

    const newsSelector = useSelector((state) => state.FetchStories);
    const [source, setSource] = useState("")
    const dispatch = useDispatch();
    const getTechNews = (source) => dispatch(fetchStories(source));

    useEffect(()=> {
        getTechNews()
    }, [])

    const onChange = (e) => setSource(e.target.value)

    const getNews = e =>{
        e.preventDefault()
        if (source === '' || 'nothing'){
            console.log(getTechNews(source))
        } else{
            getTechNews(source)
        }
    }
    const searchResults = newsSelector.mainData.map((article) =>(
        <a href={article.url}
            target="blank"
            rel="noopener noreferrer"
            key={article.source.name + article.url}
        >
        <div className="news">
            <img src={article.urlToImage} alt="" key={article.source.name}/>
            <div className="titleAndParagraph" key={article.id}>
                <h2 className="title">{article.title}</h2>
                <p className="date">{article.publishedAt} <span></span>{article.author}</p>
                <br/>
                <p className="articleDescription">{article.description}</p> 
            </div>
        </div>
    </a>
    ))
        return(
            <div className="SearchSection">
                <div>
                    <h2 className="contentHeading">Search for news articles here:</h2>
                    <form className="" onSubmit={getNews}>
                        <input
                            type="text"
                            className=""
                            placeholder="Search"
                            onChange={onChange}/>
                        <button className="search">Search</button>
                    </form>
                    <br/>
                    <h3>Results</h3>
                        <div className="newsContent">
                            {searchResults}
                        </div>
                    <div>

                    </div>
                </div>
            </div>
        )
    }


  
  export default Search