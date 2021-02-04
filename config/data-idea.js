const DataIdea = (_data, key) => {
    const idea = {
        id: key,
        title: _data.title,
        content: _data.content,
        createdate: _data.dateFormatada,
        category: _data.category,
        comments: _data.comments
    }

    return idea; 
}

export default DataIdea;