import React, { useState, useEffect }from 'react';
import Box from './Box'


function ParentComp() {
    const weather = {};
    const [imageNumber, setImageNumber] = useState('https:/source.unsplash.com/1920x1080/?landscape')
    useEffect(()=> {
        // getRandomInt()
        setImageNumber(getRandomInt())
        console.log('hey', getRandomInt())
        },[]
    )
    function getRandomInt() {
        const min = Math.ceil(1);
        const max = Math.floor(13);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
    return (
        <>
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    margin: '0',
                    backgroundImage: `url('./img/${imageNumber}.png')`
                    }}
                >
                <Box weatherData = {weather} />
                {/* <Box /> */}
            </div>
        </>
    );
}

export default ParentComp;