import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BlueButton } from '../Components/styled';
import styled from "styled-components";
import data from '../data/data'

const Container = styled.div`
  display: contents;
  width:100%;
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
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

export default function Detail() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  const params = useParams();
  
  const findItem = shoes.find((item) => {
    return item.id == params.id
  });
  function Shoes({ shoes }) {
    return (
      <Collection>
        <img src={shoes.img} width="100%" alt=""/>
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
        <p>{shoes.price} 원</p>
      </Collection>
    );
   }
  return (
    <div>
      <h1>Detail</h1>
      <Container>
        <Row>
          <Shoes shoes={findItem} />
        </Row>
        <Button onClick={() => navigate('/')}>주문하기</Button>
        <Button onClick={() => navigate(-1)}>뒤로가기</Button>
      </Container>
    </div>
  )
}