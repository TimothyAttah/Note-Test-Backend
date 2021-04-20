import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Buttons = ( { first, second, firstLink, secondLink } ) => {
  return (
    <>
      <ButtonGroup variant='contained' color='primary'>
        <Button><Link to={firstLink}>{ first }</Link></Button>
        <Button><Link to={secondLink}>{ second }</Link></Button>
      </ButtonGroup>
    </>
  );
};

Buttons.propTypes = {
  first: PropTypes.any.isRequired,
  second: PropTypes.string.isRequired,
  firstLink: PropTypes.string.isRequired,
  secondLink: PropTypes.string.isRequired,
}

export default Buttons;
