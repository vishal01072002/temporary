import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner';

export const Blogs = () => {

  // consume
  const {posts,loading} = useContext(AppContext);
  //console.log(posts);

  return (
    <div>
      {
        loading ? 

        (<Spinner/>) :
        
        (
          posts.length === 0 ?
          (<div>
              <p>
                  no post found
              </p>
            </div>) :
            (posts.map ( (post) => (

              //<Card/>
              <div key={post.id}>
                <p className='title text-2xl'>{post.title}</p>
                <p>
                  By <span>{post.author}</span> on <span>{post.category}</span>
                </p>
                <p>Posted on {post.date}</p>
                <p>{post.content}</p>
                <div>
                  {posts.tags.map ( (tag,index) => {
                    return <span key={index}>{`#${tag}`}</span>
                  })}
                </div>
              </div>
            
            )))
        )
      }
    </div>
  )
}
