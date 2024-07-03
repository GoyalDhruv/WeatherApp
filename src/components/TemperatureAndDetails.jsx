import React, { useEffect } from 'react'
import { GiSunrise, GiSunset } from 'react-icons/gi';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { FiWind } from 'react-icons/fi';
import { FaThermometerEmpty } from 'react-icons/fa';
import { BiSolidDropletHalf } from 'react-icons/bi';

function TemperatureAndDetails({ weather: { icon, details, temp, temp_min, temp_max, sunrise, sunset, speed, humidity
    , feels_like
},  units }) {

    const verticalDetials = [
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: 'Real Feel',
            value: `${units !== 'metric' ? feels_like.toFixed() : (feels_like - 273).toFixed()}°`
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: 'Humidity',
            value: `${humidity}%`
        },
        {
            id: 3,
            Icon: FiWind,
            title: 'Wind',
            value: `${speed} km/h`
        }
    ]

    const horizontalDetails = [
        {
            id: 1,
            Icon: GiSunrise,
            title: 'Sunrise',
            value: `${sunrise}`
        },
        {
            id: 2,
            Icon: GiSunset,
            title: 'Sunset',
            value: `${sunset}`
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: 'High',
            value: `${units !== 'metric' ? temp_max.toFixed() : (temp_max - 273).toFixed()}°`
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: 'Low',
            value: `${units !== 'metric' ? temp_min.toFixed() : (temp_min - 273).toFixed()}°`

        }
    ]

    return (
        <div className='text-white'>
            <div className='flex items-center text-cyan-300 justify-center py-6 text-xl'>
                <p>{details}
                </p>
            </div>

            <div className='flex flex-row items-center justify-between py-3'>
                <img src={icon} alt="icon" className='w-20' />

                <p className='text-5xl'>{
                    units !== 'metric' ? temp.toFixed() : (temp - 273).toFixed()
                }°</p>
                <div className='flex flex-col space-y-3 items-start'>
                    {
                        verticalDetials.map((details) => (
                            <div className='flex font-light items-center justify-center' key={details.id}>
                                <details.Icon size={18} className='mr-1' />
                                {details.title} <span className='font-medium ml-1'>{details.value}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-10 text-sn py-3">
                {
                    horizontalDetails.map((details) => (
                        <div className='flex flex-row items-center' key={details.id}>
                            <details.Icon size={30} className='mr-1' />
                            <p className='font-light ml-1'>    {details.title} <span className='font-medium ml-1'>{details.value}</span>
                            </p>
                        </div>
                    ))
                }

            </div>


        </div>
    )
}

export default TemperatureAndDetails