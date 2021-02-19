import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useHistory,useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function Edit(){
    const classes = useStyles();
    let history =useHistory()
    const {id} = useParams()
    const [movie,setMovie]=useState({
       movieName:'',
        year:'',
        genre:''
    })
    const {movieName,year,genre}=movie
    const handleChange = e =>{
        setMovie({...movie,[e.target.name]:e.target.value})
    }
    useEffect(()=>{
        loadUser();
    },  []);
    const onSubmit = async e=>{
        e.preventDefault()
        await axios.put(`http://localhost:4000/movie/${id}`, movie)
        history.push('/admin')
    }
    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:4000/movie/${id}`)
        //console.log(result)
        setMovie(result.data)
    }
    return(
        <div>
            <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" spacing={2} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Edit the movieData
          </Typography>
          
          
        </Toolbar>
      </AppBar>
      <br/>
            <form className={classes.root}
            onSubmit={e=>onSubmit(e)}>
            <TextField id="outlined-basic" label="Movie Name" variant="outlined" value={movieName} name="movieName" onChange={e=>handleChange(e)}/><br/>
            <TextField id="outlined-basic" label="year" variant="outlined" value={year} name="year"
            onChange={e=>handleChange(e)}/><br/>
            <TextField id="outlined-basic" label="genre" variant="outlined" value={genre} name="genre" onChange={e=>handleChange(e)}/><br/>
           <br/>
           <input type="submit" value="UPDATE"/>
           </form>
        </div>
    )
}

export default Edit