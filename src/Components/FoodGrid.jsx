import React, { useState } from "react";
import FoodCard from "./FoodCard";

const foodItems = [
  {
    name: "Veggie Delight Pizza",
    price: 150,
    description: "Tomato, Onion & Capsicum",
    image: "https://images.mrcook.app/recipe-image/0191d5f0-1a26-70d9-8441-2861ea8f4129",
    rating: 4.5,
    category: "Veg Pizza",
  },
  {
    name: "Paneer Tikka Pizza",
    price: 170,
    description: "Tomato, Onion, Capsicum & Paneer Tikka",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPslzdd7adZSgVG8znD8FSxdxCuENIHcDHeA&s",
    rating: 4.7,
    category: "Veg Pizza",
  },
  {
    name: "Teekha Paneer Pizza",
    price: 170,
    description: "Tomato, Onion, Capsicum & Green Chilli Paneer",
    image: "https://images.raasakarts.com/insecure/fit/1000/1000/ce/0/plain/https://rasakart-assets.s3.ap-south-1.amazonaws.com/3fa229/prods/hzfYiaJjimdyu9Qo8gIVrtyQsGHLZHonM86RFbge.jpg@webp",
    rating: 4.6,
    category: "Veg Pizza",
  },
  {
    name: "Mushroom Corn Delight Pizza",
    price: 180,
    description: "Mushroom, Corn, Onion & Paprika",
    image: "https://b.zmtcdn.com/data/dish_photos/034/7f1cbc2e7c274b87a28725b739d31034.jpg",
    rating: 4.8,
    category: "Veg Pizza",
  },
  {
    name: "Deluxe Veggie Pizza",
    price: 180,
    description: "Tomato, Onion, Capsicum, Black Olive, Corn",
    image: "https://b.zmtcdn.com/data/dish_photos/6a1/e035ac99d6be2ebfe736f5917a5216a1.jpg",
    rating: 4.7,
    category: "Veg Pizza",
  },
  {
    name: "Veg Extravaganza Pizza",
    price: 190,
    description: "Tomato, Onion, Capsicum, Corn, Mushroom & Jalapeno",
    image: "https://cdn.dotpe.in/longtail/item_thumbnails/7885519/Q1zKEXKm-776-776.webp",
    rating: 4.9,
    category: "Veg Pizza",
  },
  {
    name: "Chicken Delight Pizza",
    price: 170,
    description: "Tomato, Onion, Capsicum & Chicken",
    image: "https://thumbs.dreamstime.com/b/delight-your-taste-buds-very-tasty-beautiful-chicken-pizza-sure-to-satisfy-your-cravings-perfect-284273581.jpg",
    rating: 4.5,
    category: "Non-Veg Pizza",
  },
  {
    name: "Chicken Tikka Pizza",
    price: 180,
    description: "Tomato, Onion, Capsicum & Chicken Tikka",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJs5RHhm8MMvK9HoPkOZdfZSfKVmxNCtUGA&s",
    rating: 4.8,
    category: "Non-Veg Pizza",
  },
  {
    name: "Teekha Chicken Pizza",
    price: 180,
    description: "Tomato, Onion, Capsicum, Green Chilli & Chicken",
    image: "https://b.zmtcdn.com/data/dish_photos/7e5/a817a0706b3db7bc498c7f82d85767e5.png",
    rating: 4.6,
    category: "Non-Veg Pizza",
  },
  {
    name: "Deluxe Chicken Pizza",
    price: 190,
    description: "Tomato, Onion, Capsicum, Black Olive, Corn & Chicken",
    image: "https://img.freepik.com/free-photo/top-view-chicken-pizza-with-yellow-cherry-tomatoes-bell-pepper-board_141793-3971.jpg",
    rating: 4.8,
    category: "Non-Veg Pizza",
  },
  {
    name: "Chicken Seekh Pizza",
    price: 190,
    description: "Tomato, Onion, Capsicum & Chicken Seekh",
    image: "https://pd.w.org/2024/02/17165c09bef3aed24.85910573.jpg",
    rating: 4.7,
    category: "Non-Veg Pizza",
  },
  {
    name: "Chicken Extravaganza Pizza",
    price: 200,
    description: "Tomato, Onion, Capsicum, Mushroom, Jalapeno & Chicken",
    image: "https://flavourscafe.com/wp-content/uploads/2023/10/barbeque-chicken-pizza_Flavours-Cafe_11zon.jpg",
    rating: 4.9,
    category: "Non-Veg Pizza",
  },
  {
    name: "Add Double Cheese",
    price: 60,
    description: "Add extra layers of rich, creamy cheese to your pizza",
    image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg?w=1155&h=1528",
    rating: 4.9,
    category: "Addon",
  },





// Yaha se Burger shuru



{
    "name": "Aloo Tikki Burger",
    "price": 80,
    "description": "A classic burger with a spiced potato patty.",
    "image": "https://www.zippyfeed.com/wp-content/uploads/2023/02/Veggies-Spicy-Burger.jpeg",
    "rating": 4.5,
    "category": "Burger"
  },
  {
    "name": "Veg Surprise Burger",
    "price": 110,
    "description": "A delicious burger filled with mixed vegetables and spices.",
    "image": "https://mrbrownbakery.com/image/images/Hy5M9BHxWO6nUFOhO1cv9DHjg34D92yLyADYSxBz.jpeg?p=full",
    "rating": 4.4,
    "category": "Burger"
  },
  {
    "name": "Veg Chilli Lava Burger",
    "price": 120,
    "description": "A spicy veggie burger with a fiery chili sauce.",
    "image": "https://saltandbatteruk.com/wp-content/uploads/2023/09/brioche-burger-3-1-scaled-1.jpg",
    "rating": 4.3,
    "category": "Burger"
  },
  {
    "name": "Crunchy Corn Burger",
    "price": 130,
    "description": "A crunchy burger made with corn and spices.",
    "image": "https://cleangreensimple.com/wp-content/uploads/2020/05/beyond-elote-burger-feature.jpg",
    "rating": 4.6,
    "category": "Burger"
  },
  {
    "name": "Crispy Veggie Burger",
    "price": 130,
    "description": "A crispy, golden burger with a vegetable patty.",
    "image": "https://img.freepik.com/free-photo/close-up-vegetarian-burger-cutting-board_23-2148784533.jpg",
    "rating": 4.5,
    "category": "Burger"
  },
  {
    "name": "Veg Maharaja Burger",
    "price": 150,
    "description": "A royal burger with a thick veggie patty.",
    "image": "https://i0.wp.com/www.foodorderkar.com/wp-content/uploads/2022/10/264004.jpg?fit=647%2C474&ssl=1",
    "rating": 4.7,
    "category": "Burger"
  },
  {
    "name": "Premium Paneer Burger",
    "price": 160,
    "description": "A premium burger with a delicious paneer patty.",
    "image": "https://img.freepik.com/premium-photo/spicy-paneer-tikka-burger-white-background-paneer-tikka-image-photography_1020697-118615.jpg",
    "rating": 4.8,
    "category": "Burger"
  },
  {
    "name": "Spicy Paneer Burger",
    "price": 160,
    "description": "A spicy burger filled with paneer and hot spices.",
    "image": "https://i.ytimg.com/vi/kUdIhifyJYg/maxresdefault.jpg",
    "rating": 4.4,
    "category": "Burger"
  },
  {
    "name": "Egg Shegg Burger",
    "price": 90,
    "description": "A burger with a soft scrambled egg patty.",
    "image": "https://cdn.uengage.io/uploads/18085/image-465619-1717587021.jpeg",
    "rating": 4.3,
    "category": "Burger"
  },
  {
    "name": "Fried Chicken Burger",
    "price": 130,
    "description": "A burger with a crispy fried chicken patty.",
    "image": "https://media.istockphoto.com/id/521207406/photo/southern-country-fried-chicken-sandwich.jpg?s=612x612&w=0&k=20&c=XfttLSxEO2YAjop4Gy0CIb1L5N_OK1tTKxmkiPr3QD8=",
    "rating": 4.6,
    "category": "Burger"
  },
  {
    "name": "Chicken Supreme Burger",
    "price": 140,
    "description": "A supreme chicken burger with spicy toppings.",
    "image": "https://www.shutterstock.com/image-photo/breaded-sriracha-cod-slaw-sandwich-600nw-2281451167.jpg",
    "rating": 4.7,
    "category": "Burger"
  },
  {
    "name": "Chicken Chilli Lava Burger",
    "price": 150,
    "description": "A fiery chicken burger with chili sauce.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKqSCoJBW0EzOWr_-5GjkoDVpUDdJwTB3w-A&s",
    "rating": 4.5,
    "category": "Burger"
  },
  {
    "name": "Crispy Chicken Burger",
    "price": 150,
    "description": "A crispy, golden chicken burger with fresh vegetables.",
    "image": "https://media.istockphoto.com/id/652832752/photo/fried-chicken-burger.jpg?s=612x612&w=0&k=20&c=EendRCleaNpkKOUiOplgStACHh_8IyHYzjbzcByGC_4=",
    "rating": 4.6,
    "category": "Burger"
  },
  {
    "name": "Chicken Maharaja Burger",
    "price": 160,
    "description": "A royal chicken burger with a large, juicy patty.",
    "image": "https://www.puppiesandflowers.com/wp-content/uploads/2012/09/McDonaldsIndia.jpg",
    "rating": 4.8,
    "category": "Burger"
  },
  {
    "name": "Premium Fried Chicken Burger",
    "price": 160,
    "description": "A premium fried chicken burger with crispy texture.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Ch0GB5iZ-i6lEnYdxc2kT5weIm_j68ZBKQ&s",
    "rating": 4.9,
    "category": "Burger"
  },
  {
    "name": "Add Cheese Slice",
    "price": 20,
    "description": "Add a slice of cheese to your burger for extra flavor.",
    "image": "https://i.ytimg.com/vi/ptk5XtW4GMI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDly_glKSEQr2l_cq9kCEuHfYbfXg",
    "rating": 4.2,
    "category": "Addon"
  },








  // Wraps Shuru yaya se 

  {
    "name": "Crispy Paneer Wrap",
    "price": 180,
    "description": "A delicious wrap with crispy paneer and fresh veggies.",
    "image": "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg",
    "rating": 4.5,
    "category": "Wrap"
  },
  {
    "name": "Spicy Paneer Wrap",
    "price": 190,
    "description": "A spicy paneer wrap filled with flavorful sauces and toppings.",
    "image": "https://img-global.cpcdn.com/recipes/5aa2f27650712336/680x482cq70/paneer-wrap-recipe-main-photo.jpg",
    "rating": 4.6,
    "category": "Wrap"
  },
  {
    "name": "Peri Peri Paneer Wrap",
    "price": 210,
    "description": "A peri-peri flavored wrap with paneer and tangy sauces.",
    "image": "https://i0.wp.com/thetrendingdiary.com/wp-content/uploads/2019/08/oriental-chicken-wrap-1-940x627.jpg?fit=800%2C534&ssl=1",
    "rating": 4.7,
    "category": "Wrap"
  },
  {
    "name": "Crispy Chicken Wrap",
    "price": 190,
    "description": "A crispy wrap with tender chicken and fresh vegetables.",
    "image": "https://sailorbailey.com/wp-content/uploads/2023/01/Crispy-Chicken-WrapsKey.jpg",
    "rating": 4.6,
    "category": "Wrap"
  },
  {
    "name": "Spicy Chicken Wrap",
    "price": 200,
    "description": "A spicy chicken wrap with fiery sauces and fresh toppings.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksUB9gieLRvfKPsJPD_tBkDDWA2e6ZyobJQ&s",
    "rating": 4.7,
    "category": "Wrap"
  },
  {
    "name": "Peri Peri Chicken Wrap",
    "price": 220,
    "description": "A zesty peri-peri chicken wrap for a bold flavor experience.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsaFaLNKHa8wOqrD2TzHV5B-Qpps6foVx6gw&s",
    "rating": 4.8,
    "category": "Wrap"
  },





  // coffee shuru yaha se 


  {
    "name": "Latte",
    "price": 80,
    "description": "A smooth and creamy coffee made with steamed milk.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Caffe_Latte_at_Pulse_Cafe.jpg/1200px-Caffe_Latte_at_Pulse_Cafe.jpg",
    "rating": 4.5,
    "category": "Hot Coffee"
  },
  {
    "name": "Cappuccino",
    "price": 80,
    "description": "A rich espresso-based coffee topped with frothy milk foam.",
    "image": "https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA=",
    "rating": 4.6,
    "category": "Hot Coffee"
  },
  {
    "name": "Black Hot Coffee",
    "price": 80,
    "description": "A bold and robust black hot coffee.",
    "image": "https://www.shutterstock.com/image-photo/black-hot-coffee-glass-cup-260nw-218037010.jpg",
    "rating": 4.4,
    "category": "Hot Coffee"
  },
  {
    "name": "Hazelnut Hot Coffee",
    "price": 100,
    "description": "Hot coffee infused with aromatic hazelnut flavor.",
    "image": "https://shottbeverages.com/wp-content/uploads/2020/07/hazelnut_latte.jpg",
    "rating": 4.7,
    "category": "Hot Coffee"
  },
  {
    "name": "Mocha Hot Coffee",
    "price": 100,
    "description": "A perfect blend of espresso, chocolate, and steamed milk.",
    "image": "https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Mocha-1fc71f7.png?resize=768,574",
    "rating": 4.7,
    "category": "Hot Coffee"
  },
  {
    "name": "Caramel Hot Coffee",
    "price": 100,
    "description": "A sweet caramel-infused hot coffee for a rich experience.",
    "image": "https://shottbeverages.com/wp-content/uploads/2019/10/Salted-Caramel-Coffee-1.jpg",
    "rating": 4.6,
    "category": "Hot Coffee"
  },
  {
    "name": "Cold Coffee",
    "price": 120,
    "description": "A chilled coffee blended to perfection for a refreshing taste.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pltA2U43TSDjBfxH5oQ6wyne1-xVE5eJdg&s",
    "rating": 4.5,
    "category": "Hot Coffee"
  },
  {
    "name": "Black Cold Coffee",
    "price": 120,
    "description": "A refreshing black cold coffee with no milk.",
    "image": "https://www.simplyrecipes.com/thmb/7zYXgL4vpOhXfa04v7_vPO4Dv84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Cold-Brew-Coffee-LEAD-6-896c6872ac3e421ca4d88f29b528b349.jpg",
    "rating": 4.4,
    "category": "Hot Coffee"
  },
  {
    "name": "Cold Coffee With Ice Cream",
    "price": 150,
    "description": "Chilled coffee served with a scoop of creamy ice cream.",
    "image": "https://i.ytimg.com/vi/dKy5iSLe-Cg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCC8fwaDNNgrnuASIPa9E4h4sKKDQ",
    "rating": 4.8,
    "category": "Hot Coffee"
  },
  {
    "name": "Hazelnut Cold Coffee",
    "price": 150,
    "description": "Cold coffee blended with a smooth hazelnut flavor.",
    "image": "https://www.nestleprofessional.in/sites/default/files/2021-08/Hazelnut-Frappe.jpg",
    "rating": 4.7,
    "category": "Hot Coffee"
  },
  {
    "name": "Irish Cold Coffee",
    "price": 160,
    "description": "A creamy Irish-inspired cold coffee with a unique flavor.",
    "image": "https://www.ocean-glassware.com/wp-content/uploads/2023/12/weqwr.png",
    "rating": 4.8,
    "category": "Hot Coffee"
  },
  {
    "name": "Mocha Cold Coffee",
    "price": 160,
    "description": "A chilled mocha coffee blended with chocolate and coffee.",
    "image": "https://www.heinens.com/content/uploads/2022/05/Mocha-Iced-Coffee-with-Vanilla-Cold-Foam-800x550-1.jpg",
    "rating": 4.7,
    "category": "Hot Coffee"
  },
  {
    "name": "Caramel Cold Coffee",
    "price": 160,
    "description": "Cold coffee blended with sweet caramel syrup.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNzx7om1oiUUecVj-peJNmkOn2uF9B-jlZVw&s",
    "rating": 4.6,
    "category": "Hot Coffee"
  },
  {
    "name": "Nutella Cold Coffee",
    "price": 160,
    "description": "Cold coffee infused with rich and creamy Nutella.",
    "image": "https://www.aroundmyfamilytable.com/wp-content/uploads/2010/11/nutella-blended-coffee.jpg",
    "rating": 4.9,
    "category": "Hot Coffee"
  },
  {
    "name": "Sugar Free Cold Coffee",
    "price": 160,
    "description": "A delicious sugar-free cold coffee for health-conscious coffee lovers.",
    "image": "https://mir-s3-cdn-cf.behance.net/project_modules/hd/042264114246485.60377c9ca7fc9.jpg",
    "rating": 4.6,
    "category": "Hot Coffee"
  },





  {
    "name": "Mocha Cold Coffee",
    "price": 160,
    "description": "A chilled mocha coffee blended with chocolate and coffee.",
    "image": "https://images.ctfassets.net/v601h1fyjgba/5x572mICLA8SIK06LaRxV8/9cd38d07f301c1f62dae04246722c750/Iced_Cafe_Mocha.jpg",
    "rating": 4.7,
    "category": "Cold Coffee"
  },
  {
    "name": "Caramel Cold Coffee",
    "price": 160,
    "description": "Cold coffee blended with sweet caramel syrup.",
    "image": "https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Caramel-iced-coffee-f73307b.png?resize=768,574",
    "rating": 4.6,
    "category": "Cold Coffee"
  },













      // ICE CREAM SHURU YAHA SE

      {
        "name": "Vanilla",
        "price": 140,
        "description": "Classic vanilla ice cream shake with a rich and creamy texture.",
        "image": "https://static.toiimg.com/thumb/63971154.cms?width=573&height=430",
        "rating": 4.5,
        "category": "Ice-Creams"
      },
      {
        "name": "Strawberry",
        "price": 140,
        "description": "Deliciously sweet and tangy strawberry-flavored shake.",
        "image": "https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg",
        "rating": 4.6,
        "category": "Ice-Creams"
      },
      {
        "name": "Pineapple",
        "price": 140,
        "description": "Refreshing pineapple ice cream shake with a tropical twist.",
        "image": "https://wearenotmartha.com/wp-content/uploads/pineapple-ice-cream-featured-500x375.jpg",
        "rating": 4.4,
        "category": "Ice-Creams"
      },
      {
        "name": "Butter Scotch",
        "price": 140,
        "description": "Smooth and creamy butterscotch ice cream shake with a hint of caramel.",
        "image": "https://vaya.in/recipes/wp-content/uploads/2019/03/Butterscotch-Ice-Cream.jpg",
        "rating": 4.7,
        "category": "Ice-Creams"
      },
      {
        "name": "Mango",
        "price": 140,
        "description": "A luscious mango-flavored shake made with tropical sweetness.",
        "image": "https://www.funfoodfrolic.com/wp-content/uploads/2020/04/Mango-Ice-Cream-Thumbnail.jpg",
        "rating": 4.6,
        "category": "Ice-Creams"
      },
      {
        "name": "Banana",
        "price": 140,
        "description": "Thick and creamy banana shake, perfect for a healthy indulgence.",
        "image": "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/at%2Farchive%2Fc093b6c989030f71c0336df4b473b469e7a6dadb",
        "rating": 4.5,
        "category": "Ice-Creams"
      },
      {
        "name": "Kesar Elaichi",
        "price": 140,
        "description": "Exotic saffron and cardamom-flavored ice cream shake.",
        "image": "https://i.ytimg.com/vi/UVi--7-hhPI/maxresdefault.jpg",
        "rating": 4.8,
        "category": "Ice-Creams"
      },
      {
        "name": "Litchi",
        "price": 140,
        "description": "Light and fruity litchi shake with a floral aroma.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojQfZXJ4gtzGbZmHS6Mn4PTlpM7u8YbUkXQ&s",
        "rating": 4.3,
        "category": "Ice-Creams"
      },
      {
        "name": "Rose",
        "price": 140,
        "description": "A fragrant rose-flavored shake, delicate and refreshing.",
        "image": "https://rumkisgoldenspoon.com/wp-content/uploads/2022/05/Gulkand-icecream.jpg",
        "rating": 4.5,
        "category": "Ice-Creams"
      },
      {
        "name": "Chocolate",
        "price": 160,
        "description": "Rich and decadent chocolate ice cream shake for chocolate lovers.",
        "image": "https://www.allrecipes.com/thmb/qU9RzlqCysXOoaH-urHNCCQLXLs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-56803-very-chocolate-ice-cream-Beauties-4x3-0343db03e550403aaab1a0d52cbef744.jpg",
        "rating": 4.9,
        "category": "Ice-Creams"
      },
      {
        "name": "Mocha",
        "price": 160,
        "description": "A perfect blend of coffee and chocolate in a creamy ice cream shake.",
        "image": "https://i0.wp.com/thegreedyvegan.com/wp-content/uploads/2017/06/2017-June-3rd-Mocha-Ice-Cream-002-1.jpg?fit=1024%2C683&ssl=1",
        "rating": 4.8,
        "category": "Ice-Creams"
      },
      {
        "name": "Cookies 'n' Cream Brownie",
        "price": 160,
        "description": "Irresistible cookies 'n' cream shake with brownie chunks.",
        "image": "https://www.dixiecrystals.com/sites/default/files/recipe/cookies-and-cream-brownies-imperial.jpg",
        "rating": 4.9,
        "category": "Ice-Creams"
      },
      





      // CHICKEN KOO KOO




      {
        "name": "Chicken Manchurian (Dry/Gravy)",
        "price": 220,
        "description": "Delicious chicken chunks cooked in a savory Manchurian sauce, available in dry or gravy form.",
        "image": "https://orders.popskitchen.in/storage/2024/09/image-148.png",
        "rating": 4.5,
        "category": "Chicken Mains"
      },
      {
        "name": "Chilli Chicken (Dry/Gravy)",
        "price": 240,
        "description": "Spicy and tangy chilli chicken with bell peppers and onions, available in dry or gravy style.",
        "image": "https://palatesdesire.com/wp-content/uploads/2019/10/Chilli_chicken@palates_Desire-e1593266853471-scaled.jpg",
        "rating": 4.7,
        "category": "Chicken Mains"
      },
      {
        "name": "Crispy Chicken Salt & Pepper",
        "price": 240,
        "description": "Crispy fried chicken tossed with salt, pepper, and spices for a flavorful treat.",
        "image": "https://poshjournal.com/wp-content/uploads/2022/09/salt-and-pepper-chicken-wings-recipe-11.jpg",
        "rating": 4.6,
        "category": "Chicken Mains"
      },
      {
        "name": "Shredded Chicken in Hot Garlic Sauce",
        "price": 250,
        "description": "Tender shredded chicken cooked in a spicy hot garlic sauce, perfect for garlic lovers.",
        "image": "https://img.tastelife.tv/assets/uploads/2020/03/00533_Fish_Flavored_Shredded_Meat_Chef_John_thumb-s-684x464.jpg",
        "rating": 4.8,
        "category": "Chicken Mains"
      },
      {
        "name": "Drums Of Heaven",
        "price": 270,
        "description": "Juicy chicken drumsticks marinated and deep-fried, served with a flavorful sauce.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFhjARJtV9VpqjiobmUVAiQWLYAAR-BWKYw&s",
        "rating": 4.9,
        "category": "Chicken Mains"
      },









      // NODDELS 



      {
        "name": "Veg Hakka Noodles",
        "price": 160,
        "description": "Classic stir-fried noodles with fresh vegetables and flavorful seasoning.",
        "image": "https://myfoodstory.com/wp-content/uploads/2021/02/Vegetable-Hakka-Noodles-Restaurant-Style-3.jpg",
        "rating": 4.5,
        "category": "Noodles"
      },
      {
        "name": "Veg Chilli Garlic Noodles",
        "price": 170,
        "description": "Spicy and garlicky noodles tossed with assorted vegetables.",
        "image": "https://www.chefkunalkapur.com/wp-content/uploads/2021/12/Veg-Chowmein-scaled.jpg?v=1638771610",
        "rating": 4.6,
        "category": "Noodles"
      },
      {
        "name": "Veg Singapore Noodles",
        "price": 170,
        "description": "Flavorful and mildly spiced noodles with a mix of vegetables, inspired by Singaporean flavors.",
        "image": "https://www.thespruceeats.com/thmb/3TdiGRn4Pd-VD8JcY2Ze9pksXuY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-vegetarian-singapore-noodles-3377287-hero-01-ced8d353f39447ec88ba91b3664cd4a8.jpg",
        "rating": 4.4,
        "category": "Noodles"
      },
      {
        "name": "Veg Schezwan Noodles",
        "price": 180,
        "description": "Bold and spicy Schezwan noodles with fresh veggies and a tangy kick.",
        "image": "https://static.wixstatic.com/media/7e8cc5_f9a0269143bf49c0b78f53acc9a998ab~mv2.jpg/v1/fill/w_480,h_302,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7e8cc5_f9a0269143bf49c0b78f53acc9a998ab~mv2.jpg",
        "rating": 4.7,
        "category": "Noodles"
      },
      {
        "name": "Spl. Veg Pan Fried Noodles",
        "price": 200,
        "description": "Special pan-fried noodles topped with stir-fried vegetables in a savory sauce.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSY4fyycvlLOi4DU2UgwbDkj406QGfT0Ioig&s",
        "rating": 4.8,
        "category": "Noodles"
      },
      {
        "name": "Chicken Hakka Noodles",
        "price": 180,
        "description": "Classic Hakka-style noodles stir-fried with tender chicken and vegetables.",
        "image": "https://onestophalal.com/cdn/shop/articles/chicken_hakka_noodles-1699078321533_1200x.jpg?v=1699078384",
        "rating": 4.6,
        "category": "Noodles"
      },
      {
        "name": "Chicken Chilli Garlic Noodles",
        "price": 190,
        "description": "Spicy chilli garlic noodles with juicy chicken and a fiery flavor.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNklsnZWj0DFtwkWiZDfgxDZkvIKpgrO1mcg&s",
        "rating": 4.7,
        "category": "Noodles"
      },
      {
        "name": "Chicken Singapore Noodles",
        "price": 190,
        "description": "Mildly spiced Singaporean-style noodles with tender chicken pieces and fresh vegetables.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw15dre5oho0drWUvI9_55M_p3XxZD27hRxQ&s",
        "rating": 4.5,
        "category": "Noodles"
      },
      {
        "name": "Chicken Schezwan Noodles",
        "price": 200,
        "description": "Spicy Schezwan noodles cooked with tender chicken and bold seasonings.",
        "image": "https://i.ytimg.com/vi/0UCo7VY9oZ8/maxresdefault.jpg",
        "rating": 4.8,
        "category": "Noodles"
      },
      {
        "name": "Spl. Chicken Pan Fried Noodles",
        "price": 220,
        "description": "Special pan-fried noodles with chicken and vegetables, served in a savory sauce.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEdff0nnZ7Ci7bCddzONar71vr73shpDmdpw&s",
        "rating": 4.9,
        "category": "Noodles"
      },









      // SANDWHICH






      {
        "name": "Cheese Corn Sandwich",
        "price": 140,
        "description": "Grilled sandwich stuffed with creamy cheese and sweet corn.",
        "image": "https://i.pinimg.com/originals/eb/08/5b/eb085b071fc5614b8ad6e2b4e1fb0025.jpg",
        "rating": 4.5,
        "category": "Sandwhich"
      },
      {
        "name": "Paneer Tikka Sandwich",
        "price": 160,
        "description": "Flavorful sandwich filled with spiced paneer tikka and fresh veggies.",
        "image": "https://www.maggi.in/sites/default/files/styles/home_stage_944_531/public/srh_recipes/094e741f748730fae8c3742217c5fd58.jpg?h=51a72048&itok=lsraqM3R",
        "rating": 4.6,
        "category": "Sandwhich"
      },
      {
        "name": "Chicken Cheese Corn Sandwich",
        "price": 160,
        "description": "Grilled sandwich with tender chicken, cheese, and sweet corn.",
        "image": "https://static.toiimg.com/thumb/59320823.cms?width=1200&height=900",
        "rating": 4.7,
        "category": "Sandwhich"
      },
      {
        "name": "Chicken Tikka Sandwich",
        "price": 170,
        "description": "Grilled sandwich packed with juicy chicken tikka and spicy flavors.",
        "image": "https://images.kitchenstories.io/recipeImages/R1075-photo-final-4x3.jpg",
        "rating": 4.8,
        "category": "Sandwhich"
      },
      {
        "name": "Spicy Paneer Sandwich",
        "price": 170,
        "description": "A spicy delight with paneer and veggies in a perfectly grilled sandwich.",
        "image": "https://www.ruchikrandhap.com/wp-content/uploads/2017/09/Paneer-Corn-Spinach-Sandwich-4-1.jpg",
        "rating": 4.6,
        "category": "Sandwhich"
      },
      {
        "name": "Spicy Chicken Sandwich",
        "price": 180,
        "description": "Loaded with spicy chicken and fresh veggies, grilled to perfection.",
        "image": "https://assets.unileversolutions.com/recipes-v2/235926.jpg",
        "rating": 4.7,
        "category": "Sandwhich"
      },
      {
        "name": "Mushroom Delight Sandwich",
        "price": 180,
        "description": "Creamy and flavorful mushroom sandwich for a savory delight.",
        "image": "https://www.kitchennostalgia.com/images2/bread/baked-mushroom-sandwich2-w.jpg",
        "rating": 4.5,
        "category": "Sandwhich"
      },
      {
        "name": "Italian Veg Sandwich",
        "price": 180,
        "description": "Grilled sandwich filled with Italian-inspired veggies and cheese.",
        "image": "https://embed.widencdn.net/img/beef/wv2nsv14vg/1200x630px/italian-beef-and-roasted-vegetable-sandwich.tif?keep=c",
        "rating": 4.7,
        "category": "Sandwhich"
      },
      {
        "name": "Mushroom Delight Chicken Sandwich",
        "price": 190,
        "description": "Juicy chicken and mushrooms combined in a perfectly grilled sandwich.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1oNofHwVrw15zNU36jhPvWRh5WgtJdVX8LQ&s",
        "rating": 4.8,
        "category": "Sandwhich"
      },
      {
        "name": "Italian Chicken Sandwich",
        "price": 190,
        "description": "A delicious Italian-style sandwich with chicken and cheese.",
        "image": "https://www.cento.com/images/recipes/sandwiches/italian_grilled_chicken.jpg",
        "rating": 4.8,
        "category": "Sandwhich"
      },






      // MOMOS SHURU YAHA SE



      {
        name: "Veg Steam Momos",
        price: 100,
        description: "Steamed vegetable momos with a soft and delicious filling.",
        image: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
        rating: 4.5,
        category: "Momos",
      },
      {
        name: "Veg Fried Momos",
        price: 120,
        description: "Crispy fried vegetable momos served with spicy chutney.",
        image: "https://36parkstreet.in/wp-content/uploads/2024/02/10.-Veg-Fried-Momos-scaled.jpg",
        rating: 4.4,
        category: "Momos",
      },
      {
        name: "Paneer Steam Momos",
        price: 130,
        description: "Steamed momos filled with soft paneer and fresh vegetables.",
        image: "https://i.pinimg.com/474x/19/57/f5/1957f56fa8b3f789cfa2a54d1b057b0c.jpg",
        rating: 4.6,
        category: "Momos",
      },
      {
        name: "Paneer Fried Momos",
        price: 150,
        description: "Crunchy fried momos stuffed with spiced paneer filling.",
        image: "https://i0.wp.com/www.foodorderkar.com/wp-content/uploads/2022/10/263974.jpg?fit=641%2C478&ssl=1",
        rating: 4.7,
        category: "Momos",
      },
      {
        name: "Chicken Steam Momos",
        price: 130,
        description: "Juicy steamed momos filled with flavorful chicken stuffing.",
        image: "https://img-global.cpcdn.com/recipes/b72223cb45f18fc7/1200x630cq70/photo.jpg",
        rating: 4.8,
        category: "Momos",
      },
      {
        name: "Chicken Fried Momos",
        price: 150,
        description: "Crispy fried chicken momos with a savory and spicy filling.",
        image: "https://salasdaily.com/cdn/shop/products/chicken_fried_momos.webp?v=1667534046",
        rating: 4.9,
        category: "Momos",
      },







      // VEG MAINS


      {
        name: "Veg Manchurian (Dry/Gravy)",
        price: 190,
        description: "Delicious vegetable Manchurian balls served in a choice of dry or gravy sauce.",
        image: "https://www.yummytummyaarthi.com/wp-content/uploads/2022/08/veg-manchurian-1.jpeg",
        rating: 4.6,
        category: "Veg Mains",
      },
      {
        name: "Chilli Paneer (Dry/Gravy)",
        price: 220,
        description: "Spicy and tangy paneer tossed with bell peppers and onions, available in dry or gravy.",
        image: "https://i.ytimg.com/vi/0p7N5MSAnjE/maxresdefault.jpg",
        rating: 4.7,
        category: "Veg Mains",
      },
      {
        name: "Chilli Mushroom (Dry)",
        price: 220,
        description: "Crispy mushrooms tossed in a spicy and tangy chilli sauce, served dry.",
        image: "https://www.sailusfood.com/wp-content/uploads/2016/02/how-to-make-chilli-mushroom.jpg",
        rating: 4.5,
        category: "Veg Mains",
      },
      {
        name: "Crispy Corn Salt & Pepper",
        price: 220,
        description: "Crispy fried corn tossed with salt, pepper, and spices for a crunchy delight.",
        image: "https://jeyporedukaan.in/wp-content/uploads/2022/09/images-23.jpeg",
        rating: 4.8,
        category: "Veg Mains",
      },
      {
        name: "Mix Veg in Hot Garlic Sauce",
        price: 230,
        description: "Fresh mixed vegetables cooked in a spicy and flavorful hot garlic sauce.",
        image: "https://i.ytimg.com/vi/eBpuf_UFXR4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDpLq2ZBj7t16lcfEBtg8-EZDOzZQ0",
        rating: 4.9,
        category: "Veg Mains",
      },






















      // SOUP START


      {
        name: "Veg Soup",
        price: 100,
        description: "A light and healthy vegetable soup, perfect for a warm start to your meal.",
        image: "https://downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main-500x375.jpg",
        rating: 4.5,
        category: "Soup",
      },
      {
        name: "Veg Sweet Corn Soup",
        price: 120,
        description: "A creamy and flavorful sweet corn soup with fresh vegetables.",
        image: "https://images.slurrp.com/prod/recipe_images/transcribe/soup/Vegetarian-sweet-corn-soup.webp",
        rating: 4.6,
        category: "Soup",
      },
      {
        name: "Veg Hot & Sour Soup",
        price: 130,
        description: "A spicy and tangy soup loaded with vegetables, ideal for spice lovers.",
        image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Veg-Hot-and-Sour-Soup-1300x867.jpg?v=1619881505",
        rating: 4.7,
        category: "Soup",
      },
      {
        name: "Chicken Soup",
        price: 130,
        description: "A comforting and nourishing chicken soup with a light broth.",
        image: "https://www.allrecipes.com/thmb/QY6AjATjkvsNdpUfDNEcQhkHsj8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8814-homemade-chicken-soup-DDMFS-beauty-4x3-31640-924adc63a78543a7822c5704727f6e4b.jpg",
        rating: 4.8,
        category: "Soup",
      },
      {
        name: "Chicken Hot & Sour Soup",
        price: 140,
        description: "A spicy and tangy chicken soup with a rich, bold flavor.",
        image: "https://www.chilitochoc.com/wp-content/uploads/2021/01/chinese-hot-and-sour-soup-sq.jpg",
        rating: 4.7,
        category: "Soup",
      },
      {
        name: "Chicken Talumein Soup",
        price: 150,
        description: "A hearty chicken soup with noodles, fresh veggies, and aromatic spices.",
        image: "https://www.bitensip.com/wp-content/uploads/2023/05/talumein-soup-1024x614.jpg",
        rating: 4.9,
        category: "Soup",
      },
























      // FRENCH FRIES




      {
        name: "French Fries",
        price: 100,
        description: "Classic crispy and golden fries, lightly salted for the perfect crunch.",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/french-fries-recipe.jpg",
        rating: 4.5,
        category: "Crunchy",
      },
      {
        name: "Peri Peri Fries",
        price: 120,
        description: "Crispy fries tossed with spicy and tangy peri peri seasoning.",
        image: "https://vanlavino.com/wp-content/uploads/2024/07/67268.jpg",
        rating: 4.6,
        category: "Crunchy",
      },
      {
        name: "Cheese Corn Nuggets",
        price: 140,
        description: "Golden nuggets stuffed with melted cheese and sweet corn for a cheesy delight.",
        image: "https://ik.imagekit.io/dunzo/tr:w-$w$,h-$h$,cm-pad_resize/1615716403767_product_5ef4a8077b2b3a5f85796a2e_1.jpg",
        rating: 4.7,
        category: "Crunchy",
      },
      {
        name: "Peri Peri Paneer Pops",
        price: 160,
        description: "Crispy paneer bites seasoned with spicy peri peri flavors.",
        image: "https://akshayakalpa.org/wp-content/uploads/2021/06/Paneer-Pop-Corn.jpg",
        rating: 4.6,
        category: "Crunchy",
      },
      {
        name: "Chicken Nuggets",
        price: 160,
        description: "Tender chicken nuggets, crispy on the outside and juicy inside.",
        image: "https://static.toiimg.com/thumb/83114901.cms?width=1200&height=900",
        rating: 4.8,
        category: "Crunchy",
      },
      {
        name: "Chicken Popcorn",
        price: 170,
        description: "Bite-sized crispy chicken popcorn, seasoned to perfection.",
        image: "https://anits-sds.in/wp-content/uploads/2024/03/Popcorn-Chicken.jpg",
        rating: 4.7,
        category: "Crunchy",
      },
      {
        name: "Peri Peri Chicken Popcorn",
        price: 190,
        description: "Spicy peri peri flavored crispy chicken popcorn for a zesty treat.",
        image: "https://i.ytimg.com/vi/GGLiAgllU4w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLrok8jv91R6Ih0BEE16czTHF74w",
        rating: 4.8,
        category: "Crunchy",
      },


      











      // CHAWAL


      {
        name: "Veg Fried Rice",
        price: 160,
        description: "Classic fried rice with fresh vegetables and aromatic seasonings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEp5Y50RpgvgZNlooh7aHP7YsYOZpMI7zgQ&s",
        rating: 4.5,
        category: "Rice",
      },
      {
        name: "Chilli Garlic Fried Rice",
        price: 170,
        description: "Spicy fried rice with a punch of garlic and green chillies.",
        image: "https://www.mirchitales.com/wp-content/uploads/2020/09/Chilli-Garlic-Fried-Rice-1.jpg",
        rating: 4.6,
        category: "Rice",
      },
      {
        name: "Singapore Fried Rice",
        price: 170,
        description: "Aromatic fried rice with a mix of vegetables and light spices in Singaporean style.",
        image: "https://vaya.in/recipes/wp-content/uploads/2018/03/Chicken-Singaporean-Fried-Rice.jpg",
        rating: 4.5,
        category: "Rice",
      },
      {
        name: "Schezwan Fried Rice",
        price: 180,
        description: "Fried rice with spicy Schezwan sauce and stir-fried vegetables.",
        image: "https://www.maggi.in/sites/default/files/srh_recipes/f6f14791459d6873db11a54ee5deea60.jpg",
        rating: 4.7,
        category: "Rice",
      },
      {
        name: "Spl. Veg Pan Fried Rice",
        price: 200,
        description: "Special pan-fried rice with assorted vegetables and unique flavors.",
        image: "https://jeyporedukaan.in/wp-content/uploads/2022/09/delish-fried-rice-020-1543875572-scaled.jpg",
        rating: 4.8,
        category: "Rice",
      },
      {
        name: "Chicken Fried Rice",
        price: 180,
        description: "Delicious fried rice with tender chicken pieces and savory flavors.",
        image: "https://www.simplyrecipes.com/thmb/YfkXPHA8n_Pbyz7-tMIqn3O4NrU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__12__2017-12-Chicken-Fried-Rice-2-15ac7014b47b40a1a7c7e20a638f4295.jpg",
        rating: 4.6,
        category: "Rice",
      },
      {
        name: "Chicken Chilli Garlic Fried Rice",
        price: 190,
        description: "Spicy and flavorful fried rice with garlic and tender chicken pieces.",
        image: "https://www.spicebangla.com/wp-content/uploads/2024/10/Garlic-Chicken-Fried-Rice01.webp",
        rating: 4.7,
        category: "Rice",
      },
      {
        name: "Chicken Singapore Fried Rice",
        price: 190,
        description: "Singapore-style fried rice with tender chicken and light spices.",
        image: "https://images.mrcook.app/recipe-image/019336b9-33aa-72d5-b40e-919554d5032a",
        rating: 4.7,
        category: "Rice",
      },
      {
        name: "Chicken Schezwan Fried Rice",
        price: 200,
        description: "Schezwan-style fried rice with spicy chicken pieces and aromatic spices.",
        image: "https://ik.imagekit.io/fpcle7dmn/images/thumbs/0021207_schezwan-chicken-fried-rice.jpeg",
        rating: 4.8,
        category: "Rice",
      },
      {
        name: "Spl. Chicken Pan Fried Rice",
        price: 220,
        description: "Special pan-fried rice with tender chicken and premium flavors.",
        image: "https://i.ytimg.com/vi/cLEgLVtq_R0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5-4cz_XTcxh2kRYLweckbYTOGyg",
        rating: 4.9,
        category: "Rice",
      },






      // MOCKTAILS 


      {
        "name": "Fresh Lime Soda",
        "price": 100,
        "description": "Refreshing lime soda, perfect for cooling off.",
        "image": "https://www.simplyrecipes.com/thmb/GyqvOSgknja9GvTVUUP-0YYCsk0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes--Cucumber-Salted-Lime-Soda-LEAD-8-c9bb7df81d9241a4a1b4c499445a87bc.jpg",
        "rating": 4.2,
        "category": "Mocktail"
      },
      {
        "name": "Sugar Free Fresh Lime",
        "price": 120,
        "description": "A sugar-free version of classic lime soda.",
        "image": "https://www.shutterstock.com/image-photo/refreshing-sugar-free-beverage-made-260nw-1144681835.jpg",
        "rating": 4.3,
        "category": "Mocktail"
      },
      {
        "name": "Blue Lagoon",
        "price": 120,
        "description": "A tangy and sweet blue lagoon mocktail.",
        "image": "https://drinksgeek.com/wp-content/uploads/2022/07/Blue-Lagoon-cocktail.jpg",
        "rating": 4.5,
        "category": "Mocktail"
      },
      {
        "name": "Kiwi Shooter",
        "price": 120,
        "description": "A refreshing kiwi shooter drink.",
        "image": "https://insanelygoodrecipes.com/wp-content/uploads/2021/10/Refreshing-Kiwi-Mojito-Cocktail-with-Mint.jpg",
        "rating": 4.4,
        "category": "Mocktail"
      },
      {
        "name": "Mango Shooter",
        "price": 120,
        "description": "Delightful mango shooter for a tropical vibe.",
        "image": "https://www.mango.org/wp-content/uploads/2020/11/ShrimpShooters.jpeg",
        "rating": 4.5,
        "category": "Mocktail"
      },
      {
        "name": "Green Apple Shooter",
        "price": 120,
        "description": "Crisp green apple shooter with a tangy kick.",
        "image": "https://www.thecocktailproject.com/sites/default/files/styles/recipe_slider_img/public/Caramel_Apple_Shot_MG_6444_Crop.jpg.webp?itok=2AW0OEt8",
        "rating": 4.4,
        "category": "Mocktail"
      },
      {
        "name": "Strawberry Shooter",
        "price": 120,
        "description": "Sweet strawberry shooter with a refreshing flavor.",
        "image": "https://irepo.primecp.com/2015/09/238435/Strawberry-Swirl-Dessert-Shooters_ExtraLarge1000_ID-1212583.jpg?v=1212583",
        "rating": 4.5,
        "category": "Mocktail"
      },
      {
        "name": "Pineapple Shooter",
        "price": 120,
        "description": "Tropical pineapple shooter with a sweet and tangy taste.",
        "image": "https://www.dolesunshine.com/wp-content/uploads/sites/2/2023/06/pineapple-coconut-cooler-shots-large.jpeg",
        "rating": 4.5,
        "category": "Mocktail"
      },
      {
        "name": "Black Currant Shooter",
        "price": 120,
        "description": "Rich black currant shooter with bold flavors.",
        "image": "https://www.shutterstock.com/image-photo/black-currant-cocktail-berries-selective-260nw-291105440.jpg",
        "rating": 4.6,
        "category": "Mocktail"
      },
      {
        "name": "Ice Tea Lemon",
        "price": 120,
        "description": "Refreshing lemon-flavored iced tea.",
        "image": "https://static.toiimg.com/thumb/84339280.cms?imgsize=327880&width=800&height=800",
        "rating": 4.3,
        "category": "Mocktail"
      },
      {
        "name": "Ice Tea Peach",
        "price": 160,
        "description": "Sweet and flavorful peach iced tea.",
        "image": "https://www.thespruceeats.com/thmb/jk3sZ3Jtq2WPnd31DrB-FR1qfs0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/summer-peach-tea-cocktail-recipe-761506-hero-01-f949acc1ed22404da03ce72648412bcf.jpg",
        "rating": 4.4,
        "category": "Mocktail"
      },
      {
        "name": "Virgin Mint Mojito",
        "price": 160,
        "description": "A refreshing mint mojito without alcohol.",
        "image": "https://sodastream.sg/cdn/shop/articles/Virgin_Mojito_Mocktail_Recipe_720x.jpg?v=1694760601",
        "rating": 4.5,
        "category": "Mocktail"
      },
      {
        "name": "Watermelon Mojito",
        "price": 160,
        "description": "A sweet and refreshing watermelon mojito.",
        "image": "https://jennifercooks.com/wp-content/uploads/2024/06/IMG_0684-copy.jpg",
        "rating": 4.6,
        "category": "Mocktail"
      }
     


      
  // ...your food items data (same as before)
];


