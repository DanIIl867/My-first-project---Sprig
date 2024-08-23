import s from "./FooterBottom.module.css"
import logo from "../../img/Vector (2).png"
import instagram from "../../img/Vector (1).png"
import facebook from "../../img/Vector (4).png"
import twitter from "../../img/Vector (3).png"

export const FooterBottom = () => {
    return(
        <div className={s.section}>
            <div className={s.container}>
                <div className={s.aside}>
                    <div className={s.logo}>
                        <a href="/"><img src={logo} alt="" /></a>
                    </div>
                    <div className={s.lists}>
                        <div className={s.listProduct}>
                            <ul>
                                <li><h5>Product</h5></li>
                                <a href="/"><li>Microsurveys</li></a>
                                <a href="/"><li>Microsurveys</li></a>
                                <a href="/"><li>Concept Testing</li></a>
                                <a href="/"><li>Contextual Targeting</li></a>
                                <a href="/"><li>Text Analysis</li></a>
                                <a href="/"><li>Integrations</li></a>
                                <a href="/"><li>Plans</li></a>
                            </ul>
                        </div>
                        <div className={s.listCustomer}>
                            <ul>
                                <li><h5>Customer Stories</h5></li>
                                <a href="/"><li>Square</li></a>
                                <a href="/"><li>Codecademy</li></a>
                                <a href="/"><li>Nova Credit</li></a>
                                <a href="/"><li>Chipper</li></a>
                                <a href="/"><li>Plann</li></a>
                                <a href="/"><li>ProGuides</li></a>
                                <a href="/"><li>Shift</li></a>
                            </ul>
                        </div>
                        <div className={s.listCompany}>
                            <ul>
                                <li><h5>Company</h5></li>
                                <a href="/"><li>About Us</li></a>
                                <a href="/"><li>Careers</li></a>
                                <a href="/"><li>Terms of Service</li></a>
                                <a href="/"><li>Privacy Policy</li></a>
                                <a href="/"><li>Data Processing<br/> Addendum</li></a>
                            </ul>
                        </div>
                        <div className={s.listResources}>
                            <ul>
                                <li><h5>Resources</h5></li>
                                <a href="/"><li>Blog</li></a>
                                <a href="/"><li>Template Gallery</li></a>
                                <a href="/"><li>Podcast</li></a>
                                <a href="/"><li>Documentation</li></a>
                                <a href="/"><li>Security</li></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.copywriting}>
                    <div className={s.copyright}>
                        <h5>Copyright © 2022 Sprig. All Rights Reserved.</h5>
                    </div>
                    <div className={s.socials}>
                        <a href="/"><img src={facebook} alt="" /></a>
                        <a href="/"><img src={instagram} alt="" /></a>
                        <a href="/"><img src={twitter} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}