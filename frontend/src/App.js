import React from 'react';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import AddAlbum from './Components/Album/AddAlbum';
import DisplayAlbum from './Components/Album/DisplayAlbums';
import UpdateAlbum from './Components/Album/UpdateAlbum';

function App() {
  return (
    <Router>

      <Route exact path="/" component={DisplayAlbum}/>
      <Route path="/add" component={AddAlbum}/>
      <Route path="/update/:id" component={UpdateAlbum}/>

    </Router>
  );
}

export default App;
