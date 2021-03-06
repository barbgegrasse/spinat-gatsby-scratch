// Import necessary dependencies

import PropTypes from 'prop-types';
import React from 'react';
import {
  TransitionGroup,
  Transition as ReactTransition,
} from 'react-transition-group';

const Transition = ({ children, location }) => {
  // Using TransitionGroup and ReactTransition which are both
  // coming from  'react-transition-group' and are required for transitions to work
  // This variable will be responsible for our animation duration
  const timeout = 500;

  // This object contains basic styles for animation, but you can extend them to whatever you like. Be creative!
  const getTransitionStyles = {
    entering: {
      position: 'absolute',
      opacity: 0,
      transform: `translateX(0)`,
    },
    entered: {
      transition: `all ${timeout}ms ease-in-out`,
      transform: `translateX(0)`,
    },
    exiting: {
      transition: `all ${timeout}ms ease-in-out`,
      opacity: 0,
      transform: `translateX(-70px)`,
    },
  };
  const { pathname } = location;
  return (
    <TransitionGroup>
      <ReactTransition
        // the key is necessary here because our ReactTransition needs to know when pages are entering/exiting the DOM
        key={pathname}
        // duration of transition
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {// Application of the styles depending on the status of page(entering, exiting, entered) in the DOM
        status => (
          <div
            className="transition"
            style={{
              ...getTransitionStyles[status],
            }}
          >
            {children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  );
};

Transition.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Transition;
