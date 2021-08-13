import React from 'react'
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const DogItem = (props) => (
    <ImageListItem  >
        <img {...props} />
        <ImageListItemBar
              title={props.title}
              position="top"
              actionIcon={
                <IconButton aria-label={`star title`} >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              
            />
    </ImageListItem>
);

export default DogItem