import styled from "styled-components";
import Navbar from "./navbar";


const Container = styled.div`
    margin: 0;
    padding: 0;
`

const ChildrenContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 1600px;
`

export default function Layout({children}){
    return (
        <Container>
            <Navbar></Navbar>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </Container>
    )
}