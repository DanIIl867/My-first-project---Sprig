import s from "./ContentBlock.module.css"
import Image from "../../img/IMAGE.16.png"

export const ContentBlock = () => {
    return(
        <div className={s.container}>
            <div className={s.textBlock}>
                <h2>
                    Sprig makes it possible to obtain qualitative insights at
                    the speed and scale of analytics
                </h2>
            </div>
            <div className={s.imageBlock}>
                <img src={Image} alt="" />
            </div>
            <div className={s.formBlock}>
                <button>Start for Free</button>
            </div>
        </div>
    )
}