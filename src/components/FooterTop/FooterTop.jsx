import s from "./FooterTop.module.css"

export const FooterTop = () => {
    return(
        <div className={s.section}>
            <div className={s.container}>
                <div className={s.contentBlock}>
                    <div className={s.heading}>
                        <h2>Launch a Sprig within minutes.
                            See insights within hours.
                        </h2>
                    </div>
                    <div className={s.paragraph}>
                        <p>Create your free account to conduct video interviews,
                            test designs, and survey specific users within your product,
                            on your website,and more.</p>
                    </div>
                    <div className={s.button}>
                        <a href="/">Start for Free</a>
                    </div>
                </div>
            </div>
            <div className={s.line}>
                <hr />
            </div>
        </div>
    )
}