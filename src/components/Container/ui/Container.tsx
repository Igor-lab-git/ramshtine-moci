import { JSX, ReactNode } from "react";
import style from './style.module.scss'

interface IUser {
    children: ReactNode
}

export const Container = ({children}: IUser): JSX.Element => {


  return (
    <div className={style.userWrapper}>
        {children}
    </div>
  )
}
