import PropTypes from "prop-types"
const Label = ({label,labelFor,id}) => {
  return (
    <label id={id} htmlFor={labelFor} className="">{label}</label>
  )
}
Label.propTypes ={
label: PropTypes.string.isRequired,
labelFor: PropTypes.string,
id:PropTypes.string.isRequired,
}
export default Label