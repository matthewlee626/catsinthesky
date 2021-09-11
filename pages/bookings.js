import Layout from './../components/layout';
import styled from "styled-components";

const BookingContainer = styled.div`
    padding: 50px 200px;
    min-height: calc(100vh - 125px - 100px);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: start;
    width: calc(100%-400px);
`

const BookingCard = styled.div`
    height: 300px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); // https://www.w3schools.com/css/css3_shadows_box.asp
`

const BookingImage = styled.img`
    height: calc(300px - 75px);
`

const BookingTitleContainer = styled.div`
    width: 500px;
    height: 75px;
    background-color: #F1EDDF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h3 {
        margin-left: 1.5em;
    }
`
const BookingButton = styled.a`
    height: 50%;
    padding: 0.5em 1.5em 0 1.5em;
    border-radius: 20px;
    background-color: #EFDCB6;    
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-right: 1.5em
`

const bookings = [
    {
        "image": "/images/bookings/catnip.png",
        "title": "Catnip (Standard Visit)"
    },
    {
        "image": "/images/bookings/whisker.png",
        "title": "Whisker Wednesday"
    },
    {
        "image": "/images/bookings/thirsty.png",
        "title": "Thirsty Purssday"
    },
    {
        "image": "/images/bookings/kitty.png",
        "title": "Kitty Brunch"
    },
]

export default function Bookings(){
    return (
        <Layout>
            <BookingContainer>
                {bookings.map(booking => (
                    <BookingCard key={booking.title}>
                        <BookingImage src={booking.image} />
                        <BookingTitleContainer>
                            <h3>{booking.title}</h3>
                            <BookingButton href="https://google.com">Book</BookingButton>
                        </BookingTitleContainer>
                    </BookingCard>
                ))}
            </BookingContainer>
        </Layout>
    )
}