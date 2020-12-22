import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import Navbar from '../NavBar/Header';

class DisplayAlbum extends Component {

    constructor(props) {
        super(props)
        this.state ={
            albums: [],
        }
    }

    //to retrieve data
    componentDidMount() {
        axios.get('/api/album/displayAlbum')
        .then(res => {
            const albums = res.data;
            this.setState({ albums });
        })
    }


    //filterContent() method for search 
    filterContent(albums, searchAlbum){
        const result = albums.filter((album) => {
            if(album.title.toLowerCase().includes(searchAlbum.toLowerCase())){
                var title = album.title.toLowerCase().includes(searchAlbum.toLowerCase());
                return title;
            } else if(album.artist.toLowerCase().includes(searchAlbum.toLowerCase())){
                var artist = album.artist.toLowerCase().includes(searchAlbum.toLowerCase());
                return artist;
            }else if(album.genre.toLowerCase().includes(searchAlbum.toLowerCase())) {
                var genre = album.genre.toLowerCase().includes(searchAlbum.toLowerCase());
                return genre;
            }
        });
        this.setState({albums:result});
      } 

    //handleSearch() for search
    handleSearch = (e) =>{
        console.log(e.currentTarget.value);
        const searchAlbum = e.currentTarget.value;

        axios.get('/api/album/search')
          .then(res => {
              const albums = res.data;
              this.setState({ albums });
              this.filterContent(albums, searchAlbum)
            })
        }


    //delete() method
    delete(id) {
        axios.post('/api/album/delete/'+id)
        .then(response => {
          alert("Deleted successfully");
          this.componentDidMount();
        });
    }

    render() {
        return (

            <div>

                <Navbar /> <br/><br/>

                <div className="container">

                    <center>
                        <h1 className="h1 mb-3 font-weight-bold ">Albums</h1>
                    </center>

                    <br/>

                    <div className="col-md-5 mt-3 mx-auto">
                        <input
                        type="search"
                        placeholder="Search"
                        name="searchDelivery"
                        className="form-control ml-2"
                        onChange={this.handleSearch}/>
                    </div>

                    <br/><br/>

                    <table id="my-table" class="table">
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Artist</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Release Date</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>

                        { this.state.albums.map(album =>
                            <tr>
                                <td>{album.title}</td>
                                <td>{album.artist}</td>
                                <td>{album.genre}</td>
                                <td>{album.date}</td>
                                <td><button className="btn btn-warning"><Link  to={"/update/"+album._id }>Update</Link></button></td>
                                <td><button className="btn btn-danger" onClick={() =>this.delete(album._id)}>Delete</button></td>
                            </tr>)}
                    </table>
                </div>
            </div>    
        )
    }

}

export default DisplayAlbum