type Customer = {
  email: string;
  name: string;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type TranckingItem = {
  customer_id: ID;
  customer: Customer;
  items: Item[];
};

type Item = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  carrier: string;
  createdAt: string;
  shippingCost: number;
  trackingId: string;
  trackingItems: TranckingItem;
  Lat: number;
  Lng: number;
  Address: string;
  City: string;
};

type OrderResponse = {
  value: Order;
};
