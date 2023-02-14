import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button, Card } from "flowbite-react";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51Lrk6ECWQr2AWNW60Q0xqteLAO2GxvVvgS7vqsoLDX0SZuoE1agWgRjqtpBZ87niJWjsT373Ly5QQPFUOkgmYUNt00HU7L2Viv"
);

const PaymentPage = () => {
  const { productprice } = useParams;
  return (
    <div className="lg:w-2/5 w-4/5 mt-32 mx-auto h-screen">
      <Card>
        <Elements stripe={stripePromise}>
          <CheckoutForm productprice={productprice} />
        </Elements>
      </Card>
    </div>
  );
};

const CheckoutForm = ({ productprice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setclientSecret] = useState("");

  useEffect(() => {
    if (productprice) {
      fetch("http://localhost:5000/create_payment_intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price: productprice }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.clientSecret) {
            setclientSecret(data.clientSecret);
          }
        });
    }
  }, [productprice]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error);
    }

    //confirm payment
    const { paymentIntent, error: IntentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "jenny",
          },
        },
      });
    if (IntentError) {
      setError(IntentError);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentIntent);
      setSuccess("congrates! yor payment is compelete");
    }
  };

  return (
    <form className="grid gap-8" onSubmit={handleSubmit}>
      <div>
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
        {
          <>
            <small className="pt-4 block text-red-500">{error?.message}</small>
            <small className="pt-4 block text-green-500">
              {success?.message}
            </small>
          </>
        }
      </div>
      <button type="submit">
        <Button color="success" disabled={!stripe || clientSecret}>
          Pay
        </Button>
      </button>
    </form>
  );
};

export default PaymentPage;
