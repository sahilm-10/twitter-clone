import React from 'react';
import "./Post.css";
import {Avatar} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
    <div className='post__avatar'>
        <Avatar src="https://www.signivis.com/img/custom/avatars/member-avatar-01.png"/>
    </div>
    <div className='post__body'>
    <div className='post__header'>
        <div className='post__headerText'>
            <h3>
                Sahil Malgundkar {""}
                <span className='post__headerSpecial'>
                    <VerifiedUserIcon className="post__badge" />
                    @sahil
                </span>
                
            </h3>
        </div>
        <div className='post__headerDescription'>
            <p>I challenge you to build Twitter clone</p>
        </div>
        <div className="post__Image">
            <img src="https://media2.giphy.com/media/RtdRhc7TxBxB0YAsK6/giphy.gif"/>
        </div>
        <div className ="post__footer">
            <ChatBubbleOutlineIcon fontSize="small"/>
            <RepeatIcon fontSize='small'/>
            <FavoriteBorderIcon fontSize='small'/>
            <PublishIcon fontSize='small'/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Post