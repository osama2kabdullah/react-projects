# Kabir Inventory
### [Click to visit live site](https://kabirs-inventory.web.app/)

## Features and Functionality
***
* As you visit site you can see some products but you cannot visit product detail page without login or register, when you want to visit a product page or manage stock page you redirect to the login page. You can login with email, password and google and redister the some methods only.
* when you logged in as user you can now add new products and can mofify or delte thats product only. you cannot delete, modify others products that you dont added. press deleverd button in product detail page the product quantity decrese. in the above a input form can help you produce more product quantity. the modified changes also save to he databse. so that you never lose your products that you addedn or changes.
* once you logged out you cannot see the products that you added as logged in. and you cannot any changes without loggin.
* login and register error handleing nad reste password send and email confirmation link send your email address.

## technolgy that used
***
1. Tailwind - for UI design
2. react router dom - for routing page to page that make it a single page application
3. firebase authentication - for users authentication login and register
4. firebase hosting - for host live site
5. Node.js - for back-end environment
6. mongodb - for database
### npm - node pakage manager
7. react-toastify - for visually show work
8. react-helmet
9. react-firebase-hooks
10. environment varible for safe firebase data

## Bug
***
1. when I added a new product The product showing in ui but the product have not (_id). so, when I trying to delte but not reloading page the product vcannot delte, becouse the roduct have no (_id). when I reload page this product now load from db and db set a Id for this product. so, after loading trying to delte it successfully deleted. how can I delte this product without loading page.
