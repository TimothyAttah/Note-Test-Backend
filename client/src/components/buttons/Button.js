import React from 'react';
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

export default Buttons;
