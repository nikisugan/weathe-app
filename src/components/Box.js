import React, { useState, useEffect } from 'react';


const Box = (props) => {
    const [datas, setDatas] = useState({
        "city": '',
        "temp": 0
    })
    const [cityInput, setCityInput] = useState('Manila');
    useEffect(()=> {
        fetchWwather()
    },[]
    )
    const fetchWwather = async () => {
        const param = {
            "apiKey":"83196dd4eabe0bffb2e8f5f97f664233",
            'city': cityInput
        };
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param.city}&appid=${param.apiKey}&units=metric`
            );
            const data = await res.json();

            const city = data.name
            const { humidity,temp } = data.main
            const { description, icon } = data.weather[0]
            const { speed } = data.wind
            setDatasFunction({city,temp,humidity,speed,description,icon,speed});

        } catch (error) {
            console.log('error', error);
        }
    };
    const setDatasFunction = tempData => {
        setDatas(tempData);
    }

    return (
        <div>
            <div style={
                {
                    background: '#000000d0',
                    color:'white',
                    padding: '2em',
                    borderRadius:'30px',
                    width:'100%',
                    maxWidth:'420px',
                    margin:'1em',
                }
            }>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <input
                        placeholder='Search'
                        defaultValue={cityInput}
                        type='text'
                        onChange={event=> setCityInput(event.target.value)}
                        style={{
                            padding:'0.4em 1em',
                            borderRadius:'24px',
                            border:'none',
                            outline:'none',
                            backgroundColor:'#7c7c7c2b',
                            color:'white',
                            fontFamily:'inherit',
                            fontSize:'105%',
                            width:'calc(100% - 50px)',
                        }}
                    />
                    <button 
                        style={{
                        margin:'0.5em',
                        borderRadius:'45%',
                        border:'none',
                        width:'44px',
                        height:'44px',
                        outline:'none',
                        backgroundColor:'#7c7c7c2b',
                        color:'white',
                        cursor:'pointer',
                        transition:'0.2s ease-in-out',
                        }}
                        onClick={fetchWwather}
                    >
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1.5em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path></svg>
                    </button>
                </div>
                <div className="weather">
                    <h4 className="city"> Weather in {datas.city}</h4>
                    <h1 className='temp'> {datas.temp}°C </h1>
                    <img src={`https://openweathermap.org/img/wn/${datas.icon}.png`} alt='' className='icon'/>
                    <div className='description'></div>
                    <div className='humidity'>Humidity: {datas.humidity}</div>
                    <div className='wind'>Wind speed: {datas.speed} km/h</div>
                </div>
            </div>
        </div>
    );
}

export default Box;