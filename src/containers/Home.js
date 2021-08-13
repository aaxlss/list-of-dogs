import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/styles';
import DogItem from '../components/dogItem';
import ImageList from '@material-ui/core/ImageList';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
  });

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.getDogs();
      this.state = {
        error: null,
        isLoaded: false,
        dogs: []
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
                if(!data.url.includes('.mp4')){
                    this.setState({
                        dogs: [...this.state.dogs, data]
                    })
                }
                
            });
            count ++
        } while (count <=6);
     
    }

   
    render(){
        
        return (
            <>
                <Button onClick={() => this.getDogs()}>Get 6 dogs</Button>
                <ImageList>
                    {this.state.dogs.map((dog, index) => (
                        
                        <DogItem src={dog.url} title={`dog-${index + 1}`}/>
                    ))}
                </ImageList>
            </>
        )
    }
}

export default Home