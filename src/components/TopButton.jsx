import React from 'react'

function TopButton({setQuery}) {
    const cities = [
        {
            id: 1,
            city: 'London'
        },
        {
            id: 2,
            city: 'Sydney'
        },
        {
            id: 3,
            city: 'Tokyo'
        },
        {
            id: 4,
            city: 'Toronto'
        },
        {
            id: 5,
            city: 'Paris'
        }
    ]

    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <div key={city.id}>
                    <button className='text-white text-lg font-medium' onClick={()=>{setQuery(city.city)}}>{city.city}</button>
                </div>
            ))}
        </div>
    )
}

export default TopButton