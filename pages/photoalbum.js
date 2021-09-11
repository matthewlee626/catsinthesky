import Layout from './../components/layout';
import styled from "styled-components";

const PhotoPageContainer = styled.div`
    height: calc(100vh - 250px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 100px;
    & h1 {
        margin-left: 20px;
    }
`

const PhotoAlbumContainer = styled.div`
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    width: calc(100%);
`

const Photo = styled.img`
    height: 225px;
    width: 225px;
    margin: 20px;
`

export default function Adoption({ photos }){
    return (
        <Layout>
            <PhotoPageContainer> 
                <h1>Photos</h1>
                <PhotoAlbumContainer>
                    {photos.map(photo => <Photo 
                        key={photo.id}
                        src={photo.url}
                        alt={photo.title}
                    />)}
                </PhotoAlbumContainer>
            </PhotoPageContainer>
        </Layout>
    )
}

export async function getServerSideProps(context){
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    const photos = data.slice(0,24);
    return {
        props: {
            photos,
        },
    }
  }