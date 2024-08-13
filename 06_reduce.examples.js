// Reduce - Objects

/**
 * CART EXAMPLE
 *  */
const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "google pixel ",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
];

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // count items
    total.totalItems += amount;
    // count sum
    total.cartTotal += amount * price;
    return total;
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
);

cartTotal = parseFloat(cartTotal.toFixed(2)); // toFixed(2) return string so convert it into foloat using parseFloat()
// console.log("Total Items: ", totalItems);
// console.log("Total Amount: ", cartTotal);

/**
 * GITHUB REPO'S EXAMPLE
 */
const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchResponce = async () => {
  const responce = await fetch(url);
  const data = await responce.json();
  console.log(data);
  //   const newData = data.reduce((total, repo) => {
  //     const { language } = repo;
  //     if (total[language]) {
  //       total[language] = total[language] + 1;
  //     } else {
  //       total[language] = 1;
  //     }
  //     return total;
  //   }, {});

  //   console.log(newData);
};

fetchResponce();
