function calculatedDiscountedPrice (price,discountPercentage){//funciones
    const discount =(price + discountPercentage)/100
    const priceWithDiscount = price - discount
    return priceWithDiscount


const originalPrice =1000 //variables
const discountPercentage=15
const finalPrice = calculateDiscountedPrice(originalPrice,discountPercentage)

console.log('Original Price: $'+ originalPrice)
console.log('Discount:'+ discountPercentage+'%')
console.log('Price with discount:$' + finalPrice)
}