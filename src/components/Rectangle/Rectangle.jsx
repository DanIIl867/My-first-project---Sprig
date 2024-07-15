import s from "./Rectangle.module.css"
import Cyclist from '../../img/Group.png';

export const Rectangle = () => {
    return(
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.image}>
                    <img src={Cyclist} alt="" />
                </div>
                <div className={s.textContent}>
                    <div className={s.heading}>
                        <h2>
                            Modern product teams move fast,
                            but learning from customers takes a ton of time,
                            effort, and energy.
                        </h2>
                    </div>
                    <div className={s.text}>
                        <p>
                            So teams often rush user research or skip it altogether,
                            causing products and features to miss the mark.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}