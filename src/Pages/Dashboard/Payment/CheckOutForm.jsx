import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Button from "../../../Button/Button";
import { useState } from "react";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    console.log("Card", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
  };

  return (
    <div className="mt-20">
      <form className="w-1/3 mx-auto" onSubmit={handleSubmit}>
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
        {/* <button className="btn" type="submit" disabled={!stripe}>
            Pay
          </button> */}
        <div className="mt-10 text-center">
          <Button name={"Pay"} type="submit" disabled={!stripe}></Button>
        </div>
      </form>
      <div>
        {cardError && (
          <>
            <p className="text-red-500 text-center mt-5 text-lg">{cardError}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckOutForm;
