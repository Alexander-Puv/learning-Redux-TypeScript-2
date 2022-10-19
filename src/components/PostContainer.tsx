import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import { PostItem } from './PostItem'

export const PostContainer = () => {
    const [limit, setLimit] = useState(10)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllUsersQuery(limit, {
        pollingInterval: 100000
    })
    const [createPost, {}] = postAPI.useCreatePostMutation()

    useEffect(() => {
        /* setTimeout(() => {
            setLimit(5);
        }, 2000) */
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }
    
    return (
        <div>
            <div>
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error occured while loading posts</h1>}
                {posts && posts.map(post => 
                    <PostItem post={post} key={post.id} />
                )}
            </div>
        </div>
    )
}
