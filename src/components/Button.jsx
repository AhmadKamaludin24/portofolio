import React from 'react'
import ButtonSvg from '../assets/svg/ButtonSvg.jsx'
const Button = ({className, children, px, white, href, onClick}) => {
    const classes = `button relative inline-flex justify-center items-center h-11 ${px || "px-7"} ${white ? 'text-n-8' : 'text-n-1'} ${className || ""}`
    const renderButton = ()=>(
        <button className={classes} onClick={onClick}>
            <span>{children}</span>
            {ButtonSvg(white)}
        </button>
    )

    const spanClasses = `relative z-10`

    const renderLink = ()=>(
        <a className={classes} href={href}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </a>
    )

  return href ? renderLink() : renderButton()
}
export default Button