import PropTypes from "prop-types"


export default function Decrement({Buttonlabel,}) {
  return (
    <button >{Buttonlabel}</button>
  )
}
Decrement.propTypes = {
    Buttonlabel : PropTypes.string.isRequired,
    ButtonFunction: PropTypes.func.isRequired
    
}
