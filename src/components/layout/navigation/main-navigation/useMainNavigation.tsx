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
import {useNavigate} from "react-router";
import {MainNavigationLink} from "./MainNavigationItem";
import * as React from "react";

/**
 *
 */
export const useMainNavigation = () => {
    const navigate = useNavigate();
    const itemRenderer = (item) => (
        <MainNavigationLink item={item} key={item.id} />
    );

    const navigationItems = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                navigate('/');
            },
            template: itemRenderer
        },
        {
            label: 'My View',
            icon: 'pi pi-star',
            command: () => {
                navigate('/my-view');
            },
            template: itemRenderer
        },
    ]

    return {
        navigationItems,
    }
}
