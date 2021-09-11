import styled from "styled-components";
import Link from 'next/link'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

const NavbarContainer = styled.div`
    height: 125px;
    width: 100%;
    min-width: 1600px;

    background: black;
    font-size: 24px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-family: "Overpass";
    & a {
        color: white;
    }
`

const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 24px;
`

const LogoContainer = styled.img`
    height: 50%;
    margin: 0 20px;
`

const Spacer = styled.span`
    margin: 0 10px;
`

const InfoContainer = styled.div`
    font-size: 16px;
`

const LeftNavbar = styled.div`
    display: flex;
    flex-direction: row;
`

const pages = [
    {
        title: 'HOME',
        link: "/"
    },
    {
        title: 'BOOKINGS',
        link: "/bookings"
    },
    {
        title: 'ADOPTION',
        link: "/adoption"
    },
    {
        title: 'PHOTO ALBUM',
        link: "/photoalbum"
    }

]



function NavLinks(){
    return (    
        <LinksContainer>
            {pages.map(function(page, index) {
                return (
                    <div key={[page.title]}>
                        <Spacer>{index ? '/' : ""}</Spacer>
                        <Link href={page.link}>
                            <a>{page.title}</a>
                        </Link>
                    </div>
                )
            })}
        </LinksContainer>
    )
}

export default function Navbar() {
    return (
        <NavbarContainer>
            <LeftNavbar>
                <LogoContainer src="/images/logo.png"/>
                <h1>CATS IN THE SKY</h1>
            </LeftNavbar>
            <NavLinks />
            <InfoContainer>
                <p>4:20 AM - 4:20 PM</p>
                <p>Call Us: 000-Never</p>
            </InfoContainer>
            <div>
                <AiFillFacebook />
                <AiFillInstagram />
            </div>
        </NavbarContainer>
    )
}
