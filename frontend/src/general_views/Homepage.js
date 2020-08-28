import React from 'react';
import {connect} from 'react-redux';

import {
  Container,
    Card,
    Button,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'
import { withRouter } from "react-router-dom";


import Navbar from '../components/navbar';

class HomepageView extends React.Component{


    componentDidMount() {


    }

    render(){
        const {calories} = this.props;
        return (
            <div>
                <Navbar />
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1'>Semantic UI React Fixed Template</Header>
                    <p>This is a basic fixed menu template using fixed size containers.</p>
                    <p>
                      A text container is used for the main container, which is useful for single column layouts.
                    </p>
                    <Grid columns={2} divided>
                      <Grid.Row>
                        <Grid.Column>
                         <Card>
                             <Card.Content>
                                 <Card.Header>Total Calories {calories}</Card.Header>
                                 <Card.Meta>Friends of Elliot</Card.Meta>
                                 <Card.Description>
                                      <List items={['Age', 'Height', 'Weight']} />
                                 </Card.Description>
                             </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
                        </Grid.Column>
                        <Grid.Column>
                          <h4>World</h4>
                        </Grid.Column>

                      </Grid.Row>
                    </Grid>
                </Container>

                <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                  <Container textAlign='center'>
                    <Grid divided inverted stackable>
                      <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 1' />
                        <List link inverted>
                          <List.Item as='a'>Link One</List.Item>
                          <List.Item as='a'>Link Two</List.Item>
                          <List.Item as='a'>Link Three</List.Item>
                          <List.Item as='a'>Link Four</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 2' />
                        <List link inverted>
                          <List.Item as='a'>Link One</List.Item>
                          <List.Item as='a'>Link Two</List.Item>
                          <List.Item as='a'>Link Three</List.Item>
                          <List.Item as='a'>Link Four</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 3' />
                        <List link inverted>
                          <List.Item as='a'>Link One</List.Item>
                          <List.Item as='a'>Link Two</List.Item>
                          <List.Item as='a'>Link Three</List.Item>
                          <List.Item as='a'>Link Four</List.Item>
                        </List>
                      </Grid.Column>
                      <Grid.Column width={7}>
                        <Header inverted as='h4' content='Footer Header' />
                        <p>
                          Extra space for a call to action inside the footer that could help re-engage users.
                        </p>
                      </Grid.Column>
                    </Grid>

                    <Divider inverted section />
                    <Image centered size='mini' src='/logo.png' />
                    <List horizontal inverted divided link size='small'>
                      <List.Item as='a' href='#'>
                        Site Map
                      </List.Item>
                      <List.Item as='a' href='#'>
                        Contact Us
                      </List.Item>
                      <List.Item as='a' href='#'>
                        Terms and Conditions
                      </List.Item>
                      <List.Item as='a' href='#'>
                        Privacy Policy
                      </List.Item>
                    </List>
                  </Container>
                </Segment>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    weight: state.authReducer.weight
});

export default withRouter(connect(mapStateToProps, {})(HomepageView));