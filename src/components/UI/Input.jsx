export const Input = ({label, id, ...props}) => {
  return (
    <div className='control'>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} required {...props} />
    </div>
  )
}
