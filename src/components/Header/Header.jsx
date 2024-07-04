import { Conteiner, Logo, Nav, Info } from './Header.styled';
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

                    </Nav>
                    <Info>
                        <a href="/" className='button1'>Sign In</a>
                        <a href="/" className='button2'>Talk to Sales</a>
                        <a href="/" className='button3'>Start for Free</a>
                    </Info>
                </Conteiner>
            </section>
        </>
    )
}

export default Header;