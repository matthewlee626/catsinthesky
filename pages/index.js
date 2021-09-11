import Layout from "../components/layout";
import Image from "next/image";
import styled from "styled-components";

const BannerBG = styled.div`
  z-index: -999;
`

const BannerText = styled.div`
  z-index: 1;
  color: white;
  min-height: calc(100vh - 125px);
  font-size: 36px;
  margin: 0 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h1, h5 {
    margin: 0;
  }
`

export default function Home() {
  return (
    <Layout>
      <BannerBG>
        <Image src='/images/home-banner.png' alt="" objectFit="cover" layout="fill"/>
      </BannerBG>
      <BannerText>
        <h1>Cats in the Sky</h1>
        <h5>The only cat home in an airplane</h5>
      </BannerText>
    </Layout>
  )
}
