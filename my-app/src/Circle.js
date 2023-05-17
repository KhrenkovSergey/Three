import React from 'react';
import element1 from './source/element/el_1.png'
import element2 from './source/element/el_2.png'
import element3 from './source/element/el_3.png'
import element4 from './source/element/el_4.png'
import element5 from './source/element/el_5.png'
import './circle.css';

const LABELS = ['Lifetime Comission', 'Instant Payouts','Powerful Retention Marketing', '24/7 Support', 'Amazing Bonuses for players']
const IMAGES = [element1,element2,element3,element4,element5 ]
// 'string_variable'
// {`string_${variable}`}

export const Circle = () => {
    return (
      <div className="Circle">
        <div className="CoolOne"></div>

        {LABELS.map((label, index) => {
          const modifiedIndex = index + 1
            return (
              <div className={`element_${modifiedIndex}`}>
                <img src={IMAGES[index]} className={`el_${modifiedIndex}_pic`} alt={`EL${modifiedIndex}`} />
                <p className={`el_${modifiedIndex}_text`}>{label}</p>
              </div> 
            )
          })}

        {/* <div className="element_1">
          <img src={element1} className="el_1_pic" alt="EL1" />
          <p className="el_1_text">Lifetime Comission</p>
        </div>
        <div className="element_2">
          <img src="source/element/el_2.png" className="el_2_pic" alt="EL2" />
          <p className="el_2_text">Instant Payouts</p>
        </div>
        <div className="element_3">
          <img src="source/element/el_3.png" className="el_3_pic" alt="EL3" />
          <p className="el_3_text">Powerful Retention Marketing</p>
        </div>
        <div className="element_4">
          <img src="source/element/el_4.png" className="el_4_pic" alt="EL4" />
          <p className="el_4_text">24/7 Support</p>
        </div>
        <div className="element_5">
          <img src="source/element/el_5.png" className="el_5_pic" alt="EL5" />
          <p className="el_5_text">Amazing Bonuses for players</p>
        </div> */}

        <img src="source/backgrounds/Rectangle_back.png" alt="background" className="Rectangle_back" />
      </div>
    );
  }