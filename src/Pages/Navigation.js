import { useNavigate, useParams } from 'react-router-dom';

export default function Navigation({ text }) {
  const navigate = useNavigate();
  const params = useParams();
  console.log('isParams: ', params)
  return (
    <div>
      <h1>Navigation {text}</h1>
      <div>Detail of "params.id" {params.id}</div>
      <button onClick={() => navigate('/')}>Go Home</button>
      <button onClick={() => navigate('/about')}>Go About</button>
      <button onClick={() => navigate('/contact')}>Go Contact</button>
      <button onClick={() => navigate(-2)}>Go 2 pages back</button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
      <button onClick={() => navigate(2)}>Go 2 pages forward</button>
    </div>
  )
}