// Change ... with your value
import chef from "../chef.png";

function Completed(props) {
    return (
      <div className="order">
        <h1> {props.username.toUpperCase()} your order is completed!</h1>
        <h1>Thank you!!!</h1>

      <img src={chef} alt="chef" className="logo-3" />

      </div>
    )
  }
  
  export default Completed;