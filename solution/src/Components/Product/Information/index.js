import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./styles.css";

export default class Information extends Component {

    render() {
        return (
            <div className="informationRoot">
               <p className="title" > {this.props.title} </p>
               <p className="price" > ${this.props.price} </p>
               <p className="description" > {this.props.description} </p>
           </div>
        )
    }

}

Information.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string
}