import StoryItem from "./StoryItem"

const StoryList = ({storiesId, storyTitles}) => {
    const storyItems = storyTitles.map((storyTitle, index) => {
        return <StoryItem key={index} storyTitle={storyTitle}/>
    })
    return (
        <>
        "test story list"
        {storyItems}
        </>
    )
}

export default StoryList