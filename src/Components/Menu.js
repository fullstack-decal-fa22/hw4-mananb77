import React from 'react';
import Color from './Color.js';
import Block from './Block.js';
import Feed from './Feed.js';
import { useState } from 'react';
/* Add any imports you think you might need here! */

const Menu = (posts, updateState) => { 
    // const [state, updateState] = useState(Feed);
    // handleClick={(color) => updateFeed}
    
    return (
      <div className="colorOptions">
          <Color color="red" handleClick={(color) => updateState(posts => [color, ...posts])}></Color>
          <Color color="pink" handleClick={(color) => updateState(['pink', ...posts])}></Color>
          <Color color="blue" handleClick={(color) => updateState(['blue', ...posts])}></Color>
          <Color color="green" handleClick={(color) => updateState(['green', ...posts])}></Color>
      </div>
    );
}

export default Menu;