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
import {Outlet, useNavigate} from "react-router";
import { NavLink, Link } from "react-router";
import {Badge} from "primereact/badge";
import {Menubar} from "primereact/menubar";
import {MainNavigationLink} from "./MainNavigationItem";
import {useMainNavigation} from "./useMainNavigation";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const MainNavigation = (): JSX.Element => {
    const {navigationItems} = useMainNavigation();
    return (
        <div className="card">
            <Menubar model={navigationItems}/>
        </div>
    )
}
