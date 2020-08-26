import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import axiosInstance from "../tools/helpers";
import {TOKEN_ENDPOINT} from "../tools/endpoints";



class LoginView extends React.Component{

    constructor(props) {
        super(props);
        this.handleText = this.handleText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            username:'',
            password: '',

        }
    }


    handleText(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        const data = {
            username: this.state.username,
            password: this.state.password
        };
        axiosInstance.post(TOKEN_ENDPOINT, data)
            .then(
                respData=>{
                    console.log('data', respData)
                    axiosInstance.defaults.headers['Authorization'] = "Bearer " + respData.data.access;
                    localStorage.setItem('access_token', respData.data.access);
                    localStorage.setItem('refresh_token', respData.data.refresh);
                    localStorage.setItem('isAuthenticated', 'true');
                }
            )
    }

    componentDidMount(){
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        if(isAuthenticated === true){
            console.log('here!');
            this.props.history.push('/')
        }
    }

    render(){
        return(
             <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                 <Grid.Column style={{ maxWidth: 450 }}>
                     <Header as='h2' color='teal' textAlign='center'>Log-in to your account</Header>
                     <Form size='large'>
                         <Segment stacked>
                             <Form.Input fluid icon='user' name='username' onChange={this.handleText} iconPosition='left' placeholder='E-mail address' />
                             <Form.Input
                                 fluid
                                 icon='lock'
                                 iconPosition='left'
                                 placeholder='Password'
                                 type='password'
                                 onChange={this.handleText}
                                 name={'password'}
                             />
                             <Button color='teal' fluid size='large' onClick={this.handleSubmit}>
                                 Login
                             </Button>
                         </Segment>
                     </Form>
                     <Message>
                         New to us? <a href='#'>Sign Up</a>
                     </Message>
                 </Grid.Column>
             </Grid>
        )
    }

}


export default withRouter(LoginView);
