import { Button, Grid } from '@material-ui/core';
import React from 'react';
import DogItem from '../components/dogItem';
import ImageList from '@material-ui/core/ImageList';
import { connect } from 'react-redux';



class Home extends React.Component {
    constructor(props) {
      super(props);
      this.getDogs();
      this.state = {
        error: null,
        isLoaded: false,
        dogs: [],
        favorites: [],
      };
    }

    getDogs () {
        this.setState({
            dogs: []
        })
        let count = 0;
        do {
            fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(data => {
               
                    this.setState({
                        dogs: [...this.state.dogs, data]
                    });
                     
            });
            count++
        } while (count < 6);
     
    }

   
    render(){
        return (
            <div style={{flexGrow: 1}}>
                <Grid container >
                    <Grid item xs={12}>
                        <Button onClick={() => this.getDogs()}>Get 6 dogs</Button>
                    </Grid>
                    {this.state.dogs.map((dog, index) => (
                        <Grid item xs={12} sm={2}>
                            <DogItem src={dog.url}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

const mapStateTopProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect( mapStateTopProps, null)(Home)