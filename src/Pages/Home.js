/* eslint-disable */
import './Home.scss'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data'

export default function Home() {

  const [shoes, setShoes] = useState(data);
  function Shoes({ shoes }) {
    return (
      <div className='Collection'>
        <Link to={`/detail/${shoes.id}`}>
          <img src={shoes.img} width="100%" alt=""/>
        </Link>
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
      </div>
    );
   }
  return (
    <div>
      <h1>Home</h1>
      <div className='Container'>
        <div className='Row'>
          {shoes.map((item, i) => {
            return <Shoes shoes={item} key={i}/>
          })}
        </div>
      </div>
    </div>
  )
}