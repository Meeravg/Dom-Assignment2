const burger = document.querySelector("#burger")
const pizza = document.querySelector("#pizza")
const samosa=document.querySelector("#samosa")
const salad=document.querySelector("#salad")
const image  = document.querySelector("#img")
const image1  = document.querySelector("#img1")
const image2  = document.querySelector("#img2")
const image3  = document.querySelector("#img3")
const h3=document.querySelector("h3")
var foodimg = [
  "https://img.freepik.com/premium-photo/big-burger-hamburger-cheeseburger-symbol-fast-food-street-food-design-logotype-restaurant-cafe_726113-795.jpg",
  "https://www.boldsky.com/img/2017/02/15-1487159585-pizza1.jpg",
  "https://static.toiimg.com/thumb/61050397.cms?imgsize=246859&width=800&height=800",
  "https://static01.nyt.com/images/2023/07/11/multimedia/as-fruit-salad-bjcv/as-fruit-salad-bjcv-videoSixteenByNineJumbo1600-v2.jpg"
];
function imgstyles(img){
  img.style.width="200px"
  img.style.objectFit="cover"
  img.style.borderRadius="10px"
}
let btn = document.querySelector("#order");
btn.addEventListener("click", (event) => {
  event.preventDefault()
  const burger_T = burger.checked
  const pizza_T = pizza.checked
  const samosa_T = samosa.checked
  const salad_T = salad.checked
  let food = new Promise((res, rej) => {
    const randomSeconds = Math.floor(Math.random() * 10) + 1;
    console.log(`your order will resolve after ${randomSeconds} seconds`);
    setTimeout(() => {
      res("Order successfully");
      if (burger_T == true){
        image.src = foodimg[0]
        imgstyles(image)
      }
      if (pizza_T == true){
        image1.src = foodimg[1]
        imgstyles(image1)
      }
      if(samosa_T==true){
        image2.src=foodimg[2]
        imgstyles(image2)
      }
      if(salad_T==true){
        image3.src=foodimg[3]
        imgstyles(image3)
      }
    }, randomSeconds * 1000);
    const id = Math.floor(Math.random() * 10000)
    h3.innerText=`#order-id ${id}`;
    console.log(`Order-id: ${id}`);
  });
  food.then((a) => {
    console.log(a);
    food.catch((Error) => {
      console.log("Order failed:", Error);
    });
  });
});
