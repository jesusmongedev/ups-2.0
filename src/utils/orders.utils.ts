const sortOrdersByDate = (orders: Order[], isAscending: boolean) => {
  const sortedOrders = orders.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return isAscending
      ? dateA.getTime() - dateB.getTime()
      : dateB.getTime() - dateA.getTime();
  });
  return sortedOrders;
};

export { sortOrdersByDate };
