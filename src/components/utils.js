export function parseAmountFormat(amount){
  if(!amount) return '-'
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}