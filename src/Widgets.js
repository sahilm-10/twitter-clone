import React from 'react';
import "./Widgets.css";
import SearchIcon from '@material-ui/icons/Search';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
          <SearchIcon className='widgets__searchIcon'/>
          <input placeholder='Search Twitter' type = 'text'/>
        </div>
        <div className='widgets__widgetContainer'>
          <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />   
        {/* your id */}

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />
        {/* Your profile */}

        <TwitterShareButton
          url={"https://openboardd.herokuapp.com/"}
          options={{ text: "Check out my Work! Desktop recommended", via: "sahilmalgundkar6" }}
        />

        </div>
    </div>
  );
}

export default Widgets;