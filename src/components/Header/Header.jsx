import s from"./Header.module.css";
import LogoType from '../../img/frame.png';
import arrow from '../../img/Vector.svg';


export const Header = () => {
    return (
        <>
            <div className={s.container}>
                <div className={s.logo}>
                    <a href="/"><img src={LogoType} alt="" /></a>
                </div>
                <div className={s.nav}>
                    <ul>
                        <li><a href="/">Why Sprig?</a></li>
                        <li><a href="/">Product </a><img src={arrow} alt="" /></li>
                        <li><a href="/">Customers </a><img src={arrow} alt="" /></li>
                        <li><a href="/">Resources </a><img src={arrow} alt="" /></li>
                        <li><a href="/">Plans</a></li>
                    </ul>
                </div>
                <div className={s.info}>
                    <ul>
                        <li><a href="/" className={s.button1}>Sign In</a></li>
                        <li><a href="/" className={s.button2}>Talk to Sales</a></li>
                        <li><a href="/" className={s.button3}>Start for Free</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;