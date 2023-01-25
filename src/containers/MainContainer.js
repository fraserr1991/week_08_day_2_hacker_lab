import React, {useState, useEffect} from 'react'
import StoryList from '../components/StoryList'

const MainContainer = () => {
    const [storiesId, setStoriesId] = useState([])
    const [storyTitles, setStoryTitles] = useState([])
    const [searchText, setSearchText] = useState("")
    // const [limitedStories, setLimitedStories] = useState([])

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => data.slice(0,20))
            .then(data => fasdjk(data))
        
    }, [])

    const fasdjk = (ids) => {

    const storyPromises = ids.map(storyId => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(res => res.json())

    })

    Promise.all(storyPromises)
        .then(storyTitles => setStoryTitles(storyTitles))
    }

    console.log(storyTitles)

    // useEffect((stoiresId) => {
    //     fetch(`https://hacker-news.firebaseio.com/v0/item/${stoiresId}.json`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // })

    // setLimitedStories(stories.slice(0,19))

    return (
        <>
        <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}/>
       <StoryList storiesId={storiesId} storyTitles={storyTitles} searchText={searchText} />
       </>
    )
}

export default MainContainer