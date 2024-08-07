import s from "./Integrations.module.css"
import image from "../../img/IMAGE(19).png"


export const Integrations = () => {
    return(
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.textContent}>
                    <div className={s.heading}>
                        <div className={s.subtitle}>
                            <h6>INTEGRATIONS</h6>
                        </div>
                        <div className={s.h2}>
                            <h2>Share data and insights across all of your (other)
                                favorite tools by integrating with Sprig
                            </h2>
                        </div>
                    </div>
                    <div className={s.text}>
                        <p>Connect events and attributes from other platforms to ensure you’re asking the right customers the right questions.
                           Then share your findings with apps like Slack and Zendesk to get a comprehensive view of your users' behaviors.</p>
                    </div>
                    <div className={s.button}>
                        <a href="/">See All Integrations</a>
                    </div>
                </div>
                <div className={s.imageContent}>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    ) 
}