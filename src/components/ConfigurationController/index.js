import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeToggleShowContent = () => {
        onToggleShowContent()
      }
      const onChangeToggleShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }
      const onChangeToggleShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="ConfigurationController-container">
          <h1 className="ConfigurationController-heading">Layout</h1>
          <ul className="checkboxes-list">
            <li className="list-item">
              <input
                type="checkbox"
                className="check-box-style"
                id="checkbox1"
                onChange={onChangeToggleShowContent}
              />
              <label className="label-para" htmlFor="checkbox1">
                Content
              </label>
            </li>
            <li className="list-item">
              <input
                type="checkbox"
                className="check-box-style"
                id="checkbox2"
                onChange={onChangeToggleShowLeftNavbar}
              />
              <label className="label-para" htmlFor="checkbox2">
                Left Navbar
              </label>
            </li>
            <li className="list-item">
              <input
                type="checkbox"
                className="check-box-style"
                id="checkbox3"
                onChange={onChangeToggleShowRightNavbar}
              />
              <label className="label-para" htmlFor="checkbox3">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
