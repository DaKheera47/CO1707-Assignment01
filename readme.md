# UCLan Student Shop -- README

Authored by Shaheer Sarfaraz - G21011528, 2022

# Shared Features
1. ### Footer
	- Displays the links available to click to
	- Shows the UCLan Student Union contact information
	- Shows the Location of the UCLan Student Union
	- The footer is responsive for smaller devices
2. ### Navbar
	- Displays available links to click to
	- Displays the UCLan Logo
	- This element is also responsive, and transforms to a hamburger menu when on smaller devices

# Home Page
- Gives a precise description of the UCLan Student Shop 
- Has a video hosted on Youtube being displayed on the page using an `iframe`
- Has a video hosted locally being displayed using a `video` tag

# Products Page
- Lists all the products available to purchase in the UCLan Student Shop
- Allows a visitor to scroll to a specific product category
- Allows a visitor to add an item to the cart 
- Allows a visitor to view more details about a product
- Shows a scroll to top button when the page has been scrolled

# Item Page
- Shows one item in detail
- The product to be shown is loaded using the `sessionStorage`object in JavaScript, and is saved for the current browser session

# Cart Page
- Shows all items added to the cart by the visitor
- The cart items are loaded from the `localStorage` object in JavaScript which is saved until manually cleared by the user
- A visitor has the option of removing all things or just one in particular
- The cart total is calculated and displayed
- When there are no items in the cart, the checkout button is disabled and an appropriate message is displayed, which is excellent for the user experience