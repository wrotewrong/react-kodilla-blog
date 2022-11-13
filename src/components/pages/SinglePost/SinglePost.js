import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostByID } from '../../../redux/postsReducer';
import { Button } from 'react-bootstrap';

export function SinglePost() {
  const { id } = useParams();
  const post = useSelector((state) => getPostByID(state, id));

  return (
    <div className='w-75 px-md-5 mx-auto'>
      <div className='d-flex justify-content-between'>
        <h2>{post.title}</h2>
        <div>
          <Link to={`/post/edit/${id}`}>
            <Button className='m-2' variant='outline-info'>
              Edit
            </Button>
          </Link>
          <Button className='m-2' variant='outline-danger'>
            Delete
          </Button>
        </div>
      </div>
      <p className='mb-0'>
        <span className='fw-bold'>Author: </span>
        {post.author}
      </p>
      <p>
        <span className='fw-bold'>Published: </span>
        {post.publishedDate}
      </p>
      <p>{post.shortDescription}</p>
    </div>
  );
}
