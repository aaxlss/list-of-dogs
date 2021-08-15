import React from "react";
import { connect } from "react-redux";
import ImageList from '@material-ui/core/ImageList';
import DogItem from "../components/dogItem";
import { Grid } from "@material-ui/core";

const Favorites = ({favorites}) => {

    
        return (
            <>
            { favorites.length > 0 &&
            <div style={{flexGrow: 1}}>
                <Grid container >
                    {favorites.map((dog, index) => (
                        <Grid item xs={12} sm={2}>
                            <DogItem src={dog.url} favorite={true}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
            }
        
            </>
        )
}

const mapStateTopProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(mapStateTopProps, null)(Favorites)