const form = document.querySelector('.product-form-container')
const nameInput = document.querySelector('#name')
const priceInput = document.querySelector('#price')
const productsContainer = document.querySelector('.products-container')

let currentProducts = JSON.parse(localStorage.getItem('items')) || []

form.addEventListener('submit', (e) => {
  // предотвращаем перезагрузку страницы
  e.preventDefault()
  //формируем товар(объект из инпутов)
  const newProduct = {
    name: nameInput.value,
    price: priceInput.value,
  }
  // пушим в массив
  currentProducts.push(newProduct)
  //очищаем поля ввода
  nameInput.value = ''
  priceInput.value = ''
  // сохраняем массив в localStorage
  localStorage.setItem('items', JSON.stringify(currentProducts))
})
