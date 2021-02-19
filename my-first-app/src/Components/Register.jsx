import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../Redux/action";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumber: "",
      
      password: ""
    };
  }
  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { phonenumber, password } = this.state;
    this.props.signUpRequest({
      phonenumber,
      password
    });
  };
  render() {
    const { phonenumber, password } = this.state;
    console.log(this.props);
    const { regSuccess, regError } = this.props;
    console.log(regSuccess, regError);
    return (
      <>
       
     
      <Container component="main" maxWidth="xs" style={{  height: "500px", padding: "60px" }}>
          <CssBaseline />
          <div >
            <Avatar style={{ marginLeft: "45%", color: "white", background: "blue" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
        </Typography>
            <form onSubmit={this.handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="phonenumber"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Phonenumber"
                    value={phonenumber}
                    autoFocus
                    onChange={this.handleChange}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={this.handleChange}
                  />
                </Grid>
                
              </Grid>
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
          </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="http://localhost:3000/Login" variant="body2">
                    Already have an account? Sign in
              </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            {regSuccess && regSuccess}
            {regError && regError}
          </Box>
        </Container>
       
        
        
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  regError: state.app.regError,
  regSuccess: state.app.regSuccess
});
const mapDispatchToProps = (dispatch) => ({
  signUpRequest: (payload) => dispatch(signUp(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);