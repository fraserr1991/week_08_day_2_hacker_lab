import StoryItem from "./StoryItem"

const StoryList = ({storiesId, storyTitles, searchText}) => {

    const filteredItems = storyTitles.filter(item =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      
    return (
        <>
        <h1>Hacker news links</h1>

        {filteredItems.map(item => (
        <StoryItem key={item.id} item={item} storyTitle={item}/>
        ))}
        </>
    )
}

export default StoryList