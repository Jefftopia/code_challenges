import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "./styles.css";

export default class TypeSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentVariant: props.variants[0]
        }
        // Make a set of the possible colors
        this.possibleColors = [ ...new Set(props.variants.map(variant => variant.color.hex))];
        this.state.possibleSizes = this.possibleSizes(this.state.currentVariant);
    }

    possibleSizes = (currentVariant) => {
        const variants = this.props.variants;
        // Filter out any variants that are a different color
        const filteredVariants = variants.filter(variant => variant.color.hex === currentVariant.color.hex);
        // Make a set of the possible sizes of this variant class
        return [...new Set(filteredVariants.map(variant => variant.size))]
    }

    // One function for updating color or size as they have to do the same thing
    handleChange(
        newColor=this.state.currentVariant.color.hex, 
        newSize=this.state.currentVariant.size) {
        // Get the variant defined by the newSize and newColor
        const newVariant = this.props.variants.find(variant => {
            return variant.color.hex === newColor && variant.size === newSize;
            // If none of the variants match, then fall back to the first variant with the matching color
            // Handles the case of switching colors, and at the time of switching a size is selected
            // that is not available on the color being switched to
        })  || this.props.variants.find(variant => variant.color.hex === newColor);
        // Update the variant in the parent
        this.props.update(newVariant);
        this.setState({
            currentVariant: newVariant,
            possibleSizes: this.possibleSizes(newVariant) // Recalculate the possible sizes as different
                                                          // colors can have different possible sizes
        });
    }

    renderColorSelectors = () => {
        return this.possibleColors.map(color => {
            let style = {
                marginLeft: "5%",
                height: "60%",
                width: "7%",
                borderRadius: "50%",
                borderWidth: "1px",
                backgroundColor: "#" + color
            }
            style.borderColor = this.state.currentVariant.color.hex === color ? "black": "transparent";
            const colorCopy = color;
            return (
                <button
                    key={color}
                    style={style}
                    onClick={() => {
                        this.handleChange(colorCopy); // leave out size param
                    }}
                />
            )
        })
    }

    renderSizeSelectors = () => {
        return this.state.possibleSizes.map(size => {
            const className = this.state.currentVariant.size === size ? "selectedSize": "notSelectedSize";
            const sizeCopy = size;
            return (
                <button
                    key={sizeCopy}
                    className={className}
                    onClick={() => {
                        this.handleChange(undefined, sizeCopy); // leave out color param
                    }}
                >
                    {sizeCopy}
                </button>
            )
        })
    }

    render() {
        const colorSelectors = this.renderColorSelectors();
        const sizeSelectors = this.renderSizeSelectors();
        return (
           <div className="typeSelectorRoot" >
               
               <div className="colorSelectorRoot" >
                   Color: {colorSelectors}
               </div>

               <div className="sizeSelectorRoot" >
                    {sizeSelectors}
               </div>

           </div> 
        )
    }

}

TypeSelector.propTypes = {
    variants: PropTypes.array,
    update: PropTypes.func
}