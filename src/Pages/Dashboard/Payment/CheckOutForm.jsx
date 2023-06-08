import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


const CheckOutForm = () => {
    const handleSubmit =(event) =>{
        event.preventDefault();
        if (!stripe || !elements) {
          
          return;
        }
        const card = elements.getElement(CardElement);
         if (card == null) {
           return;
         }
    }
     const stripe = useStripe();
      const elements = useElements();
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </form>
      </div>
    );
};

export default CheckOutForm;