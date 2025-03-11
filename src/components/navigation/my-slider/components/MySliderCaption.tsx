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
export const MySliderCaption = (item: SlideModel): JSX.Element => {
    return (
        <>
            <div className="text-xl mb-2 font-bold">{item.title}</div>
            <p className="text-white">{item.alt}</p>
        </>
    )
}
