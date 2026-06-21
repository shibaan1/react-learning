// this is an example of variation 2 with ternary operator

import React, { useSate, useEffect, useLayoutEffect, useState } from 'react'

const DataFetcher = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })

    }, [])

    return (
        <div>
            {loading ? (
                <h1>loading...</h1>
            ) : (
                <ul>
                    {data.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))}

                </ul>
            )}
        </div>
    )
}

export default DataFetcher
