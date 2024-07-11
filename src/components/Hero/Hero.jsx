import s from "./Hero.module.css"
import heroImg from '../../img/IMAGE.png';
import backgroundImg from '../../img/Frame1.png';

export const Hero = () => {
    return(
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.textContent}>
                    <div className={s.titleText}>
                        <h1>
                            In-context user research that's fast and reliable.
                        </h1>
                    </div>
                    <div className={s.subText}>
                        <p>
                            Ensure user research happens early and often with Sprig's targeted microsurveys,
                            video questions, and more.
                        </p>
                    </div>
                    <div className={s.buttons}>
                        <a href="/" className={s.btn1}>Start for Free</a>
                        <a href="/" className={s.btn2}>Talk to Sales</a>
                    </div>
                </div>
                <div className={s.heroImage}>
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <div className={s.backgroundImage}>
                <img src={backgroundImg} alt="" />
            </div>
        </div>
    )
}

export default Hero;