import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import PropTypes from "prop-types";

const stripePromise = loadStripe("TU_CLAVE_PÚBLICA_DE_STRIPE");

const CheckoutFormComponent = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: cardElement,
        },
      }
    );

    if (error) {
      console.error("Error al procesar el pago:", error.message);
    } else {
      console.log("Pago confirmado:", paymentIntent.status);
      alert("Orden confirmada y pagada");
    }
  };

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch(
          "https://backend-stcom.up.railway.app/create-payment-intent",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ totalAmount }),
          }
        );

        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
      } catch (err) {
        console.error("Error al crear el PaymentIntent:", err.message);
      }
    };

    if (totalAmount) {
      createPaymentIntent();
    }
  }, [totalAmount]);

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Confirmar Pago
      </button>
    </form>
  );
};

CheckoutFormComponent.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};

const CheckoutForm = ({ totalAmount }) => (
  <Elements stripe={stripePromise}>
    <CheckoutFormComponent totalAmount={totalAmount} />
  </Elements>
);

CheckoutForm.propTypes = {
  totalAmount: PropTypes.number.isRequired,
};

export default CheckoutForm;
