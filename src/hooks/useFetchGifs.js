import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifts(category);
        setImages(newImages);
        setisLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);


  return {
    images,
    isLoading
  }
}

