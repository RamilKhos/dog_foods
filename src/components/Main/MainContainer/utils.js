/* eslint-disable max-len */
const sumСalculation = (elem) => elem.price - (elem.price * (elem.discount / 100))

export const productSorting = ([...products], key) => {
  switch (key) {
    case 'POPULAR':
      return products.sort((a, b) => b.likes.length - a.likes.length)

    case 'CHEAP_FIRST':
      return products.sort((a, b) => sumСalculation(a) - sumСalculation(b))

    case 'FIRST_DEAR':
      return products.sort((a, b) => sumСalculation(b) - sumСalculation(a))

    case 'BY_DISCOUNT_SIZE':
      return products.sort((a, b) => b.discount - a.discount)

    case 'BY_DATE_ADDED':
      return products.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

    default:
      return products
  }
}
