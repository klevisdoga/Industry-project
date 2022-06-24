import React, { useState } from 'react'
import './UXPage.scss'
import outerwear from '../../Assets/Images/Group.png'
import sweatshirt from '../../Assets/Images/Vector.png'
import boots from '../../Assets/Images/Group-1.png'
import hats from '../../Assets/Images/Group-2.png'
import gloves from '../../Assets/Images/Group-3.png'
import cancel from '../../Assets/Images/shape.png'
import { Link } from 'react-router-dom';

export default function UXPage() {

  const [selected, setSelected] = useState(false);
  const [outerWear, setOuterWear] = useState(false);
  const [sweatShirt, setSweatShirt] = useState(false);
  const [Boots, setBoots] = useState(false);
  const [Hats, setHats] = useState(false);
  const [Gloves, setGloves] = useState(false);
  const [nextOne, setNextOne] = useState(false)
  const [everyday, setEveryday] = useState(false)
  const [hiking, setHiking] = useState(false)
  const [trekking, setTrekking] = useState(false)
  const [skiing, setSkiing] = useState(false)
  const [nextTwo, setNextTwo] = useState(false)
  const [white, setWhite] = useState(false)
  const [black, setBlack] = useState(false)
  const [red, setRed] = useState(false)
  const [limestone, setLimestone] = useState(false)
  const [nextThree, setNextThree] = useState(false)
  const [USFive, setUSFive] = useState(false)
  const [USSix, setUSSix] = useState(false)
  const [USSeven, setUSSeven] = useState(false)
  const [USEight, setUSEight] = useState(false)
  const [USNine, setUSNine] = useState(false)
  const [USTen, setUSTen] = useState(false)
  const [nextFour, setNextFour] = useState(false)

  const handleSelect = () => {
    setSelected(true)
  }
  const handleOuterWear = () => {
    setOuterWear(true)
  }
  const handleSweatShirt = () => {
    setSweatShirt(true)
  }
  const handleBoots = () => {
    setBoots(true)
  }
  const handleHats = () => {
    setHats(true)
  }
  const handleGloves = () => {
    setGloves(true)
  }
  const handleNextOne = () => {
    setNextOne(true)
    setSelected(false)
  }
  const handleEveryday = () => {
    setEveryday(true)
  }
  const handleHiking = () => {
    setHiking(true)
  }
  const handleTrekking = () => {
    setTrekking(true)
  }
  const handleSkiing = () => {
    setSkiing(true)
  }
  const handleNextTwo = () => {
    setNextOne(false)
    setNextTwo(true)
    setSelected(false)
  }
  const handleWhite = () => {
    setWhite(true)
  }
  const handleBlack = () => {
    setBlack(true)
  }
  const handleRed = () => {
    setRed(true)
  }
  const handleLimestone = () => {
    setLimestone(true)
  }
  const handleNextThree = () => {
    setNextOne(false)
    setNextTwo(false)
    setNextThree(true)
    setSelected(false)
  }
  const handleSizeOne = () => {
    setUSFive(true)
  }
  const handleSizeTwo = () => {
    setUSSix(true)
  }
  const handleSizeThree = () => {
    setUSSeven(true)
  }
  const handleSizeFour = () => {
    setUSEight(true)
  }
  const handleSizeFive = () => {
    setUSNine(true)
  }
  const handleSizeSix = () => {
    setUSTen(true)
  }
  const handleNextFour = () => {
    setNextFour(true)
    setSelected(false)
    setNextOne(false)
    setNextTwo(false)
    setNextThree(false)
  }

  if (!selected && !nextOne && !nextTwo && !nextThree && !nextFour) {
    return (
      <div className='ux'>
        <div className='ux__text'>
          <h1 className='ux__text-title'>Welcome? <br /> How can we help you today?</h1>
        </div>
        <div className='ux__selections'>

          <div onClick={handleSelect} className='ux__selections-one'>
            <span className='us__selection-span'>I'm looking for <br /> something specific</span>
          </div>

          <div className='ux__selections-two'>
            <span className='us__Selection-span'>I'm just browsing</span>
          </div>

        </div>
      </div>
    )
  } else if (selected) {
    return (
      <div className='ux'>
        <Link to={'/'}><img src={cancel} alt='cancel button' className='ux__cancel-button' /></Link>

        <div className='ux__container'>
          <span className='ux__container-title'>What are you looking <br /> for?</span>

          <div className='ux__options'>
            <div onClick={handleOuterWear} className={`ux__options-one ${outerWear ? 'ux__options-one--active' : ''}`}>
              <img src={outerwear} alt='flanel shirt' className='ux__options-one-image' />
              <span className='ux__options-one-text'>Outerwear</span>
            </div>
            <div onClick={handleSweatShirt} className={`ux__options-one ${sweatShirt ? 'ux__options-two--active' : ''}`}>
              <img src={sweatshirt} alt='sweatshirt' className='ux__options-one-image' />
              <span className='ux__options-one-text'>Sweatshirts</span>
            </div>
            <div onClick={handleBoots} className={`ux__options-one ${Boots ? 'ux__options-three--active' : ''}`}>
              <img src={boots} alt='a single boot' className='ux__options-one-image ux__options-one-image--boots' />
              <span className='ux__options-one-text'>Boots</span>
            </div>
            <div onClick={handleHats} className={`ux__options-one ${Hats ? 'ux__options-four--active' : ''}`}>
              <img src={hats} alt='a hat' className='ux__options-one-image' />
              <span className='ux__options-one-text'>Hats</span>
            </div>
            <div onClick={handleGloves} className={`ux__options-one ${Gloves ? 'ux__options-five--active' : ''}`}>
              <img src={gloves} alt='glove' className='ux__options-one-image ux__options-one-image--gloves' />
              <span className='ux__options-one-text'>Gloves</span>
            </div>
          </div>
          <button onClick={handleNextOne} className={`ux__container-button ${outerWear || sweatShirt || Boots || Hats || Gloves ? 'ux__container-button--active' : ''}`}>Next</button>
        </div>
      </div>
    )
  } else if (!selected && nextOne) {
    return (
      <div className='ux'>
        <Link to={'/'}><img src={cancel} alt='cancel button' className='ux__cancel-button' /></Link>
        <div className='ux__container'>
          <span className='ux__container-title'>What will you be using <br /> the boots for?</span>
          <div className='ux__options-two'>
            <div onClick={handleEveryday} className={`ux__options-two-box ${everyday ? 'ux__options-two-box--everyday' : ''}`}>
              <h3 className='ux__options-two--title'>Everyday Use</h3>
            </div>
            <div onClick={handleHiking} className={`ux__options-two-box ${hiking ? 'ux__options-two-box--hiking' : ''}`}>
              <h3 className='ux__options-two--title'>Hiking</h3>
            </div>
            <div onClick={handleTrekking} className={`ux__options-two-box ${trekking ? 'ux__options-two-box--trekking' : ''}`}>
              <h3 className='ux__options-two--title'>Trekking</h3>
            </div>
            <div onClick={handleSkiing} className={`ux__options-two-box ${skiing ? 'ux__options-two-box--skiing' : ''}`}>
              <h3 className='ux__options-two--title'>Skiing</h3>
            </div>
          </div>
          <button onClick={handleNextTwo} className={`ux__container-button ${everyday || hiking || trekking || skiing ? 'ux__container-button--active' : ''}`}>Next</button>
        </div>
      </div>
    )
  } else if (!selected && !nextOne && nextTwo) {
    return (
      <div className='ux'>
        <Link to={'/'}><img src={cancel} alt='cancel button' className='ux__cancel-button' /></Link>
        <div className='ux__container'>
          <span className='ux__container-title'>What colour(s) do you <br /> prefer?</span>
          <div className='ux__options'>
            <div onClick={handleWhite} className={`ux__options-one ${white ? 'ux__options-one--active' : ''}`}>
              <div className='ux__options-three--image'></div>
              <span className='ux__options-one-text'>White</span>
            </div>
            <div onClick={handleBlack} className={`ux__options-one ${black ? 'ux__options-one--active' : ''}`}>
              <div className='ux__options-three--image-two'></div>
              <span className='ux__options-one-text'>Black</span>
            </div>
            <div onClick={handleRed} className={`ux__options-one ${red ? 'ux__options-one--active' : ''}`}>
              <div className='ux__options-three--image-three'></div>
              <span className='ux__options-one-text'>Red</span>
            </div>
            <div onClick={handleLimestone} className={`ux__options-one ${limestone ? 'ux__options-one--active' : ''}`}>
              <div className='ux__options-three--image-four'></div>
              <span className='ux__options-one-text'>Limestone</span>
            </div>
          </div>
          <button onClick={handleNextThree} className={`ux__container-button ${white || black || red || limestone ? 'ux__container-button--active' : ''}`}>Next</button>
        </div>
      </div>
    )
  } else if (!selected && !nextOne && !nextTwo && nextThree) {
    return (
      <div className='ux'>
        <Link to={'/'}><img src={cancel} alt='cancel button' className='ux__cancel-button' /></Link>

        <div className='ux__container'>
          <span className='ux__container-title'>What's your shoe <br /> size?</span>

          <div className='ux__options'>
            <div onClick={handleSizeOne} className={`ux__options-three ${USFive ? 'ux__options-three--five' : ''}`}>
              <span className='ux__options-three-text'>US 5</span>
            </div>
            <div onClick={handleSizeTwo} className={`ux__options-three ${USSix ? 'ux__options-three--six' : ''}`}>
              <span className='ux__options-three-text'>US 6</span>
            </div>
            <div onClick={handleSizeThree} className={`ux__options-three ${USSeven ? 'ux__options-three--seven' : ''}`}>
              <span className='ux__options-three-text'>US 7</span>
            </div>
            <div onClick={handleSizeFour} className={`ux__options-three ${USEight ? 'ux__options-three--eight' : ''}`}>
              <span className='ux__options-three-text'>US 8</span>
            </div>
            <div onClick={handleSizeFive} className={`ux__options-three ${USNine ? 'ux__options-three--nine' : ''}`}>
              <span className='ux__options-three-text'>US 9</span>
            </div>
            <div onClick={handleSizeSix} className={`ux__options-three ${USTen ? 'ux__options-three--ten' : ''}`}>
              <span className='ux__options-three-text'>US 10</span>
            </div>
          </div>
          <button onClick={handleNextFour} className={`ux__container-button ${USFive || USSix || USSix || USSeven || USEight || USNine || USTen ? 'ux__container-button--active' : ''}`}>Next</button>
        </div>
      </div>
    )
  } else if (!selected && !nextOne && !nextTwo && !nextThree && nextFour) {
    return (
      <div className='ux'>
        <div className='ux__selections'>

          <div className='ux__selections-one'>
            <a rel='noreferrer' target={'_blank'} className='ux__selections-redirect' href='https://www.figma.com/proto/HzA22vzaXU3iwbBc9jvfih/Industry-Day-(Canada-Goose)?page-id=18%3A2&node-id=51%3A868&viewport=-17%2C406%2C0.35&scaling=scale-down&starting-point-node-id=17%3A6'><span className='us__selection-span'>Go to prototype</span></a>
          </div>

          <div className='ux__selections-two'>
            <Link to={'/'} className='ux__selections-redirect'><span className='us__Selection-span'>Exit</span></Link>
          </div>

        </div>
      </div>

    )
  }

}
