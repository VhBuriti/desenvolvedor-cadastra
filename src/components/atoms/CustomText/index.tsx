import React, { ElementType } from "react";

interface CustomTextProps {
    tag: ElementType;
    text: string;
}

const CustomText = ({tag: Tag = "p", text}: CustomTextProps) => {
    return (
        <Tag>
            {text}
        </Tag>
    )
}

export default CustomText;