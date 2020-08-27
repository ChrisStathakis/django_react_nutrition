import React, {Component} from 'react';
import {
    Container,
    Form,
    Checkbox,
    Button,
    Grid,
} from 'semantic-ui-react';

import {connect} from 'react-redux';
import axiosInstance from "../tools/helpers";
import {BASE_URL, CURRENT_USER_ENDPOINT, PROFILES_ENDPOINT} from "../tools/endpoints";
import Navbar from "../components/navbar";



class ProfileView extends Component{

    constructor(props){
        super(props);

        this.state = {
            id: '',
            active: true,
            public_: true,
            birth: '',
            height: 0,
            weight: 0,
            gender: 'a',
            user: ''
        }
    }


    componentDidMount(){
        const id = this.props.id;
        const endpoint = PROFILES_ENDPOINT + '?user=' + id
        axiosInstance.get(endpoint).then(
            respData=>{
                const new_data = respData.data;
                this.setState({
                    id: new_data.id,
                    active: new_data.active,
                    public_: new_data.public,
                    birth: new_data.birth,
                    height: new_data.height,
                    weight: new_data.weight,
                    gender: new_data.gender,
                    user: new_data.user
                })
            }
        )

    }

    render(){
        const {public_, birth, height, weight, gender,} = this.state;
        return (
            <div>
                <Navbar />
                <Container>
                    <Grid dividec inverted stackable>
                        <Grid.Column width={3}>
                             <Form>
                                <Form.Field>
                                  <label>First Name</label>
                                  <input placeholder='First Name' />
                                </Form.Field>
                                <Form.Field>
                                  <label>Last Name</label>
                                  <input placeholder='Last Name' />
                                </Form.Field>
                                <Form.Field>
                                  <Checkbox label='I agree to the Terms and Conditions' />
                                </Form.Field>
                                <Button type='submit'>Submit</Button>
                              </Form>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>

        )
    }

}


const mapStateToProps = state => ({
    username: state.authReducer.username,
    user_id : state.authReducer.id
});



export default connect(mapStateToProps, {})(ProfileView)