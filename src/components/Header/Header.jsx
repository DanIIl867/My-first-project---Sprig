import s from "./Header.module.css";
import LogoType from '../../img/frame.png';

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
                        <li>
                            <button>
                                Product
                                <span className={s.arrow}></span> {/* Стрелочка */}
                            </button>
                            <ul>
                                <li><a href="/">Product1</a></li>
                                <li><a href="/">Product2</a></li>
                                <li><a href="/">Product3</a></li>
                                <li><a href="/">Product4</a></li>
                                <li><a href="/">Product5</a></li>
                            </ul>
                        </li>
                        <li>
                            <button>
                                Customers
                                <span className={s.arrow}></span> {/* Стрелочка */}
                            </button>
                            <ul>
                                <li><a href="/">Customers1</a></li>
                                <li><a href="/">Customers2</a></li>
                                <li><a href="/">Customers3</a></li>
                                <li><a href="/">Customers4</a></li>
                                <li><a href="/">Customers5</a></li>
                            </ul>
                        </li>
                        <li>
                            <button>
                                Resources
                                <span className={s.arrow}></span> {/* Стрелочка */}
                            </button>
                            <ul>
                                <li><a href="/">Resources1</a></li>
                                <li><a href="/">Resources2</a></li>
                                <li><a href="/">Resources3</a></li>
                                <li><a href="/">Resources4</a></li>
                                <li><a href="/">Resources5</a></li>
                            </ul>
                        </li>
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
