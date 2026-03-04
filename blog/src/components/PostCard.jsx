import Loader from './Loader'
import { Link } from 'react-router-dom'


const PostCard = ({fetcheddata,loading,error}) => {
  return (
    <>
    {!loading && fetcheddata.length === 0 && <p style={{marginTop:"100px"}}>No posts found..</p>}
    <div className="posts">
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {!loading && 
            fetcheddata.map((post)=>(
              <Link key={post.id} to={`/post/${post.id}`} className='linktag'>
                <div className='post'>
                    <h2 className='posttitle'>{post.title}</h2>
                    <p className='postbody'>{post.body}</p>
                </div>
              </Link>
            ))
        }
      </div>
    </>
  )
}

export default PostCard
