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
import {useMySliderImages} from "./useMySliderImages";

/**
 * Provides the configuration for MySlider component
 */
export const useMySlider = () => {
  const { imageModels } = useMySliderImages();
  const visibleSlideCount = 5
  const responsiveOptions = [
    {
      breakpoint: '991px',
      numVisible: 4
    },
    {
      breakpoint: '767px',
      numVisible: 3
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ];

  return {
    responsiveOptions,
    imageModels,
    visibleSlideCount
  };
};
