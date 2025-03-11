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
import {useEffect, useState} from "react";
import {SlideModel} from "../types";

/**
 * Provides the image data for MySliderImages component
 */
export const useMySliderImages = () => {
  const [imageModels, setImageModels] = useState(null);
  const imageMockModels: SlideModel[] = [
    {
      itemImageSrc: new URL('../assets/slide-image-1.png', import.meta.url).href,
      thumbnailImageSrc: new URL('../assets/slide-image-thumb-1.png', import.meta.url).href,
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      itemImageSrc: new URL('../assets/slide-image-2.png', import.meta.url).href,
      thumbnailImageSrc: new URL('../assets/slide-image-thumb-2.png', import.meta.url).href,
      alt: 'Description for Image 2',
      title: 'Title 2'
    },
    {
      itemImageSrc: new URL('../assets/slide-image-3.png', import.meta.url).href,
      thumbnailImageSrc: new URL('../assets/slide-image-thumb-3.png', import.meta.url).href,
      alt: 'Description for Image 3',
      title: 'Title 3'
    },
    {
      itemImageSrc: new URL('../assets/slide-image-4.png', import.meta.url).href,
      thumbnailImageSrc: new URL('../assets/slide-image-thumb-4.png', import.meta.url).href,
      alt: 'Description for Image 4',
      title: 'Title 4'
    },
    {
      itemImageSrc: new URL('../assets/slide-image-5.png', import.meta.url).href,
      thumbnailImageSrc: new URL('../assets/slide-image-thumb-5.png', import.meta.url).href,
      alt: 'Description for Image 5',
      title: 'Title 5'
    },
    {
      itemImageSrc: new URL('../assets/slide-image-6.png', import.meta.url).href,
      thumbnailImageSrc: new URL('../assets/slide-image-thumb-6.png', import.meta.url).href,
      alt: 'Description for Image 6',
      title: 'Title 6'
    },
    {
      itemImageSrc: new URL('../assets/slide-image-7.png', import.meta.url).href,
      thumbnailImageSrc: new URL('../assets/slide-image-thumb-7.png', import.meta.url).href,
      alt: 'Description for Image 7',
      title: 'Title 7'
    },
    {
      itemImageSrc: new URL('../assets/slide-image-8.png', import.meta.url).href,
      thumbnailImageSrc: new URL('../assets/slide-image-thumb-8.png', import.meta.url).href,
      alt: 'Description for Image 8',
      title: 'Title 8'
    }
  ];

  /**
   * Simulate fetching data from server
   */
  const fetchImageModelsFromServer = async () => {
    return imageMockModels;
  }
  /**
   * Simulate fetching data from server
   */
  useEffect(() => {
    fetchImageModelsFromServer().then(imageModelsFromServer => setImageModels(imageModelsFromServer));
    return () => { setImageModels(null) };
  }, [setImageModels]);

  return {
    imageModels,
  };
};
