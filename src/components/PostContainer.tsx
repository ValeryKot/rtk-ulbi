import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'


const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)

  return (
    <div>
        {isLoading && <h1>Loading ...</h1>}
        {error && <h1>Error!!!</h1>}
        <div className='post__list'>{posts && posts?.map(post => <PostItem key={post.id} post={post}/>)}</div>
    </div>
  )
}

export default PostContainer