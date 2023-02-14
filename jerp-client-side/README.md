# Jerp - a manufacturer company in shiromoni
### [Click to visit site!](https://jerpmanufacturer-osama.netlify.app/) and [server site repository](https://github.com/osama2kabdullah/jerp-server)
<br/>

## Description
---
A manufacturer company website. they sales huge number of products at a time. The website not a indivitual shopping platform. this a dealer type site. Admin and User contribution type site.
<br/>

## System and Functionalities 
---
* Login and signup system with with firebase 
* Admin/User authorization system with JWT token
* Admin can add new product, Update product, Delete product, Make user admin, block any user but Cannot block another admin.
* The user dosent authorized like an admin. User can order product then pay that and can cancel order only before pay.
* Admin can manage orders what paid and unpaid.
* User cannot buy under the limitation of product buy limit and cannot buy over the availbale products and also cannot buy stock out products. It contros by tarnary operator.
* User can reset password if frogotted.
* User and Admin both are edit there profile, such as - add avatar, home address etc essential info. 
* User can add a review but admin cannot this and admin cannot also buy any product.

## Technolgies
---
1. React 18.2.0 - Frontend library
2. firebase 9.11.0 - authentication
3. Node.js 16.16.0 - backend
3. Talwind 3.1.8 - design
4. stripe 1.39.0 - payment intigration
##### Pakages
5. daisyUI 2.31.0 & flowbite 1.5.3 - design component
6. react hook form 7.37.0 - form management
7. react firebase hooks 5.0.3 - firebase authentication simpliefied
8. react helmet 6.1.0 - dynamic page title
9. react query 3.39.2 - call api for load data from database
10. react router dom 6.4.2 - for routing page to page without reload
