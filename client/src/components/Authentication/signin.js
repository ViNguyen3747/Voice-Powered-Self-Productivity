import React from 'react'
import { GoogleLogin } from "react-google-login";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom';
const dispatch = useDispatch;

const AUTH = 'AUTH';

const Sinin = () => {

    const history = useHistory();
  const googleSuccess = (res)=>{
   
    const result = res.profileObj;
    const token = res.tokenId;
    try{
      dispatch({type: AUTH, data:{result, token}})
      history.pushState('/')
    } catch(error){
      console.log(error);
    }
  }



const googleError = ()=>{
  console.log("Google Sign in was unsuccessful. Try again later");
}
    return (
        <div className='Authwrapper sign'>
            <div className = 'header '>
            <h6 className="back" >BACK</h6>
            <h6 className="up" > SIGNUP </h6>
            </div>
        <form className='inputs'>
        <input className='emailin' type="text" placeHolder = "name@gmail.com" name="email"></input>
        <input className='passwordin' type="text" placeHolder = "password" name="password"></input>
        <button className='btn' type='submit'>Login</button>
        <div>
     <GoogleLogin
          clientId="375983667598-fblbteage49sr5qmhit2deqvemsqurr5.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              color="secondary"
              //fullWidth
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              variant="contained"
              width='10px'
            >
              Sign in with Google
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
          cookiePolicy="single_host_origin"
        />
     </div>
        <div>
            <p>Dont have an account <Link to='/'>Sign up</Link> </p>
        </div>
         </form>
        </div>
    )
}

export default Sinin