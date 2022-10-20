import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import { PostItem } from './PostItem'

export const PostContainer = () => {
    const [limit, setLimit] = useState(100)
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllUsersQuery(limit, {
        pollingInterval: 100000
    })
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()

    useEffect(() => {
        /* setTimeout(() => {
            setLimit(5);
        }, 2000) */
    }, [])

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as unknown as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }
    
    return (
        <div>
            <div>
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error occured while loading posts</h1>}
                {posts && posts.map(post => 
                    <PostItem post={post} remove={handleRemove} update={handleUpdate} key={post.id} />
                )}
            </div>
        </div>
    )
}
