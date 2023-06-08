import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_pk_payment);

const Payment = () => {
    return (
      <div>
        <SectionTitle
          subHeading={"Please provide Information"}
          heading={"Payment"}
        ></SectionTitle>
<Elements stripe={stripePromise}>
    <CheckOutForm></CheckOutForm>
</Elements>
        
      </div>
    );
};

export default Payment;