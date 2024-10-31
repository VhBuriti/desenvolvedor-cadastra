import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const CustomButton = ({label, ...props}: ButtonProps) => {
    return (
        <button className="custom-button" {...props}>{label}</button>
    )
}

export default CustomButton;