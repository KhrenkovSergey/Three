import './header.css'

const HEADER_DATA = ['ABOUT', 'DEALS', 'FAQ', 'CONTACTS', 'PARTNERS']

export const Header = ({ setShowWindow }) => {
    return (
        <div className="wrapper">
        <div className="header__logo"></div>
        <div className="menu_logo_tablet">
          <div className="header_menu_tablet"></div>
          <div className="header_logo_tablet"></div>
        </div>
        <div class="header__menu">
            {HEADER_DATA.map((element) => (
                <a href='#' className='menu__link' key={element} >
                  {element} 
                </a>
              )
            )}
  
          {/* <a href="" className="menu__link">ABOUT</a>
          <a href="" className="menu__link">DEALS</a>
          <a href="" className="menu__link">FAQ</a>
          <a href="" className="menu__link">CONTACTS</a>
          <a href="" className="menu__link">PARTNERS</a> */}
        </div>
        <div className="header__button" onClick={() => setShowWindow(true)}></div>
        <div className="header_button_tablet"></div>
    </div >
    )
  }