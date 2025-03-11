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
import {useState} from "react";
import {StepModel} from "./types";
import {StepsSelectEvent} from "primereact/steps";

/**
 * Provides the logic for MySteps component
 */
export const useMySteps = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const stepModels: StepModel[] = [
    {
      label: 'Personal Info',
      content: 'Personal Info',
      image: 'step-0.png',
    },
    {
      label: 'Reservation',
      content: 'Reservation',
      image: 'step-1.png',
    },
    {
      label: 'Review',
      content: 'Review',
      image: 'step-2.png',
    }
  ];

  const selectedStepModel = stepModels[activeStepIndex];

  const selectStep = (event: StepsSelectEvent) => {
    setActiveStepIndex(event.index);
  }

  return {
    stepModels,
    activeStepIndex,
    selectStep,
    selectedStepModel
  };
};
