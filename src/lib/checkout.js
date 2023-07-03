import { loadStripe } from "@stripe/stripe-js";

export async function checkout({lineItems}){
	let stripePromise = null

	const getStripe = () => {
		if(!stripePromise) {
			stripePromise = loadStripe('pk_test_51MGmmbDG06gMbGlubEdCwCu7dPeDE0AZTnPuAZGHpPdSqbYTOiEY5VVGgmskyR3KFZKEwz0wIZiFxnYnaxJFO0eE00o5AU8lr3')
		}
		return stripePromise
	}

	const stripe = await getStripe()

	await stripe.redirectToCheckout({
		mode: 'payment',
		lineItems,
		successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
		cancelUrl: window.location.origin
	})

}