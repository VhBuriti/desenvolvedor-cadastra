import React from "react";

interface CustomImageProps {
    width?: number;
    height?: number;
    src: string;
}

const CustomImage = ({width, height, src, ...props}: CustomImageProps) => {
    return (
        <img width={width} height={height} src={src} {...props} /> 
    )
}

export default CustomImage;