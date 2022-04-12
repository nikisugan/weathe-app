import React, { useState }from 'react';
import Box from './Box'


function ParentComp() {
    const weather = {};
    const [backgroundImage, setackgroundImage] = useState('https:/source.unsplash.com/1920x1080/?landscape')

    return (
        <>
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    margin: '0',
                    backgroundImage: `url('${backgroundImage}')`
                    }}
                >
                <Box weatherData = {weather} />
                {/* <Box /> */}
            </div>
        </>
    );
}

export default ParentComp;