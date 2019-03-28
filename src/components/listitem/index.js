import React, { Component } from 'react'
class ListItem extends Component {
    constructor(props) {
      super(props)
      this.props = props
    }
    render() {
      return (
        <option value={this.props.value}>{this.props.text}</option>
      )
    }
  }
  export default ListItem