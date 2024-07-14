import s from "./Companies.module.css"
import img1 from '../../img/IMAGE1 (1).png';
import img2 from '../../img/IMAGE1 (2).png';
import img3 from '../../img/IMAGE1 (3).png';
import img4 from '../../img/IMAGE1 (4).png';
import img5 from '../../img/IMAGE1 (5).png';
import img6 from '../../img/IMAGE1 (6).png';
import img7 from '../../img/IMAGE1 (7).png';
import img8 from '../../img/IMAGE1 (8).png';
import img9 from '../../img/IMAGE1 (9).png';
import img10 from '../../img/IMAGE1 (10).png';
import img11 from '../../img/IMAGE1 (11).png';
import img12 from '../../img/IMAGE1 (12).png';
import img13 from '../../img/IMAGE1 (13).png';
import img14 from '../../img/IMAGE1 (14).png';
import img15 from '../../img/IMAGE1 (15).png';

export const Companies =() => {
    return(
        <div className={s.container}>
            <div className={s.textBlock}>
                <h2>Trusted by the world's most innovative companies</h2>
            </div>
            <div className={s.contentBlock}>
                <div className={s.content1}>
                    <a href="https://squareup.com/gb/en" target="blank"><img src={img1} alt="" /></a>
                    <a href="https://shift.ua" target="blank"><img src={img15} alt="" /></a>
                    <a href="https://www.data.ai/ru/" target="blank"><img src={img14} alt="" /></a>
                </div>
                <div className={s.content2}>
                    <a href="https://www.codecademy.com" target="blank"><img src={img13} alt="" /></a>
                    <a href="https://it-ease.com" target="blank"><img src={img12} alt="" /></a>
                    <a href="https://www.beyondpricing.com" target="blank"><img src={img11} alt="" /></a>
                </div>
                <div className={s.content3}>
                    <a href="https://www.dropbox.com/uk_UA/" target="blank"><img src={img10} alt="" /></a>
                    <a href="https://ironcladapp.com" target="blank"><img src={img9} alt="" /></a>
                    <a href="https://www.proguides.com" target="blank"><img src={img8} alt="" /></a>
                </div>
                <div className={s.content4}>
                    <a href="https://www.loom.com" target="blank"><img src={img7} alt="" /></a>
                    <a href="https://www.opendoor.com" target="blank"><img src={img6} alt="" /></a>
                    <a href="https://invoice.2go.com" target="blank"><img src={img5} alt="" /></a>
                </div>
                <div className={s.content5}>
                    <a href="https://www.adobe.com/ua/" target="blank"><img src={img4} alt="" /></a>
                    <a href="https://www.surfline.com" target="blank"><img src={img3} alt="" /></a>
                    <a href="https://www.chippercash.com" target="blank"><img src={img2} alt="" /></a>
                </div>
            </div>
        </div>
    )
}