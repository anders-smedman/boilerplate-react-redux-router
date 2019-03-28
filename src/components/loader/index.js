import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as toolbox from '../../toolbox'
import './index.less'

 class PageLoader extends Component{
     constructor(props){
        super(props)
        this.props = props
     }
     render() {
         if(this.props.visible){
             return (
                 <div className="loader-container">
                    <div className="loader-inner">
                        <div className="loader-spinner">
                            <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i> 
                        </div>
                    </div>
                 </div>
             )
         }
         return (
             <span></span>
         )
     }
}
export default PageLoader