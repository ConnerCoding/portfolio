import $ from 'jquery';
import installTilt from 'tilt.js';

installTilt(window, $);

const initTilt = () => {
  // Projects images
  $('.project-wrapper__image a div').tilt({
    maxTilt: 3,
  });
};

export default initTilt;
