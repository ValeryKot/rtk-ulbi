import React from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'


const PostContainer2 = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(5)

  return (
    <div>
        {/* {isLoading && <h1>Loading ...</h1>}
        {error && <h1>Error!!!</h1>}
        <div className='post__list'>{posts && posts?.map(post => <PostItem key={post.id} post={post} remove={function (post: IPost): void {
          throw new Error('Function not implemented.')
        } } update={function (post: IPost): void {
          throw new Error('Function not implemented.')
        } }/>)}</div> */}
    </div>
  )
}

export default PostContainer2