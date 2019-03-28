import React, { Component } from 'react'
import * as toolbox from '../../toolbox'
import './index.less'


// This component is added with 3 params: visible:bool, image:url, callback:function
// where the function is to hide the modal so pass false and "" as image url.
// the component using this then have 100% flexibility to do whatever it needs to do.
class ImageModal extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.onClose = this.onClose.bind(this)
  }
  onClose() {
  }
  render() {
    if (this.props.visible) {
      return (
        <div className="imagemodal-container" onClick={(e) => this.props.callback(false, "")}>
          <div className="imagemodal-inner">
            <div className="row">
              <div className="pull-right">
                <i className="fa fa-times fa-2x"></i>
              </div>
            </div>
            <img className="imagemodal-image" src={this.props.image} />
          </div>
        </div>
      )
    }
    return (
      <span></span>
    )
  }
}
export default ImageModal