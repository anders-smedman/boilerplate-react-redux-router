import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import i18next from 'i18next'
import { dummy } from '../../actions/dummy'
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './index.less'

class App extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount(){
    setTimeout(() => {
      console.log("some timeout to wait then trigger dispatch dummy.")
      this.props.dispatch(dummy())
    }, 3000);
  }
  render() {
    if (this.props.dummy.started === false){
      return (
        <p>dummy is false, starting up, 
          just 3sec timeout then dispatch 
          dummy() action that will trigger 
          reducer dummy</p>
      )
    }
      return (
        <Grid fluid>
          <Row>
            <Col xs={12} md={6}>
              <h1>{ i18next.t('Hello World')}</h1>
            </Col>
            <Col xs={12} md={6}>
              col xs12 and md6
            </Col>
          </Row>
        </Grid>
      )
  }
}

const mapStateToProps = state => ({
  dummy: state.dummy,
});

export default connect(mapStateToProps)(withRouter(App))