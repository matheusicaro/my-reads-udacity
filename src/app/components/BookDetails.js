/*
* DESCRIPTION
*
* This component is reusable and responsible for the popup that contains more details of the books,
* being triggered by the click of the 'details' button.
*
* Author: Matheus Icaro - matheusicaro2@hotmail.com
*
*/

import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import PropTypes from 'prop-types';

const BookDetails = ({ handleOpen, onRequestClose, open, title, subtitle, imageLinks, authors,
  infoLink, categories, description, language, publishedDate }) => {


  const actions = [
    <FlatButton
      label="Close"
      primary={true}
      onClick={onRequestClose}
    />,
  ];

  return (
    <div className='details'>
      <RaisedButton label='Details' onClick={handleOpen} style={styles.rasedButton} labelColor={styles.rasedButton.labelColor} />
      <Dialog
        title={title}
        actions={actions}
        modal={false}
        open={open}
        onRequestClose={onRequestClose}
        titleStyle={styles.title}
        bodyStyle={styles.bodyStyle}
      >

        <h4> { (subtitle) ? (subtitle) : (title) } </h4>

        <article>
          <span style={styles.imgDescription}>
            <img src={imageLinks.smallThumbnail} alt="Avatar" />
          </span>

          {description}
        </article>

        <aside style={styles.infoAtributes.root}>
          <div style={styles.infoAtributes.atribute }><b> Authors:</b> {authors} </div>
          <div style={styles.infoAtributes.atribute }><b> Categories:</b> {categories} </div>
          <div style={styles.infoAtributes.atribute }><b> Language:</b>  {language.toUpperCase()}</div>
          <div style={styles.infoAtributes.atribute }><b> Published in:</b>  {publishedDate} </div>
          <div style={styles.infoAtributes.atributeLink}> <a href={infoLink}>Clique para comprar </a></div>
        </aside>

      </Dialog>
    </div>
  )
}

export default BookDetails

BookDetails.propTypes = {

  handleOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageLinks: PropTypes.object.isRequired,
  authors: PropTypes.array,
  infoLink: PropTypes.string,
  categories: PropTypes.array,
  description: PropTypes.string,
  language: PropTypes.string,
  publishedDate: PropTypes.string,

};

const styles = {

  button: {
    marginRight: '0px',
    float: 'right',
  },

  title: {
    marginBlockEnd: '-2em',
    color: 'rgb(0, 151, 167)'
  },

  bodyStyle: {
    overflowY: 'scroll',
    marginTop: '6%',
  },

  rasedButton: {
    boxShadow: '0',
    labelColor: 'rgb(0, 151, 167)'
  },

  imgDescription: {
    padding: '5px 15px 10px 0px',
    float: 'left',
  },

  infoAtributes: {
    root: {
      padding: '3% 0% 0% 0%',
    },

    atribute:{
      padding: '1% 0% 0% 0%',
    }, 
    
    atributeLink: {
      padding: '1% 0% 0% 0%',
      color:"rgb(0, 151, 167)",
    }
  }
}