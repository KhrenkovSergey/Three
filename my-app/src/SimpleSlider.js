
import { useState } from 'react'
import './sliders.css'

// const sum = (x, y) => {
//   return x + y
// }

// const result = sum(3, 4)

// const getArray = (x, y) => {
//   const array = [x, y]

//   const newArray = array.map((element) => { return element + 5 })
//   return newArray
// }

// const array = getArray(2, 3)

const SLIDERS_DATA = [
    {
      topText: 'QWERTYU',
      middleText: 'FTD 1-10 MONTH',
      sale: '40%',
      bottomText: 'FROM NGR'
    },
    {
      topText: 'QKJHGJHG',
      middleText: 'FTD 1-10 MONTH',
      sale: '45%',
      bottomText: 'FROM NGR'
    },
    {
      topText: 'JGJHGJLGK',
      middleText: 'FTD 1-10 MONTH',
      sale: '50%',
      bottomText: 'FROM NGR'
    },
  ]
  
  const Slide = ({ topText, middleText, sale, bottomText }) => {
    return (
      <div className="slide__1">
        <div className="S1__toptext">{topText}</div>
        <div className="S1__middletext">{middleText}</div>
        <div className="S1__sale">{sale}</div>
        <div className="S1__bottom__text">{bottomText}</div>
        <img src="source/element/Group 90.png" className="BTCstack" alt="Lots Of BTC" />
      </div>
    )
  }
  
  const BUTTON_DATA = [1, 2, 3]
  
  const BUTTON_DATA_1 = ['One', 'Two', 'Three']
  
   
  export const SimpleSlider = () => {
      const [slideIndex, setSlideIndex] = useState(0);
  
      return (
        <div>
          <div className="slider-container">
            {SLIDERS_DATA.map((element, index) => {
              return (
                slideIndex === index && <Slide
                  topText={element.topText}
                  bottomText={element.bottomText}
                  middleText={element.middleText}
                  sale={element.sale} />
              )
            })}
  
            {/* {(slideIndex === 0) && <Slide 
            middleText={SLIDERS_DATA[0].middleText}
            topText={SLIDERS_DATA[0].topText} 
            sale={SLIDERS_DATA[0].sale}
            bottomText={SLIDERS_DATA[0].bottomText}          
            />}
          {(slideIndex === 1) && <Slide 
            topText={SLIDERS_DATA[1].topText} 
            middleText={SLIDERS_DATA[1].middleText}
            sale={SLIDERS_DATA[1].sale}
            bottomText={SLIDERS_DATA[1].bottomText}          
            />}
          {(slideIndex === 2) && <Slide 
            topText={SLIDERS_DATA[2].topText} 
            middleText={SLIDERS_DATA[2].middleText}
            sale={SLIDERS_DATA[2].sale}
            bottomText={SLIDERS_DATA[2].bottomText}          
            />} */}
          </div>
  
          {/* <div className="buttons-container">
          {BUTTON_DATA}
          <button onClick={() => setSlideIndex(0)}>1</button>
          <button onClick={() => setSlideIndex(1)}>2</button>
          <button onClick={() => setSlideIndex(2)}>3</button>
        </div> */}
  
          {/* <div onClick={() => setSlideIndex(0)}>One</div>
          <div onClick={() => setSlideIndex(1)}>Two</div>
          <div onClick={() => setSlideIndex(2)}>Three</div> */}
  
        
        {/* [].map((element, index) => {}) */}
  
          <div className="buttons-container">
            {BUTTON_DATA.map((element, index) => {
              return (
                <button key={element} onClick={() => setSlideIndex(index)}>
                  {element}
                </button>
              )
            })} 
          </div> 
  
          <div className="buttons-cont">
            {BUTTON_DATA_1.map((element, index) => {
              return (
                <button key={element} onClick={() => setSlideIndex(index)}>
                  {element} 
                </button>
              )
            })}
  
          </div>
        </div>
      );
    }
  
   