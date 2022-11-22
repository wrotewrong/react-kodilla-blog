import { useDispatch } from 'react-redux';
import { editPost } from '../../redux/postsReducer';
import { Navigate, useNavigate } from 'react-router-dom';
import { PostForm } from './PostForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostByID } from '../../redux/postsReducer';

export function EditPostForm() {
  const { id } = useParams();
  const post = useSelector((state) => getPostByID(state, id));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (post) => {
    dispatch(editPost({ id, ...post }));
    navigate('/');
  };

  if (!post) return <Navigate to='/' />;
  else
    return (
      <PostForm
        action={handleSubmit}
        actionText='Edit Post'
        title={post.title}
        author={post.author}
        publishedDate={post.publishedDate}
        shortDescription={post.shortDescription}
        content={post.content}
        category={post.category}
      ></PostForm>
    );
}
