import { useState } from 'react';
import data from '../data/data'
import './Home.css';

export default function Home() {
  const [shoes, setShoes] = useState(data);
  function Shoes({ shoes }) {
    return (
      <div className="col-md-4">
        <img src={shoes.img} width="100%" alt=""/>
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
      </div>
    );
   }
  return (
    <div>
      <h1>Home</h1>
      <div className="container">
        <div className="row">
          {shoes.map((item, i) => {
            return <Shoes shoes={item} key={i} />;
          })}
        </div>
      </div>
    </div>
  )
}