import s from "./Solutions.module.css"
import svg from "../../img/Frame (3).png"
import svg1 from "../../img/Frame (1).png"
import svg2 from "../../img/Frame (2).png"
import image from "../../img/IMAGE(16).png"
import image1 from "../../img/IMAGE (17).png"
import image2 from "../../img/IMAGE (18).png"

export const Solutions = () => {
    return(
        <div className={s.container}>

            <div className={s.heading}>
                <div className={s.heding6}>
                    <h6>
                        SOLUTIONS
                    </h6>
                </div>
                <div className={s.heading2}>
                    <h2>
                        How Sprig helps ensure every product decision is customer-informed
                    </h2>
                </div>
                <div className={s.paragraph}>
                    <p>
                        And helps through every stage of your product.
                    </p>
                </div>
            </div>

            <div className={s.content}>

                <div className={s.contentBlockMicrosurveys}>
                    <div className={s.textContent}>
                        <div className={s.text}>
                            <div className={s.image}>
                                <img src={svg} alt="" />
                            </div>
                            <div className={s.heading2}>
                                <h2>Contextual Microsurveys</h2>
                            </div>
                            <div className={s.paragraph}>
                                <p>
                                    Keep a constant pulse on your customer’s experience.
                                    Continuously surface user insights via in-product, email,
                                    or link microsurveys to improve your product and acquisition funnels.
                                </p>
                            </div>
                        </div>
                        <div className={s.button}>
                            <a className={s.btn} href="/">Learn More</a>
                        </div>
                    </div>

                    <div className={s.image}>
                        <img src={image} alt="" />
                    </div>
                </div>

                <div className={s.contentBlockVideo}>
                    <div className={s.textContent}>
                        <div className={s.text}>
                            <div className={s.image}>
                                <img src={svg1} alt="" />
                            </div>
                            <div className={s.heading2}>
                                <h2>Video Questions</h2>
                            </div>
                            <div className={s.paragraph}>
                                <p>
                                    Have more customer conversations, in less time. Conduct one-to-one user interviews anytime,
                                    anywhere in order to validate ideas and build a roadmap your customers will love.
                                </p>
                            </div>
                        </div>
                        <div className={s.button}>
                            <a className={s.btn} href="/">Learn More</a>
                        </div>
                    </div>

                    <div className={s.image}>
                        <img src={image1} alt="" />
                    </div>
                </div>

                <div className={s.contentBlockTesting}>
                    <div className={s.textContent}>
                        <div className={s.text}>
                            <div className={s.image}>
                                <img src={svg2} alt="" />
                            </div>
                            <div className={s.heading2}>
                                <h2>Concept Testing</h2>
                            </div>
                            <div className={s.paragraph}>
                                <p>
                                    Quickly iterate designs based on feedback from your users.
                                    Conduct rapid and remote concept testing to ensure your new concept,
                                    design, and messaging hit the mark by collecting feedback from your customers before launch.
                                </p>
                            </div>
                        </div>
                        <div className={s.button}>
                            <a className={s.btn} href="/">Learn More</a>
                        </div>
                    </div>

                    <div className={s.image}>
                        <img src={image2} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}