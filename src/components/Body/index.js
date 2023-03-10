import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="Body-container">
          {showLeftNavbar ? (
            <div className="left-Navbar-container">
              <h1 className="left-Navbar-heading">Left Navbar Menu</h1>
              <ul className="left-navbar-style">
                <li>
                  <p className="left-navbar-para">Item 1</p>
                </li>
                <li>
                  <p className="left-navbar-para">Item 2</p>
                </li>
                <li>
                  <p className="left-navbar-para">Item 3</p>
                </li>
                <li>
                  <p className="left-navbar-para">Item 4</p>
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
          {showContent ? (
            <div className="Content-container">
              <h1 className="Content-heading">Context</h1>
              <p className="Content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmond tempor Incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : (
            ''
          )}
          {showRightNavbar ? (
            <div className="Right-Navbar-container">
              <h1 className="Right-Navbar-Heading">Right Navbar</h1>
              <ul className="Right-Navbar-List">
                <li>
                  <div className="Right-Navbar-Box">
                    <p className="Right-Navbar-para">Ad 1</p>
                  </div>
                </li>
                <li>
                  <div className="Right-Navbar-Box">
                    <p className="Right-Navbar-para">Ad 2</p>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
