import React from 'react'
import MainNews from './MainNews'
import PopularNews from './PopularNews'

const Home = () => {
    return (
        <div className="home">
            <MainNews className="MainNewsPage"/>
            <PopularNews className="PopularNewsPage"/>
        </div>
    )
}

export default Home
