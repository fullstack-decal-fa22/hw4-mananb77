import '../Styles/Block.css';
import Color from './Color.js';
import React from 'react';

const Block = (color) => {
    const backgroundColor = {
        backgroundColor: color
    };

    return (
        // ignore this data-testid, it's purely for testing :)
        <div data-testid='main-component'>
            {/* You'll notice pre-assigned class names 'post' and 'caption', 
            we took care of the basic block styling! 
            If curious, check out the css in Styles/Block.css */}
            {/* Refer to hint if stuck on how to color the posts */}

            <div className="post">
                <div style={backgroundColor}></div>
            </div>
            <div className="caption">
                <p>{color}</p>
            </div>
        </div>
    );
}

export default Block;