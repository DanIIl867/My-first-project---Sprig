import { Conteiner, Logo, Nav, Info, } from './Header.styled';
import LogoType from '../../img/frame.png';



export const Header = () => {
    return (
        <>
            <section>
                <Conteiner>
                    <Logo>
                        <img src={LogoType} alt="" />
                    </Logo>
                    <Nav>
                        <div className='why-sprig'>
                            <a href="/">Why Sprig?</a>
                        </div>
                        <div className='dropMenu'>
                            <ul>
                                <li><a href="/">Product</a></li>
                                <li><a href="/">Customers</a></li>
                                <li><a href="/">Resources</a></li>
                            </ul>
                        </div>
                    </Nav>
                    <Info>
                        <ul>
                            <li><a href="/" className='btn button-1'>Sign In</a></li>
                            <li><a href="/" className='btn button-2'>Talk to Sales</a></li>
                            <li><a href="/" className='btn button-3'>Start for Free</a></li>
                        </ul>
                    </Info>
                </Conteiner>
            </section>
        </>
    )
}

export default Header;