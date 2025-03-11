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
import { MySteps } from "../../components/navigation/my-steps";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const MyView = (): JSX.Element => {

    return (
        <>
            <h1>My Bert View</h1>
            <MySteps/>
        </>
    )
}
