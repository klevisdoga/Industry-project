import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.scss'

export default function HomePage() {

    const [smooth, setSmooth] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSmooth(true)
        }, 1800)
    }, []);


    return (
        <div className={`homepage ${smooth ? 'homepage--on' : ''}`}>
                <div className='homepage__text'>
                    <h1 className='homepage__text-title'>A luxury virtual shopping experience <br /> tailored to each customer</h1>
                    <Link to={'/ux-ui'} className='homepage__text-button'>Explore Now</Link>
            </div>
        </div>
    )
}
