import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from './../actions';

const AddedFeature = (props) => {
  const { feature, removeFeature } = props;

  const handleClick = () => {
    removeFeature(feature);
  };

  return (
    <li>
      <button onClick={handleClick} className="button">
        X
      </button>
      {feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
