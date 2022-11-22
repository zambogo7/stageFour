
function CheckoutMainLeftComp(props) {
  return (
    <div id='CheckoutMainLeftComp-main' style={{ border: props.border, borderRadius: '10px', cursor: 'pointer'}}
    onClick={props.paymentClick}>
      <h4 id='CheckoutMainLeftComp-text'>{props.text}</h4>
      <img src={props.icon1} alt={props.icon1} />
    </div>
  )
}

export default CheckoutMainLeftComp
