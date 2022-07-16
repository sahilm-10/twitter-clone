import React from 'react';
import "./TweetBox.css";
import {Avatar , Button} from "@material-ui/core";
// Avatar -> circled image


function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://www.signivis.com/img/custom/avatars/member-avatar-01.png"/>
                <input placeholder="What's happening ?" type = "text"/>
            </div>
            <input className='tweetBox__imageInput' placeholder='Enter Image URL'/>
            <Button className="tweetBox__tweetButton">Tweet</Button>     
        </form>
    </div>
  )
}

export default TweetBox