// FoodGrid Component
const FoodGrid = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Static categories (can be combined with dynamic ones)
  const staticCategories = [
    "All","Veg Pizza",  "Non-Veg Pizza",  "Burger", "Noodles", "Mocktail", "Hot Coffee", "Ice-Creams",
       "Wrap", "Sandwhich", "Veg Mains", "Chicken Mains", "Soup", "Momos","Crunchy","Rice"
  ];

  // Dynamic categories derived from food items
  const dynamicCategories = ["All",...new Set(foodItems.map((item) => item.category))];

  // Merge static and dynamic categories
  const categories = Array.from(new Set([...staticCategories, ...dynamicCategories]));

  // Filtered food items based on category and search query
  const filteredFoodItems = foodItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🍽️ Find the Best Food
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for food..."
          className="w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Filter Section */}
      <div className="mb-8">
  <div className="hidden sm:flex flex-wrap justify-center gap-3">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`px-5 py-2 text-sm font-semibold rounded-full shadow-md transition-all duration-300 
          ${
            selectedCategory === category
              ? "bg-green-500 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-green-400 hover:text-white"
          }`}
      >
        {category}
      </button>
    ))}
  </div>

  {/* Slider for small devices */}
  <div className="flex sm:hidden overflow-x-auto p-4 space-x-3 scrollbar-hide">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`min-w-max px-5 py-2 text-sm font-semibold rounded-full shadow-md transition-all duration-300 
          ${
            selectedCategory === category
              ? "bg-green-500 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-green-400 hover:text-white"
          }`}
      >
        {category}
      </button>
    ))}
  </div>
