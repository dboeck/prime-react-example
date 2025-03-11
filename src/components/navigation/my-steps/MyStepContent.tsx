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
import * as React from 'react';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import {Card} from "primereact/card";
import {StepModel} from "./types";

/**
 *
 * @param stepModel
 * @constructor
 */
export const MyStepContent = ({ stepModel }: { stepModel: StepModel }) => {
    const imageUrl = new URL(`./assets/${stepModel.image}`, import.meta.url).href;
    return (
        <Card className="mt-4">
            <h3>{stepModel.label}</h3>
            <p>{stepModel.content}</p>
            <img src={imageUrl} height={500} alt={stepModel.label}/>
        </Card>
    );
}
