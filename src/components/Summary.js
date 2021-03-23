// Change ... with your value
function Summary(props) {
  return (
    <div className="order">
      <h1>Thanks for your submission!</h1>
      <p>The protein you like:      <b>{props.order.patty}</b></p>
      <p>Number of patties:         <b>{props.order.amount}</b></p>
      <p>Patty cooked level:        <b>{props.order.doneness}</b></p>
      <p>The topping you chose:     <b>{props.order.topping}</b></p>
      <p>Extra cheese:              <b>{props.order.cheese}</b></p>
      <p>Sauces:                    <b>{props.order.sauce}</b></p>
      <p>Anything extra:            <b>{props.order.extra}</b></p>
    </div>
  )
}

export default Summary;