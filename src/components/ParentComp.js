import React, { useState } from 'react';
import Box from './Box'


function ParentComp() {
    const[weather, setWeather] = useState(()=> {});
    // function fetchWwather() {
        
    // const param = {
    //     "apiKey":"83196dd4eabe0bffb2e8f5f97f664233",
    //     'city': 'Denver'
    // };
        // try {
            // const res = await fetch(
            //     `https://api.openweathermap.org/data/2.5/weather?q=${param.city}&appid=${param.apiKey}&units=metrics`
            // );
            // const data = await res.json();
            // weather.data = data;
            // setWeather({
            //     'name': 'Denver',
            //     'temp': '50'
            // })
            // console.log('weather', weather);

        // } catch (error) {
        //     console.log('error', error);
        // }
        // .then(res => res.json())
        // .then(data => console.log('data', data))
    // }

    // fetchWwather();

    return (
        <>
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    margin: '0',
                    backgroundImage: `url('https:/source.unsplash.com/1920x1080/?landscape')`
                    }}
                >
                <Box weatherData = {weather} />
                {/* <Box /> */}
            </div>
        </>
    );
}

export default ParentComp;