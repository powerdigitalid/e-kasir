
export function moneyFormat(quantity) {
  return quantity.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}
