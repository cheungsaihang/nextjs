"use client"

import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function HomeBanner(){
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
        >
            <div>
                <img src="https://fastly.picsum.photos/id/817/960/540.jpg?hmac=xXdsFxNvdhGDexWn6VFU0E1uKwvgLSJH8B1aYx9ycq0" />
            </div>
            <div>
                <img src="https://fastly.picsum.photos/id/251/960/540.jpg?hmac=m9JRBoEvbLeZJObC-JH1cKsGq5yAnC53DSGkmRTKE6o" />
            </div>
            <div>
                <img src="https://fastly.picsum.photos/id/766/960/540.jpg?hmac=AZXNg9Hri2c9Ah7ybIuHzsskAd2j7a75l7zWe4glIFE" />
            </div>
        </Carousel>
    );  
};