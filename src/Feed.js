import React , {useState,useEffect} from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>(
      setPosts(snapshot.docs.map(doc => doc.data())) 
      // give an array of all the posts inside the doc 
    ))
  }, []);
  
  return (
    <div className='feed'>
        {/* Header */}
        <div className='feed__header'>
        <h2 className=''>Home page</h2>
        </div>
        {/* Tweet */}
        <TweetBox/>

        <FlipMove>
        {
          posts.map((post) =>(
            <Post
            key={post.text}
            displayName= {post.displayName}
            userName= {post.userName}
            verified={post.verified}
            text = {post.text}
            avatar={post.avatar}
            image = {post.image}
            />
          )
        )}
        </FlipMove>
        </div>
  );
}

export default Feed;