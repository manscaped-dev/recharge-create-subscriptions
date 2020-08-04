/* Script Entry */
import Recharge from 'recharge-api-node';
import config from '../config';

const recharge = new Recharge({
  apiKey: config.rechargeApiKey,
  secrete: config.rechargeSecret,
});

async function run() {
  for (let i = 0; i < config.numberOfSubsToCreate; i++) {
    const subscription = await recharge.subscription.create({
      address_id: config.addressId,
      next_charge_scheduled_at: config.nextChargeDate,
      shopify_variant_id: config.variantId,
      quantity: config.quantity,
      order_interval_unit: config.orderIntervalUnit,
      order_interval_frequency: config.orderIntervalFrequency,
      charge_interval_frequency: config.chargeIntervalFrequency,
      customer_id: config.customerId,
      sku: config.sku,
    });

    console.log(subscription);
  }
}

run();
