const products = [
   {sku: "A-110", name: "hairbrish" , category: "hair care", price: 15.25, inventory: 10},
   {sku:"B-115", name: "lotion", category: "household", price: 12.32, inventory: 9},
   {sku: "C-120", name: "iphone charger", category: "electronics", price: 25.75, inventory: 12},
   {sku: "D-125", name: "blush", category:"makeup", price: 13.75, inventory: 5},
   {sku: "E-130", name: "towels", category: "toiletries", price: 10.75, inventory: 8},

];
// Step 3 Category Discounts
for (let p of products) {
  let discount = 0;
  switch (p.category) {
    case "hair care": discount = 0.20; break;
    case "body care":     discount = 0.15; break;
    case "electronics":
    case "household":   discount = 0.10; break;
    default: discount = 0; break;
  }
  p.promoPrice = (p.price * (1 - discount)).toFixed(2);
}
// Step 4 Creating a Variable
let total = 100; 
let customerType = "student"
if (customerType== "student"){
   total =total - (total* 0.05);
   else if (customerType === "senior") {
   total = total - (total *0.07);
   } else 
   }
   console.log(`final total after discount: $${total.toFixed(2)}`);
   


