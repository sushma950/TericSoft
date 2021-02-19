import React from "react";
//import './App.css';
import axios from 'axios'
import {Link} from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Post from './Post'

const useStyles = () => ({
  root: {
    flexGrow: 1
  },
  
  title: {
    flexGrow: 1,
  },
  media: {
    height: 100,
    width:100,
    borderRadius:50,
    marginLeft:100
  },
});

class Home extends React.Component {
  
    state={
      loading:true,
      movies:[],
      
    }
  
  
  componentDidMount = () => {
    axios.get("http://localhost:4000/movie")
    
    .then(res=>
      
      this.setState({
        movies:res.data,
        loading:false
      }))
  }
  handleChange = event => {
    this.setState({ name: event.target.value });
  }
  deleteCard=(id, e)=>{
    axios.delete(`http://localhost:4000/movie/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
  
        const movies = this.state.movies.filter(item => item._id != id);
        this.setState({ movies });
      })
     
        
      
  }
  
  
  render(){
    const {loading,movies}=this.state
    const {classes} = this.props
    
  return (
    <div className="App">
      {loading ? (<p>Movies are loading ...</p>) : (
         
          
          <div  className={classes.root}>
            
  
             <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" spacing={2} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Movies List
          </Typography>
          <Button 
          color="inherit">
 <Link to='/dashboard' style={{color:"white"}}>ADD</Link>
          </Button>
          
        </Toolbar>
      </AppBar>
      <br/>
               <Grid container spacing={3} >
             {movies.map((movie) => (
            
               <Grid key={movie._id} item  lg={3}>
                <Card key={movie._id} style={{textAlign:"center"}}>
                <CardActionArea>
                 
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.movieName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="p">
                      {movie.year}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     {movie.genre}
                    </Typography>
                   
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" 
                  style={{marginLeft:"80px",backgroundColor:"blue",color:"white"}}
                  >
                  <EditIcon/> 
                  <Link to ={`/dashboard/${movie._id}`} style={{color:"white"}}>EDIT</Link>
                  </Button>
                  <Button size="small" onClick={(e) => this.deleteCard(movie._id, e)}
                   style={{backgroundColor:"red",color:"white"}}>
                  <DeleteIcon/>  DELETE
                  </Button>
                  
                </CardActions>
              </Card>
              </Grid>
             
             ))}
           </Grid>
     </div>
 
      )}
    
    
    
      
       
    </div>
    
  );
}

}

export default withStyles(useStyles)(Home);
