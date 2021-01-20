export const addFeature = (feature) => {
  return {
    type: 'ADD_FEATURE',
    payload: feature
  };
};

export cosnt removeFeature = (feature) => {
  return {
    type: 'REMOVE_FEATURE',
    payload: feature
  }
}
