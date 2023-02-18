const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    cat: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    cat: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    cat: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    cat: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    cat: "Casual",
  },
];

const Search = document.querySelector('.search');
const ProductContainer = document.querySelector('.products');
const CategoriesContainer = document.querySelector('.cats')

const AddProducts = (display) => {
  
  ProductContainer.innerHTML = display.map(p => 
   `
   <div class="product">
    <img src=${p.img} alt="">
    <p class="name">${p.name}</p>
    <p class="product_price">$${p.price}</p>
  </div>
  `
  ).join('')
}

AddProducts(data)


  Search.addEventListener('input', (e) => {
     const searchedData = [];
     data.forEach(p => 
        p.name.includes(e.target.value) ? searchedData.push(p):null
      )

      AddProducts(searchedData)
  })

  function setCat()
  {
  const category = [];
  data.forEach(d => category.includes(d.cat) ? null : category.push(d.cat))
  category.unshift('All')
  console.log(category)
 
  CategoriesContainer.innerHTML = category.map(cat => 
   ` <div class='cat'>${cat}</div>`
  ).join('')

  CategoriesContainer.addEventListener('click', (e) => {
   AddProducts(data.filter(d => { return d.cat.indexOf(e.target.innerText) !== -1 }))
   if(e.target.innerText === 'All'){ AddProducts(data) }
   console.log(e.target.innerText)
  })

  }

  setCat()