import React, { Component } from 'react';
import axios from 'axios';
import {Grid,Paper,TextField,FormLabel,FormControl, RadioGroup, FormControlLabel, Radio, Button} from '@material-ui/core';
import Navbar from '../NavBar/Header';

class AddAlbum extends Component{

    constructor(props){
        super(props)

        this.state = { 
            title:' ',
            artist:' ',
            genre:' ',
            date:' ',
            genres:[],
        }
    }

    handleTitleChange = event => {
        this.setState( {
            title: event.target.value
        })
    }

    handleArtistChange = event => {
        this.setState( {
            artist: event.target.value
        })
    }

    handleGenreChange = event => {
        this.setState( {
            genre: event.target.value
        })
    }

    handleDateChange = event => {
        this.setState( {
            date: event.target.value
        })
    }

    //onSubmit method to insert data
    onSubmit = (event) => {
        event.preventDefault();

        const Album = {
            title: this.state.title,
            artist: this.state.artist,
            genre: this.state.genre,
            date:this.state.date
        };
      
        axios.post('/api/album/addAlbum/', Album)
            .then(response => {
                if(response.data.success){
                    alert('Successfully added');
                } else {
                    alert('Failed')
                }
            })
    }

    //retrieving genres
    componentDidMount() {
        axios.get('/api/genre/displayGenre')
        .then(res => {
            const genres = res.data;
            this.setState({ genres });
        })
    }


    render() {
        return(
            <div>

                <Navbar /> <br/><br/>

                <form onSubmit={this.onSubmit}>
                    <Grid>
                        <Paper elevation={10} style={{padding:20,height:'100vh',width:380,margin:"20px auto"}}>
                            <Grid align='center'>
                                <h2>Add Album</h2>
                            </Grid>

                            <TextField name="title" label='Title' value={this.state.title} onChange={this.handleTitleChange} fullWidth required/> <br/><br/>

                            <TextField name="artist" label='Artist' value={this.state.artist} onChange={this.handleArtistChange} fullWidth required/> <br/><br/>
                            
                            <FormControl component='fieldset'>
                                <FormLabel component='legend'>Genre:</FormLabel>
                                { this.state.genres.map(genre =>
                                <RadioGroup name="genre" value={this.state.genre} onChange={this.handleGenreChange}>
                                    <FormControlLabel value={genre.genre} control={<Radio />} label={genre.genre}/>
                                </RadioGroup>
                                )}
                            </FormControl>

                            <TextField name="date" label='Release Date' placeholder='MM/DD/YY' value={this.state.date} onChange={this.handleDateChange} fullWidth required/> <br/><br/><br/>

                            <Button type='submit' color='primary' variant="contained" onClick={this.onSubmit} fullWidth>Add</Button>

                        </Paper>
                    </Grid>
                </form>

            </div>
        )
    }
}

export default AddAlbum