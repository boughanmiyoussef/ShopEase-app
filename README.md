# ShopEase Portfolio Project 🛍️

ShopEase is a simple e-commerce platform designed for seamless shopping experiences. Our MVP (Minimum Viable Product) includes essential features such as user registration, product browsing, cart management, and order tracking.

## 🚀 Features

### User Stories
The MVP addresses the following key user stories:

- **As a user**, I want to register and log in to my account so I can purchase items and track my orders.
- **As a user**, I want to search for products by name and filter by category so I can easily find what I need.
- **As a user**, I want to add items to my cart so I can review and purchase them later.
- **As a user**, I want to track the status of my orders so I know when my items are shipped.

## 📑 Table of Contents
1. [Installation](#installation)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [Mockups](#mockups)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## 💻 Installation

### Prerequisites
Ensure you have the following tools installed on your machine:

- **Node.js**: For backend development.
- **MySQL**: For storing user and product data.

### Steps to Set Up the Project Locally:
1. Clone the repository:
    ```bash
    git clone https://github.com/boughanmiyoussef/ShopEase-App.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ShopEase
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up your MySQL database and create a `.env` file with the following content:
    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=shopease
    ```
5. Run the application:
    ```bash
    npm start
    ```
6. Open the app at [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Technologies Used
- **Frontend**: HTML, CSS, JavaScript, React.js, Material UI, Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens) for secure logins

## 📝 Features
- **User Registration & Login**: Users can create an account and sign in to place orders.
- **Product Search & Filters**: Users can search and filter products by name, category, and price.
- **Shopping Cart**: Allows users to manage items before checkout.
- **Order Tracking**: Users can view their order status (Pending, Shipped, Delivered).
- **Order History**: View past orders and track status.

## 🖼️ Mockups
1. **User Registration Page**
   - Fields: Username, Email, Password
   - CTA: Sign Up
2. **Product Search and Filter Page**
   - Search bar for keywords
   - Filters for price range, category, and ratings
3. **Product Details Page**
   - Product Image, Description, Price
   - Add to Cart Button
4. **Shopping Cart Page**
   - Displays all items in the cart, total cost, and options to modify quantity or remove products
   - Checkout Button
5. **Checkout Page**
   - Form to input shipping and payment info
   - Order Summary
6. **Order Tracking Page**
   - Shows order status: Pending, Processing, Shipped, Completed

## 🔧 Usage
- **Sign Up**: Register a new user account.
- **Browse Products**: Search for products or filter by category.
- **Add to Cart**: Add products to your cart for checkout.
- **Proceed to Checkout**: Complete your order with shipping details.
- **Track Orders**: View and track the status of your placed orders.

## 💡 Contributing
Contributions are welcome! Here’s how you can contribute:
1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Commit your changes:
    ```bash
    git commit -am 'Add new feature'
    ```
4. Push the branch:
    ```bash
    git push origin feature-branch
    ```
5. Create a Pull Request.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Hashtags**: #ShopEase #ECommerce #OnlineShopping #NodeJS #MySQL #JWT #WebApp #ShoppingCart #UserExperience