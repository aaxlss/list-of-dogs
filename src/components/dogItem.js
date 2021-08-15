import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../actions/index';
import { Button, Card, CardActions, CardContent, Snackbar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';



const DogItem = (props) => {
  const [openMessage, setOpenMessage] = useState(false);
  const [messageText, setMessageText] = useState('');
  const {src} = props;

  const handleAddFavorite = () => {
    props.addFavorite({
      url: src
    });
  }

  const handleDeleteFavorite = (dog) => {
    props.deleteFavorite(dog)
  }
  return (
    <>
      <Card>
        <CardContent>
        {props.src.includes('.mp4')? 
        <video width="100%" controls >
              <source {...props} type="video/mp4"/>
        </video>
        :<img {...props} style={{width: '100%', objectFit:"cover"}}/>}
        <CardActions>
          <IconButton aria-label={`star title`} onClick={() => {
            if(props.favorite){
              handleDeleteFavorite(props.src);
              setOpenMessage(true);
              setMessageText("Removed from Favorites");
            } else {
              handleAddFavorite();
              setOpenMessage(true);
              setMessageText("Added to Favorites");
            }
            
          }}>
            {props.favorite?<DeleteIcon/>:<StarBorderIcon />}
            
            
          </IconButton> 
        </CardActions>
        </CardContent> 
      </Card>
      <Snackbar
          open={openMessage}
          autoHideDuration={1500}
          message={messageText}
          onClose={() => setOpenMessage(false)}
        />
    </>
)};

const mapStateTopProps = {
  addFavorite,
  deleteFavorite,
}

export default connect(null,mapStateTopProps)(DogItem)