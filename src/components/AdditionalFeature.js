import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeature = (props) => {
  const { feature, addFeature } = props;

  const handleClick = () => {
    addFeature(feature);
  };

  return (
    <li>
      <button onClick={handleClick} className="button">
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
