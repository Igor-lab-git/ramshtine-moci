import { JSX } from "react"
import { Link } from "react-router-dom";
import style from './style.module.scss'



export const Header = (): JSX.Element => {
  return (
    <div className={style.wrapperHeader}>
        <nav>
            <ul className={style.list}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Cart'>Cart</Link></li>
            </ul>
        </nav>
    </div>
  )
}
