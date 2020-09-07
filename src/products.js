import images from './images/productImages';

/* ----- Architectural choice ------
  The two possible solutions that I thought of to implement this list are Arrays and Objects.
  I discarded Sets as they don't fit and Map because properties have different type, so it's easier with objects.
  Either Arrays and Objects have their pros and cons here
  The feature I need in this app are:
  map over this list to render the Product component
  access the qty and price value to render the Product component
  filter the list multiple times
  Array (of product_objects):
    Pros: can map over and filter with ease
    Cons: can't access by name specific product in O(1)
  Object (name => product_objects):
    Opposite to arrays
  
  Even though Objects seem quite a good implementation for this use-case (we access by name more than we filter),
  I decided to use Arrays because:
    1. performance won't be a problem in an e-commerce with tenths or hundreds of products. We're not talking about tenth of thousands
      (I'm not even sure if it could be a problem at that point, as I'm memoizing all the access function to prevent other products from rendering when one is added to shopping cart)
    2. Arrays feels more natural as a data structure for lists, they're just meant to be. If there are no valid reason, I'd always prefer an array for lists
      (In the future, specifics may change and it may become even more relevant to have array functions like reduce or map. With arrays we have just less code, which is good)
    3. Less prone to errors as you have to use less functions, less code and less nesting
  Of course, writing appropriate functions for objects would have solved the problem as well, but I had to write more code.  
*/

export default [
  {
    name: 'reaper',
    price: 2,
    img: images.reaper,
    title: 'Carolina Reaper',
    text: `The world's hottest pepper, with its 2.2mln SHU, you will certainly feel the heat!`,
    homepage: true,
    type: 'dry',
    heat: 5,
    flavours: ['extreme', 'fruity']
  }, {
    name: 'habanero',
    price: 1,
    img: images.habanero,
    title: 'Habanero Chocolate',
    text: `Also known as Black Congo. With its brown color and its chocolate flavour, the habanero chocolate is a must in every chilihead's fridge!`,
    homepage: true,
    type: 'fresh',
    heat: 3,
    flavours: ['fruity']
  }, {
    name: 'curry',
    price: 2,
    img: images.curry,
    title: 'Hot Curry Powder',
    text: `Our homemade curry powder is one of the hottest spice mixes in our market. Try it with tomato sauce in your next Indian curry, you won't regret it.`,
    homepage: true,
    type: 'spice',
    heat: 2,
    flavours: ['oriental']
  }, {
    name: 'harissa',
    price: 2,
    img: images.harissa,
    title: 'Harissa Spice Mix',
    text: `If you are into African cuisine or you're just looking for something new, our Harissa spice mix will bring new life to your harissa and other African recipes.`,
    homepage: true,
    type: 'spice',
    heat: 3,
    flavours: []
  }, {
    name: 'chipotle',
    price: 2,
    img: null,
    title: 'Chipotle',
    text: ``,
    type: 'dry',
    heat: 2,
    flavours: ['smoky']
  }
];