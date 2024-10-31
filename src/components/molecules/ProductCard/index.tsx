import React from "react"
import CustomText from "../../atoms/CustomText"
import CustomButton from "../../atoms/Button";
import CustomImage from "../../atoms/Image";

import './index.scss'

const ProductCard = ({price, name, image, installment}: ProductCardProps) => {
    return (
        <div className="product-card">
            <CustomImage data-product-image src={(image)}/>
            <CustomText data-product-title text={name} />
            <CustomText data-product-price text={price} />
            <CustomText data-product-installments text={installment}/>
            <CustomButton data-product-btn label="Comprar"/>
        </div>
    )
}

export default ProductCard;