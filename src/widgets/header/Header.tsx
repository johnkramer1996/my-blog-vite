import { Link } from 'react-router-dom'
import './Header.scss'
import { MAIN_MENU } from 'shared/lib/paths'

export const Header = () => {
  const menuItems = MAIN_MENU

  return (
    <header className='header'>
      <div className='container'>
        <ul>
          {menuItems.map((el, i) => {
            return (
              <li key={i}>
                <Link to={el.to}>{el.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
