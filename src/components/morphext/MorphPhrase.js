import React from 'react';
import classNames from 'classnames';

// Phrase component
const MorphPhrase = (props) => {
  const classesObject = {
    animated: props.active,
  };
  classesObject[props.animation] = props.active;
  const classes = classNames(classesObject);

  return <span className={classes}>{props.phrase}</span>;
};

export default MorphPhrase;
