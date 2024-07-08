import classNames from 'classnames'
import LogoImage from './img/logo.svg?react'
import { Link } from 'react-router-dom'
import './Logo.scss'

type Props = {
  className?: string
}
export const Logo = (props: Props) => {
  return (
    <Link to={'/'} className={classNames('logo', props.className)}>
      <LogoImage className='logo__image' />
      <div className='logo__text'>
        my-blog<span>.ua</span>
      </div>
    </Link>
  )
}