</div>


      {/* Food Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFoodItems.length > 0 ? (
          filteredFoodItems.map((item, index) => (
            <FoodCard key={index} {...item} onAddToCart={onAddToCart} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No items found.
          </p>
        )}
      </div>
    </div>
  );
};

export default FoodGrid;






// import React, { useState } from "react";
// import FoodCard from "./FoodCard";

// // Food Items Array
// const foodItems = [
//   {
//     name: "Onion Pizza",
//     price: 150,
//     description: "A delicious pizza topped with fresh onions for a delightful flavor.",
//     image: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740",
//     rating: 4.5,
//     category: "Pizza",
//   },
//   {
//     name: "Margherita Pizza",
//     price: 130,
//     description: "A classic Italian pizza topped with fresh tomatoes.",
//     image: "https://img.freepik.com/free-photo/view-arugula-pizza-with-cheese_23-2148574280.jpg?w=996",
//     rating: 4.2,
//     category: "Pizza",
//   },
//   {
//     name: "Chicken Burger",
//     price: 200,
//     description: "Juicy chicken patty served with fresh veggies in a toasted bun.",
//     image: "https://img.freepik.com/free-photo/classic-burger-with-cheese-lettuce-tomato-wooden-board_2829-13801.jpg?w=996",
//     rating: 4.7,
//     category: "Burger",
//   },
//   {
//     name: "Spicy Noodles",
//     price: 120,
//     description: "Hot and spicy noodles served with fresh vegetables.",
//     image: "https://img.freepik.com/free-photo/asian-noodle-with-chopsticks_1203-2535.jpg?w=996",
//     rating: 4.3,
//     category: "Noodles",
//   },
//   // Additional food items...
// ];

// // FoodGrid Component
// const FoodGrid = ({ onAddToCart }) => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Static categories (can be combined with dynamic ones)
//   const staticCategories = [
//     "All",
//     "Pizza",
//     "Burger",
//     "Noodles",
//     "Snacks",
//     "Hot Coffee",
//     "Ice-Creams",
//     "Wrap",
//     "Sandwich",
//     "Veg Mains",
//     "Chicken Mains",
//     "Soup",
//     "Momos",
//     "Crunchy",
//     "Rice",
//   ];

//   // Dynamic categories derived from food items
//   const dynamicCategories = ["All", ...new Set(foodItems.map((item) => item.category))];

//   // Merge static and dynamic categories
//   const categories = Array.from(new Set([...staticCategories, ...dynamicCategories]));

//   // Filtered food items based on category and search query
//   const filteredFoodItems = foodItems.filter((item) => {
//     const matchesCategory =
//       selectedCategory === "All" || item.category === selectedCategory;
//     const matchesSearch = item.name
//       .toLowerCase()
//       .includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
//         🍽️ Find the Best Food
//       </h1>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search for food..."
//           className="w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
//       </div>

//       {/* Filter Section */}
//       <div className="flex flex-wrap justify-center gap-3 mb-8">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-5 py-2 text-sm font-semibold rounded-full shadow-md transition-all duration-300 
//               ${
//                 selectedCategory === category
//                   ? "bg-green-500 text-white shadow-lg scale-105"
//                   : "bg-gray-200 text-gray-700 hover:bg-green-400 hover:text-white"
//               }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Food Items Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredFoodItems.length > 0 ? (
//           filteredFoodItems.map((item, index) => (
//             <FoodCard key={index} {...item} onAddToCart={onAddToCart} />
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No items found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodGrid;
