/*
 *  Copyright (c) 2025 TechDivision GmbH
 *  All rights reserved
 *
 *  This product includes proprietary software developed at TechDivision GmbH, Germany
 *  For more information see https://www.techdivision.com/
 *
 *  To obtain a valid license for using this software please contact us at
 *  license@techdivision.com
 *
 *  @author Dominik Böck <d.boeck@techdivision.com>
 */
import {JSX} from "react";
import * as React from 'react';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import {SlideModel} from "../types";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const MySliderItem = (item: SlideModel): JSX.Element => {
    return (
        <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    )
}
