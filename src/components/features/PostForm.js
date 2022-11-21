import { Button } from 'react-bootstrap';
import { TextArea } from '../common/TextArea';
import { TextInput } from '../common/TextInput';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function PostForm({ action, actionText, ...props }) {
  const [title, setTitle] = useState(props.title ? props.title : '');
  const [author, setAuthor] = useState(props.author ? props.author : '');
  const [publishedDate, setDate] = useState(
    props.publishedDate ? props.publishedDate : ''
  );
  const [shortDescription, setDescription] = useState(
    props.shortDescription ? props.shortDescription : ''
  );
  const [content, setContent] = useState(props.content ? props.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id='Title'
        placeholder='Enter title'
        type='text'
      ></TextInput>
      <TextInput
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        id='Author'
        placeholder='Enter author'
        type='text'
      ></TextInput>
      <p className='mb-1'>Published</p>
      <DatePicker
        className='mb-3'
        selected={publishedDate}
        onChange={(date) => {
          setDate(date);
        }}
      ></DatePicker>
      <TextArea
        value={shortDescription}
        onChange={(e) => setDescription(e.target.value)}
        id='Short description'
        placeholder='Leave a comment here'
        rows='5'
      ></TextArea>
      <p className='mb-1'>Main content</p>
      <ReactQuill
        className='mb-3'
        theme='snow'
        value={content}
        onChange={setContent}
        placeholder='Leave a comment here'
      ></ReactQuill>
      <Button type='submit' className='d-block'>
        {actionText}
      </Button>
    </form>
  );
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};
