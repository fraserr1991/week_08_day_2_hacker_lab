const StoryItem = ({storyTitle}) => {
    return (
        <li>
        <a href={storyTitle.url ? storyTitle.url : `https://news.ycombinator.com/item?id=${storyTitle.id}`}>{storyTitle.title}</a>
        </li>
    )
}

export default StoryItem