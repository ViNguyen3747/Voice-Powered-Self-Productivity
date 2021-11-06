import React from 'react'
import { GoogleLogin } from "react-google-login";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {Button} from '@material-ui/core'
import {useHistory} from 'react-router-dom';
const dispatch = useDispatch;

const AUTH = 'AUTH';

  
const Register = () => {

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
        <div>
  <div className = 'Authwrapper'>
      <div className = 'header'>
        <h6 className="back" >BACK</h6>
        <h6 className="up" > SIGNUP </h6>
      </div>
      
      <form className="form">
        
        <input className='name' type="text" placeHolder = "First name" name="firstName"></input>
        <input className='name' type="text" placeHolder = "Last name" name="lastName"></input><br></br>
        <input className='email' type="text" placeHolder = "name@gmail.com" name="email"></input>
        <input className='password' type="text" placeHolder = "password" name="password"></input>
        <section className = "address">
          <input className = "address" type='text' placeHolder='Enter street name' name='streetAddress'></input>
          <input className = "address" type='number' placeHolder='Unit #' name='unit'></input>
          <input className = "address" type='text' placeHolder='Enter street city' name='city'></input>
          <label>State</label>
      <select class="address">
          <option value="">State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
      </select>
      </section>
      <label>Category</label>
      <select clasName="category">
        <option value="proffesional">Proffessional</option>
        <option value="Physical">Phisical</option>
        <option value="Menatl">Mental</option>
        <option value="Psycological">Psycological</option>
      </select><br></br>
      <button className='btn' type='button'>SIGN UP</button>
     </form>
     <div>
     <GoogleLogin
          clientId="375983667598-fblbteage49sr5qmhit2deqvemsqurr5.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              color="primary"
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
     <div className="signin">
        <p>Already have an acount? <Link to='/login'>Sig in</Link></p>
      </div>
    </div>


        </div>
    )
}

export default Register;