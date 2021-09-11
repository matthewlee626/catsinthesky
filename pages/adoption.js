import { useState } from 'react';
import Layout from './../components/layout';
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const AdoptionContainer = styled.div`
    max-height: calc(100vh - 150px);
    display: flex;
    flex: row;
    width: calc(100%);
`

const AdoptionTextContainer = styled.div`
    padding: 5% 10%;
    min-height: 100%;
    width: 40%;
    background: #F1EDDF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
`

const AdoptionReviewContainer = styled.div`
    padding: 5% 10%;
    width: 30%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const AdoptionScroll = styled.div`
    max-height: 100%;
    overflow:auto;
`

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      margin: 0,
    },
    card: {
        margin: '20px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); // https://www.w3schools.com/css/css3_shadows_box.asp',
    },
    content: {
        padding: '0 16px',
        '& p': {
            marginBottom: '0',
        }
    },
    action: {
        padding: '0 16px',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
}));

const Poster = styled.span`
    font-weight: bold;
`

function AdoptionReview(review){
    const reviewObj = review.review
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card}>
            <CardContent className={classes.content}>
                <p>Posted by <Poster>{reviewObj.postedBy}</Poster></p>
                <p>{reviewObj.createdAt}</p>
            </CardContent>
            <CardActions disableSpacing className={classes.action}>
                <p>{reviewObj.title} </p>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <p>{reviewObj.body}</p>
                </CardContent>
            </Collapse>
        </Card>
    )

}

export default function Adoption({ reviews }){
    const reviewData = reviews.data
   // console.log(reviewData)
    return (
        <Layout>
            <AdoptionContainer>
                <AdoptionTextContainer>
                    <h1>How to adopt a cat</h1>
                    <p>Cats in the Sky is home for up to 20 cats. Our staff cares for the kitties day and night, and they stay with us until they find  their Forever Homes.  Since we opened in 2016, we have found homes for hundreds of cats. </p>
                    <p>All of our cats are adoptable and most were pulled from the Animal Care & Control's "at-risk" list by our partner, Anjellicle Cats Rescue.</p>
                    <p>If you’re interested in adopting a cat, please email us or talk to our staff during your visit and we will help you through the process.</p>
                </AdoptionTextContainer>
                <AdoptionReviewContainer>
                    <h1>Reviews</h1>
                    <AdoptionScroll>
                        {reviewData.map((review, index) => <AdoptionReview key={index} review={review}/>)}
                    </AdoptionScroll>
                </AdoptionReviewContainer>
            </AdoptionContainer>
        </Layout>
    )
}

export async function getStaticProps(context){
    const reviews = require('../public/Data.json');
    return {
        props: {
            reviews,
        },
    }
  }