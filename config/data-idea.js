const DataIdea = (_data, key) => {
    const idea = {
        id: key,
        title: _data.title,
        content: _data.content,
        createdate: _data.createdate,
        category: _data.category,
        comments: _data.comments,
        displayName: _data.displayName
    }

    return idea; 
}

export default DataIdea;