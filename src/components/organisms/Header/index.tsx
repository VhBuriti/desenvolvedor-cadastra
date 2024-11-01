import React from "react"
import CustomImage from "../../atoms/Image";
import { CompanyLogo, MiniCartIcon } from "../../../assets";
import './index.scss'

const Header = () => {

    return (
        <div className="header-container">
            <div data-header-inner-container>
                <div data-container-company-logo>
                    <CustomImage src={CompanyLogo} width={165.82} height={25}/>
                </div>
                <div data-container-minicart>
                    <CustomImage src={MiniCartIcon} width={20} height={23} />
                </div>
            </div>
        </div>
    )
}

export default Header