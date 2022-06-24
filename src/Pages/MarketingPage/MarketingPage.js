import React, {useRef} from 'react'
import './MarketingPage.scss'
import one from '../../Assets/Images/Slides/1.jpg'
import two from '../../Assets/Images/Slides/2.jpg'
import three from '../../Assets/Images/Slides/3.jpg'
import four from '../../Assets/Images/Slides/4.jpg'
import five from '../../Assets/Images/Slides/5.jpg'
import six from '../../Assets/Images/Slides/6.jpg'
import seven from '../../Assets/Images/Slides/7.jpg'
import eight from '../../Assets/Images/Slides/8.jpg'
import nine from '../../Assets/Images/Slides/9.jpg'
import ten from '../../Assets/Images/Slides/10.jpg'
import eleven from '../../Assets/Images/Slides/11.jpg'
import twelve from '../../Assets/Images/Slides/12.jpg'
import thirteen from '../../Assets/Images/Slides/13.jpg'
import fourteen from '../../Assets/Images/Slides/14.jpg'

export default function MarketingPage() {

  const scroller = useRef(null)

  const scrollHandler = (scrollOffset) => {
    scroller.current.scrollLeft += scrollOffset
  }

  return (
    <div className='marketing'>
      <div className='marketing__slide-container' ref={scroller}>
        <button className='marketing__slide--left' onClick={() => scrollHandler(-358)}>LEFT</button>
        <img src={one} alt='slide' className='marketing__slide'/>
        <img src={two} alt='slide' className='marketing__slide'/>
        <img src={three} alt='slide' className='marketing__slide'/>
        <img src={four} alt='slide' className='marketing__slide'/>
        <img src={five} alt='slide' className='marketing__slide'/>
        <img src={six} alt='slide' className='marketing__slide'/>
        <img src={seven} alt='slide' className='marketing__slide'/>
        <img src={eight} alt='slide' className='marketing__slide'/>
        <img src={nine} alt='slide' className='marketing__slide'/>
        <img src={ten} alt='slide' className='marketing__slide'/>
        <img src={eleven} alt='slide' className='marketing__slide'/>
        <img src={twelve} alt='slide' className='marketing__slide'/>
        <img src={thirteen} alt='slide' className='marketing__slide'/>
        <img src={fourteen} alt='slide' className='marketing__slide'/>
        <button className='marketing__slide--right' onClick={() => scrollHandler(358)}>RIGHT</button>
      </div>
    </div>
  )
}
