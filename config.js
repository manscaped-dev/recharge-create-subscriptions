require('dotenv').config();

/**
 * rechargeApiKey: Recharge API Key
 * rechargeSecret: Recharge Secret Key
 * variantId: shopify variant id
 * quantity: quantity of the product
 * customerId: recharge customer id to tie subscription to
 * orderIntervalFrequency: The number of units, specified in order_interval_unit, between each order.
 * orderIntervalUnit: The frequency which a subscription should have the order created with. Valid values are “day”,“week”, and “month”
 * chargeIntervalFrequency: The number of units, specified in order_interval_unit, between each charge.
 * nextChargeDate: This will set the first charge date of a new subscription. ex. '2020-08-15T00:00:00'
 * sku: SKU for product, this must be provided otherwise it will come in as null
 * numberOfSubsToCreate: Number of subscriptions to create with above parameters (variant will be randomized if randomizeSubVariant is set to `true`)
 */

module.exports = {
  rechargeApiKey: process.env.RECHARGE_API_KEY,
  rechargeSecret: process.env.RECHARGE_SECRET,
  variantId: 123,
  quantity: 1,
  customerId: 123,
  addressId: 123,
  orderIntervalFrequency: 3,
  orderIntervalUnit: 'month',
  chargeIntervalFrequency: 3,
  nextChargeDate: '',
  sku: '',
  numberOfSubsToCreate: 1,
};
