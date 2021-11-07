import React from 'react'
import { GoogleLogin } from "react-google-login";
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {Button, Form,Input,} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const dispatch = useDispatch;

const AUTH = 'AUTH';
const options = [
  { key: 'p', text: 'Professional', value: 'proffessional' },
  { key: 'c', text: 'Practical', value: 'practical' },
  { key: 'm', text: 'Mental', value: 'mental' },
  {key: 's', text: 'Spiritual', value: 'spiritual' },
  {key: 'Mental', text: 'Mental', value: 'Mental' },
]

 
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
    <div className='formContainer'>
      <div className = 'header'>
        <h6 className="back" >BACK</h6>
        <h6 className="up" > SIGNUP </h6>
      </div>
     <div className = 'formWrapper'>
       <Form >
            <Form.Group widths='equal' >
            <Form.Input
              name ="firstName"
              fluid
              id='form-subcomponent-shorthand-input-first-name'
              placeholder='First name'
            />
            <Form.Input
              type ="text"
              name ='lastName'
              fluid
              id='form-subcomponent-shorthand-input-last-name'
              placeholder='Last name'
            />
          </Form.Group>
          <Form.Input
                  className='email'
                  id='form-input-control-error-email'
                  control={Input}
                  name='email'
                  placeholder='joe@schmoe.com'
                  /*error={{
                    content: '',
                    pointing: 'below',
                  }}*/
            />
          <Form.Group widths='equal'>
            <Form.Input
              type='text'
              name='street'
              fluid
              id='form-subcomponent-shorthand-input-first-name'
              placeholder='Enter Address'
            />
            <Form.Input
              type='number'
              nmae='unit'
              fluid
              id='form-subcomponent-shorthand-input-last-name'
              placeholder='Unit #'
            />
        </Form.Group>
        <Form.Group widths='equal'>
                <Form.Input
                  type='text'
                  name='city'
                  fluid
                  id='form-subcomponent-shorthand-input-first-name'
                  placeholder='Enter City'
                />
                <Form.Input
                  name='state'
                  type='text'
                  fluid
                  id='form-subcomponent-shorthand-input-last-name'
                  placeholder='State'
                />
                
        </Form.Group> 
        <Form.Select

            fluid
            label='Category'
            options={options}
            placeholder='Category'
            />
        
        <Button secondary type='submit'>Submit</Button>
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
      </Form>
      </div>
    </div>
    )
}

export default Register;