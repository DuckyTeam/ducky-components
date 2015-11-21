import React from 'react';

function Item(props) {
  return (
    <li {...props}/>
  );
}

Item.propTypes = {
  children: React.PropTypes.any
};

export default Item;
