export const TextInput = ({ id, placeholder, value, onChange, type }) => {
  return (
    <div>
      <label htmlFor={id} className='d-block mb-1'>
        {id}
      </label>
      <input
        id
        placeholder
        value
        onChange
        type
        className='d-inline-block w-50 mb-3 px-2 rounded border-secondary'
      />
    </div>
  );
};
