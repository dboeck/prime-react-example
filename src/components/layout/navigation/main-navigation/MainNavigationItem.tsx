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

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const MainNavigationLink = ({item}): JSX.Element => {
    return (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon}/>
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge}/>}
            {item.shortcut && <span
                className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    )
}
