export const TextArea = ({ id, placeholder, value, onChange, rows }) => {
  return (
    <>
      <label htmlFor={id} className='d-block mb-1'>
        {id}
      </label>
      <textarea
        id
        placeholder
        value
        onChange
        className='d-inline-block w-100 mb-3 px-2 rounded border-secondary'
        rows
      />
    </>
  );
};
