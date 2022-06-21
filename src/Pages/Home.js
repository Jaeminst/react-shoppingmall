import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlueButton } from '../Components/styled';
import styled from "styled-components";
import data from '../data/data'

const Container = styled.div`
  display:contents;
  width:100%;
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  max-width: 1439px;
  margin-left: auto;  
  margin-right: auto;  
`
const Collection = styled.div`
  flex: auto;
  min-width: 360px;
  max-width: 768px;
  flex-basis: calc(calc(768px - 100%) * 1000000);
  flex-grow: 1;
  flex-shrink: 1;
  margin-left: auto;  
  margin-right: auto;  
`

const Button = styled(BlueButton)`
  width: 360px;
  padding: 20px;
  margin: 5px;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 230px;
  }
  @media (max-width: 480px) {
    width: 120px;
  }
`;

export default function Home() {

  const [shoes, setShoes] = useState(data);
  function Shoes({ shoes }) {
    return (
      <Collection>
        <Link to={`/detail/${shoes.id}`}>
          <img src={shoes.img} width="100%" alt=""/>
        </Link>
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
      </Collection>
    );
   }
  return (
    <div>
      <h1>Home</h1>
      <Container>
        <Row>
          {shoes.map((item, i) => {
            return <Shoes shoes={item} key={i}/>
          })}
        </Row>
      </Container>
    </div>
  )
}