import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../utlis/dateToStr';

export function PostCard({ title, author, date, id, description }) {
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='p-3 border border-secondary rounded'>
        <h3>{title}</h3>
        <p className='mb-0'>
          <span className='fw-bold'>Author: </span>
          {author}
        </p>
        <p>
          <span className='fw-bold'>Published: </span>
          {dateToStr(date)}
        </p>
        <p>{description}</p>
        <Link to={`post/${id}`}>
          <Button>Read more</Button>
        </Link>
      </div>
    </div>
  );
}
