/*
* DESCRIPTION
*
* This component is responsible for demonstrating information on how to perform the research of books, 
* is activated by a click controlled by 'isOpen'.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Clear from 'material-ui/svg-icons/content/clear';
import FlatButton from 'material-ui/FlatButton';
import Arrow from 'material-ui/svg-icons/action/help';

import PropTypes from 'prop-types';

import '../styles/components/DrawerMenu.css'

const SearchTip = (props) => {

  const { isOpen, menuDrawer} = props;
  const handleToggle = () => props.actionSearchTip(!isOpen);

  return (
    <div>

      <FlatButton
        label={menuDrawer.button}
        labelPosition="before"
        primary={true}
        onClick={handleToggle}
        icon={<Arrow
        />}
      />

      <Drawer width={'40%'} openSecondary={true} open={isOpen} >

        <div className="menu-title">
          <IconButton tooltip="Fechar">
            <Clear onClick={handleToggle} color='rgba(48, 48, 48)' />
          </IconButton>

          <h1> {menuDrawer.tittle} </h1>

        </div>

        <div className="menu-body">

          {menuDrawer.text}

          <ul>
            {
              menuDrawer.topics.map((topics, index) => (
                <li key={index} style={styles.li}>  {topics} </li>
              ))
            }
          </ul>

        </div>
      </Drawer>

    </div>
  );
}

export default SearchTip

SearchTip.propTypes = {

  actionSearchTip: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const styles = {

  li: {
    padding: '0% 0% 1.5% 0%'
  },

  button: {
    border: '10px',
    boxSizing: 'border-box',
    display: 'inline-block',
    fontFamily: 'Roboto, sans-serif',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '0px',
    padding: '0px',
    outline: 'none',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    position: 'relative',
    height: '36px',
    lineHeight: '36px',
    minWidth: '88px',
    color: 'rgb(0, 151, 167)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    borderRadius: '2px',
    userSelect: 'none',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    textAlign: 'center',
  },

  rasedButton: {
    boxShadow: '0'
  }
}




