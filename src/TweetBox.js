import React , {useState} from 'react';
import "./TweetBox.css";
import {Avatar , Button} from "@material-ui/core";
// Avatar -> circled image
import db from './firebase';

function TweetBox() {
  const [tweetMessage,setTweetMessage] = useState("");
  const [tweetImage,setTweetImage] = useState("");

  const sendTweet = e =>{
    e.preventDefault();
    db.collection('posts').add({
      displayName:'John Doe',
      userName:'@johndoe',
      verified:true,
      text:tweetMessage,
      avatar:'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png',
      image:tweetImage,
    });
    setTweetMessage("");
    setTweetImage("");
  }
  
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://www.signivis.com/img/custom/avatars/member-avatar-01.png"/>
                <input 
                onChange={(e)=>setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder="What's happening ?" type = "text"/>
            </div>
            <input className='tweetBox__imageInput'
            value={tweetImage}
            onChange={(e)=>setTweetImage(e.target.value)}
            placeholder='Enter Image URL'/>
            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>     
        </form>
    </div>
  )
}

export default TweetBox