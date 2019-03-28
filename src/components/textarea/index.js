import React, { Component } from 'react'

class TextAreaTemplate extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      textarea: "",
      fetching: false,
    }
    this.fetchTemplate = this.fetchTemplate.bind(this)
  }
  componentDidMount(){
    {this.fetchTemplate(this.props.template_url)}
  }
  fetchTemplate(url) {
    let that = this
    if (url !== "") {
      that.setState({
        fetching:true
      })
      fetch(url)
        .then((r) => r.text())
        .then(text => {
          // the .html files contains "custom" variables which
          // we easily replace below.
          text = text.replace(/{image}/, this.props.product.image_original)
          text = text.replace(/{price}/, this.props.product.price)
          text = text.replace(/{before_price}/, this.props.product.before_price)
          text = text.replace(/{title}/, this.props.product.title)
          text = text.replace(/{description}/, this.props.product.description)
          text = text.replace(/{product_url}/, this.props.product.product_url)
          window.setTimeout(function (){
            that.setState({
              textarea:text,
              fetching: false
            })
          },100)
        })
    }
  }
  render() {
    if (this.state.fetching === false){
      return (
        <textarea
          rows={this.props.rows}
          placeholder={this.props.placeholder}
          className="form-control sourcecode"
          defaultValue={this.state.textarea}
        >
        </textarea>
      )
    } else {
      return (
        <div className="textareaPH">Fetching template...</div>
      )
    }
  }
}
export default TextAreaTemplate