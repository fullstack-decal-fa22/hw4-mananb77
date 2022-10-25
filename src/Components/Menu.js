import React from 'react';
import Color from './Color.js';
import Block from './Block.js';
import Feed from './Feed.js';
import { useState } from 'react';
/* Add any imports you think you might need here! */

const Menu = () => { 
    const [state, updateState] = useState(Feed);
    // handleClick={(color) => updateFeed}
    
    return (
      <div className="colorOptions">
          <Color color="red" handleClick={(color) => updateState(['red', ...state])}></Color>
          <Color color="pink" handleClick={(color) => updateState(['pink', ...state])}></Color>
          <Color color="blue" handleClick={(color) => updateState(['blue', ...state])}></Color>
          <Color color="green" handleClick={(color) => updateState(['green', ...state])}></Color>
      </div>
    );
}

export default Menu;