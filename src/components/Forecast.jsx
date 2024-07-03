import React from 'react'

function Forecast({title,data,units}) {

    return (
        <div className='text-white'>
            <div className='flex items-center
            justify-start mt-6'>
                <p className='font-medium
                uppercase'> {title}</p>
            </div>
            <hr className='my-1' />
            <div className="flex items-center
            justify-between">
                {
                    data.map((d, index) => (
                        <div key={index} className='flex flex-col 
                        items-center justify-center'>
                            <p className='font-light text-sm'>{d.title}</p>
                            <img src={d.icon} alt="icon" className='w-12 my-1' />
                            <p className='font-medium'>{`${units !== 'metric' ? d.temp.toFixed() : (d.temp - 273).toFixed()}°`}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default Forecast