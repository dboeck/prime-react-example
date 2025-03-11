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
import {Galleria} from "primereact/galleria";
import {MySliderItem} from "./components/MySliderItem";
import {MySliderThumbnail} from "./components/MySliderThumbnail";
import {MySliderCaption} from "./components/MySliderCaption";
import {useMySlider} from "./hooks/useMySlider";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const MySlider = (): JSX.Element => {
    const {
        responsiveOptions,
        imageModels,
        visibleSlideCount
    } = useMySlider()

    return (
        <div className="card">
            <Galleria value={imageModels} responsiveOptions={responsiveOptions} numVisible={visibleSlideCount}
                      item={MySliderItem} thumbnail={MySliderThumbnail} caption={MySliderCaption} />
        </div>
    )
}
