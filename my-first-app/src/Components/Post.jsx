import React from 'react';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const useStyles = () => ({
  root: {
    flexGrow: 1
  },
})

class PersonList extends React.Component {
  state = {
    movieName: '',
    year:'',
    genre:''
  }

  handleChange = event => {
      const {name,value}=event.target
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const movie = {
        
      movieName: this.state.movieName,
      year:this.state.year,
      genre:this.state.genre
    };

    axios.post("http://localhost:4000/movie",  movie )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
      const {movieName,year,genre}=this.state
      const {classes} = this.props
    return (
      <div>
         <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Add a Movie
          </Typography>
          
          
        </Toolbar>
      </AppBar>
      <br/>
        <form onSubmit={this.handleSubmit} className={classes.root}>
          
            <TextField id="outlined-basic" label="Movie Name" variant="outlined" type="text" name="movieName" value={movieName}
            onChange={this.handleChange} />
         <br/> <br/>
          
            <TextField id="outlined-basic" label="year" variant="outlined" type="text" name="year" value={year}
            onChange={this.handleChange} />
          <br/> <br/>
         
            <TextField id="outlined-basic" label="genre" variant="outlined" type="text" name="genre" value={genre}
            onChange={this.handleChange} />
        <br/> <br/>
         
            
         <Button  type="submit"
         style={{backgroundColor:"blue",color:"white"}}>ADD</Button>
        </form>
      </div>
    )
  }
}

export default withStyles(useStyles)(PersonList)
