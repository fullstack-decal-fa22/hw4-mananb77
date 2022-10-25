import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';
import Color from './Color.js';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [posts, addPost] = useState([]); // TODO: edit this variable

    return (
        <div>
            {/* when clicking post "color" block, then add to feed */}
            {/* <Menu posts={posts} addPost={addPost}/> */}
            <Menu></Menu>
            {/* Below is where all of your Blocks should render! */}
            {/* {posts.map((el) => {
                <Block color={el}/>
            })} */}
            {posts}
        </div>
    );
}

export default Feed;