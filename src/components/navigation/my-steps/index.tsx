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
import { Steps } from 'primereact/steps';
import { useMySteps } from "./useMySteps.js";
import {MyStepContent} from "./MyStepContent.js";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const MySteps = (): JSX.Element => {
    const {
        stepModels,
        activeStepIndex,
        selectStep,
        selectedStepModel
    } = useMySteps();

    return (
        <div className="card">
            <Steps model={stepModels} activeIndex={activeStepIndex} onSelect={selectStep} readOnly={false} />
            <MyStepContent stepModel={selectedStepModel}/>
        </div>
    )
}
