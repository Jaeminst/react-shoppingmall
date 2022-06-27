import './Detail.scss'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../data/data'


export default function Detail() {
  const [shoes, setShoes] = useState(data);
  const navigate = useNavigate();
  const params = useParams();
  
  const findItem = shoes.find((item) => {
    return item.id == params.id
  });
  function Shoes({ shoes }) {
    return (
      <div className='Collection'>
        <img src={shoes.img} width="100%" alt=""/>
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
        <p>{shoes.price} 원</p>
      </div>
    );
   }
  return (
    <div>
      <h1>Detail</h1>
      <div className='Container'>
        <div className='Row'>
          <Shoes shoes={findItem} />
        </div>
        <div>
          <button className='button' onClick={() => navigate('/')}>주문하기</button>
          <button className='button' onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
      </div>
    </div>
  )
}