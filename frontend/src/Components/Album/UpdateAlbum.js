import React, { Component } from 'react';
import {Grid,Paper,TextField, Button} from '@material-ui/core';
import axios from 'axios';

class UpdateAlbum extends Component {

    constructor(props){
        super(props)

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleArtistChange = this.handleArtistChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            title:'',
            artist:'',
            genre:'',
            date:'',
            genres:[],
        }
    }

    //retrieving genres
    componentDidMount() {
        axios.get('/api/genre/displayGenre')
        .then(res => {
            const genres = res.data;
            this.setState({ genres });
        })
    
    //to get current data for update
    axios.get('/api/album/edit/'+this.props.match.params.id)
        .then(res => {
            this.setState({
                title: res.data.title,
                artist: res.data.artist,
                genre: res.data.genre,
                date: res.data.date
            });
        })
        .catch(function (error){
            console.log(error);
        })
    }


    handleTitleChange = event => {
        this.setState( {
            title: event.target.value
        });
    }

    handleArtistChange = event => {
        this.setState( {
            artist: event.target.value
        });
    }

    handleGenreChange = event => {
        this.setState( {
            genre: event.target.value
        });
    }

    handleDateChange = event => {
        this.setState( {
            date: event.target.value
        });
    }

    //onSubmit method for update data
    onSubmit = (event) => {
        event.preventDefault();

        const Album = {
            title: this.state.title,
            artist: this.state.artist,
            genre: this.state.genre,
            date:this.state.date
        };

        axios.post('/api/album/update/'+this.props.match.params.id, Album)
        .then(response =>
            console.log(response.data));
            window.location = '/';
    }

    


    render() {
        return(
            <div>

                <form onSubmit={this.onSubmit}>
                    <Grid>
                        <Paper elevation={10} style={{padding:20,height:'90vh',width:380,margin:"20px auto"}}>
                            <Grid align='center'>
                                <h2>Update Album</h2>
                            </Grid>

                            <TextField name="title" label='Title' value={this.state.title} onChange={this.handleTitleChange} fullWidth required/> <br/><br/>

                            <TextField name="artist" label='Artist' value={this.state.artist} onChange={this.handleArtistChange} fullWidth required/> <br/><br/>

                            <TextField name="date" label='Release Date' placeholder='MM/DD/YY' value={this.state.date} onChange={this.handleDateChange} fullWidth required/> <br/><br/><br/>

                            <Button type='submit' color='primary' variant="contained" onClick={this.onSubmit} fullWidth>Update</Button>

                        </Paper>
                    </Grid>
                </form>

            </div>
        )
    }
}

export default UpdateAlbum