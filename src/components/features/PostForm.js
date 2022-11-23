import { Button } from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { FormLabel, FormControl, FormSelect } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categoriesReducer';

export function PostForm({
  action,
  actionText,
  title,
  author,
  publishedDate,
  shortDescription,
  content,
  category,
}) {
  const [titleState, setTitle] = useState(title || '');
  const [authorState, setAuthor] = useState(author || '');
  const [publishedDateState, setDate] = useState(publishedDate || '');
  const [shortDescriptionState, setDescription] = useState(
    shortDescription || ''
  );
  const [contentState, setContent] = useState(content || '');
  const [categoryState, setCategory] = useState(category || '');

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);

  const allCategories = useSelector(getAllCategories);

  const handleSubmit = () => {
    setContentError(!contentState);
    setDateError(!publishedDateState);
    setCategoryError(!categoryState);
    if (contentState && publishedDateState && categoryState) {
      action({
        title: titleState,
        author: authorState,
        publishedDate: publishedDateState,
        shortDescription: shortDescriptionState,
        content: contentState,
        category: categoryState,
      });
    }
  };

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={validate(handleSubmit)}>
      <FormLabel className='mt-3'>Title</FormLabel>
      <FormControl
        {...register('title', { required: true, minLength: 4 })}
        value={titleState}
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        placeholder='Enter title'
      />
      {errors.title && (
        <small className='d-block form-text text-danger mt-1'>
          This field is required and must contain at least 4 characters
        </small>
      )}

      <FormLabel className='mt-3'>Author</FormLabel>
      <FormControl
        {...register('author', { required: true, minLength: 4 })}
        value={authorState}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder='Enter author'
        type='text'
      />
      {errors.author && (
        <small className='d-block form-text text-danger mt-1'>
          This field is required and must contain at least 4 characters
        </small>
      )}

      <p className='mb-1 mt-3'>Published</p>
      <DatePicker
        className='px-2'
        selected={publishedDateState}
        onChange={(date) => {
          setDate(date);
        }}
      ></DatePicker>
      {dateError && (
        <small className='d-block form-text text-danger mt-1'>
          This field is required
        </small>
      )}

      <FormLabel className='mt-3'>Category</FormLabel>
      <FormSelect
        value={categoryState}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value='' disabled>
          Select category...
        </option>
        {allCategories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </FormSelect>
      {categoryError && (
        <small className='d-block form-text text-danger mt-1'>
          You must pick a category
        </small>
      )}

      <FormLabel className='mt-3'>Short description</FormLabel>
      <FormControl
        {...register('description', { required: true, minLength: 20 })}
        value={shortDescriptionState}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Leave a comment here'
        as='textarea'
        rows={5}
      />
      {errors.description && (
        <small className='d-block form-text text-danger mt-1'>
          This field is required and must contain at least 20 characters
        </small>
      )}

      <p className='mb-1 mt-3'>Main content</p>
      <ReactQuill
        theme='snow'
        value={contentState}
        onChange={setContent}
        placeholder='Leave a comment here'
      ></ReactQuill>
      {contentError && (
        <small className='d-block form-text text-danger mt-1'>
          Content can't be empty
        </small>
      )}

      <Button type='submit' className='d-block mt-3'>
        {actionText}
      </Button>
    </form>
  );
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
};
