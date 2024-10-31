import React, { ElementType } from "react";

interface CustomTextProps {
    tag?: ElementType;
    text: string;
}

const CustomText = ({tag: Tag = "p", text, ...props}: CustomTextProps) => {
    return (
        <Tag className="custom-text" {...props}> 
            {text}
        </Tag>
    )
}

export default CustomText;