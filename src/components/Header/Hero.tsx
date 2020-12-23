import React, { ReactElement, useContext } from 'react';
import {
  HeroImage,
  SiteName,
  HeroOverlay,
  PreviewWave,
  PreviewParallax,
} from './styles';

import 'react-typed/dist/animatedCursor.css';

import { ThemeContext } from '../layout';
import Typed from 'react-typed';

// const poster =
//   "https://res.cloudinary.com/alerthumg/image/upload/v1596350402/laptrinhbanthan/images/poster_gsrl5q.jpg"
// const video =
//   "https://res.cloudinary.com/alerthumg/video/upload/v1596350262/laptrinhbanthan/videos/video_aswo0k.mp4"

const Hero = ({ strings }): ReactElement => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <HeroImage>
        {/* <HeroVideo className="hero__video"></HeroVideo> */}

        <SiteName align="center" variant="h2" component="h1">
          <Typed
            strings={strings}
            typeSpeed={50}
            backSpeed={50}
            smartBackspace
            backDelay={1}
          ></Typed>
        </SiteName>
        <HeroOverlay>
          <PreviewWave
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <PreviewParallax>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill={
                  theme === 'light'
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(0,0,0,0.7)'
                }
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill={
                  theme === 'light'
                    ? 'rgba(255,255,255,0.5)'
                    : 'rgba(0,0,0, 0.5)'
                }
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill={
                  theme === 'light'
                    ? 'rgba(255,255,255,0.3)'
                    : 'rgba(0,0,0, 0.3)'
                }
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="7"
                fill={theme === 'light' ? '#fafafa' : '#303030'}
              />
            </PreviewParallax>
          </PreviewWave>
        </HeroOverlay>
      </HeroImage>
    </>
  );
};

export default Hero;
