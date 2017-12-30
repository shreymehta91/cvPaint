import React from 'react';
import { SpringGrid } from 'react-stonecutter';
import imageApi from '../imageApi';
import { Link } from 'react-router-dom';

const DashBoard = () => {
  return (
    <div className="hello-world">
      <SpringGrid
        component="ul"
        columns={5}
        columnWidth={200}
        gutterWidth={20}
        gutterHeight={20}
        itemHeight={200}
        springConfig={{ stiffness: 170, damping: 26 }}
      >
        {imageApi.map(function(imageObj, index) {
          return (
            <li key={imageObj.id}>
              <Link to={'/draw/' + index}>
                <img src={imageObj.path} width="200px" height="200px" />
              </Link>
            </li>
          );
        })}
      </SpringGrid>
    </div>
  );
};
export default DashBoard;
