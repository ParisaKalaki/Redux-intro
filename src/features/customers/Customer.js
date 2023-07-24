import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.Customer.fullName);

  return <h2>👋 Welcome, %NAME%</h2>;
}

export default Customer;
