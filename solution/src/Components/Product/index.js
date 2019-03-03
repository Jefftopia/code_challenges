import React, { Component } from 'react';
import "./styles.css";
import ImageSelector from './ImageSelector';
import Information from './Information';
import TypeSelector from './TypeSelector';
import moment from 'moment';

import goldA from "../../assets/gold_a.jpg";
import goldB from "../../assets/gold_b.jpg";
import goldC from "../../assets/gold_c.jpg";
import greyA from "../../assets/grey_a.jpg";
import greyB from "../../assets/grey_b.jpg";
import greyC from "../../assets/grey_c.jpg";

import productDetails from '../../product_details.json';

import { Link } from "react-router-dom";


export default class Product extends Component {

    constructor() {
        super();
        this.details = this.fetchProductDetails();
        this.state = {
            currentVariant: this.details.variants[0]
        };
        
    }
    
    
    fetchImages = () => {
        switch(this.state.currentVariant.color.name) {
            case "Gold":
                return [
                    goldA, goldB, goldC
                ]
            case "Grey":
                return [
                    greyA, greyB, greyC
                ]
            default:
                return "how'd ya get here"
        } 
    }

    // Where the AJAX call would go for live data
    fetchProductDetails = () => {
        return productDetails;
    }

    dateString = (timeStamp) => {
        const date = moment(timeStamp);
        return date.format('dddd, MMMM Do');
    }

    render() {
        const dateString = this.dateString(this.state.currentVariant.availabilityDate)
        const isBackordered = this.state.currentVariant.status === "BACKORDERED";
        return (
            <div className="productRoot" >
                
                <ImageSelector 
                    className="leftHalf"
                    images={this.fetchImages()} />

                <div className="rightHalf" >
                    <Information
                        className="information"
                        title={this.details.details.title}
                        description={this.details.description} 
                        price={this.state.currentVariant.price.toFixed(2).toString()}
                        />

                    <TypeSelector
                        className="typeSelector"
                        variants={this.details.variants}
                        update={(newVariant) => {
                            this.setState({currentVariant: newVariant});
                        }}
                    />
                    <div className="bottomPart">
                        <p className="date">
                            Get it by {dateString}
                        </p>

                        <button className={isBackordered ? "backordered" : 'addToCart'} >
                            {isBackordered ? "Not Available" : "Add To Cart"}
                        </button>
                        <Link to="/reviews" >
                            <button className="reviewButton">
                                Reviews
                            </button>
                        </Link> 
                    </div>
                </div>
                        
           </div>
        )
    }

}