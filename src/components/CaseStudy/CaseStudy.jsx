import s from "./CaseStudy.module.css";
import backImg from "../../img/Vector(1).png";
import ava from "../../img/IMAGE (20).png";


export const CaseStudy = () => {
    return(
        <div className={s.section}>
            <div className={s.container}>
                <div className={s.caseOne}>
                    <div className={s.content}>
                        <div className={s.headingText}>
                            <div className={s.subtitle}>
                                <h5>CASE STUDY</h5>
                            </div>
                            <div className={s.heading}>
                                <h3>Trusted by the world's most customer-centric teams</h3>
                            </div>
                        </div>
                        <div className={s.paragraph}>
                            <p>Sprig helps product and research teams ensure user insights fuel every product decision.</p>
                        </div>
                        <div className={s.link}>
                            <a href="/">Read More</a>
                        </div>
                    </div>
                </div>

                <div className={s.caseTwo}>
                    <div className={s.content}>
                        <div className={s.backgroundImage}>
                            <img src={backImg} alt="" />
                        </div>
                        <div className={s.profileContent}>
                            <div className={s.text}>
                                <h2>Sprig helps us collect insights easier, faster,
                                    and more accurately than any other tool on the market,
                                    which allows us to build a better product for our users and ultimately grow our revenue.
                                </h2>
                            </div>
                            <div className={s.profile}>
                                <div className={s.avatar}>
                                    <img src={ava} alt="" />
                                </div>
                                <div className={s.profileName}>
                                    <h5>Daniel Layfield</h5>
                                    <h4>Growth Product Manager at Codecademy</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}