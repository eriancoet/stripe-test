const stripe = require('stripe')('sk_test_51NXJLlLssyCrcg8UMe8EekUf97FXVtG7zzv3yakghdaqJbZUKOCoqvslmkZZNVjRAuxZYQ4Vl3rV38zOklwMV5rS00K1LQzvgL');

stripe.products.create({
  name: 'Starter Subscription',
  description: '$12/Month subscription',
}).then(product => {
  stripe.prices.create({
    unit_amount: 1200,
    currency: 'usd',
    recurring: {
      interval: 'month',
    },
    product: product.id,
  }).then(price => {
    console.log('Success! Here is your starter subscription product id: ' + product.id);
    console.log('Success! Here is your starter subscription price id: ' + price.id);
  });
});