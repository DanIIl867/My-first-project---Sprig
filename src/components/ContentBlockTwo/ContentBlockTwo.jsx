import s from "./ContentBlockTwo.module.css"
import Img from "../../img/IMAGE.17.png"

export const ContentBlockTwo = () => {
    return(
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.image}>
                    <img src={Img} alt="" />
                </div>
                <div className={s.textContent}>
                    <div className={s.heading}>
                        <h2>Target your actual users during key moments throughout their product journey.</h2>
                    </div>
                    <div className={s.text}>
                        <p>Get 30% higher response rates by asking your customers hyper-relevant questions based
                            on who they are and what they'll do within your product.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}