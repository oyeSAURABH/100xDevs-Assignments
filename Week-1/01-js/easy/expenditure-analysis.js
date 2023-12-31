/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let cat = new Map();
  for (let i = 0; i < transactions.length; i++) {
    cat.set(
      transactions[i].category,
      (cat.has(transactions[i].category)
        ? cat.get(transactions[i].category)
        : 0) + transactions[i].price
    );
  }

  let ans = [];
  cat.forEach((value, key) => {
    ans.push({ category: key, totalSpent: value });
  });

  console.log(ans);
  return ans;
}
module.exports = calculateTotalSpentByCategory;
