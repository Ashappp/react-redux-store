import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetchPhones from '../../actions/actions'

class Phones extends Component {
    componentDidMount(){
        this.props.fetchPhones()
                        }
        render(){
            return(
                <div>
                    Phones
                </div>)
                }
}

const MDTP = {
    fetchPhones,
}

export default connect (null, MDTP)(Phones);