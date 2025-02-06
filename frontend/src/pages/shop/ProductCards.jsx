import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../components/RatingStars";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const CartModal = ({ products, isOpen, onClose }) => {
  const dispatch = useDispatch();

const handleRemove = (e, id) => {
  e.preventDefault();
  dispatch(removeFromCart({id}))
}

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatching addToCart action
  };



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div key={index} className="product__card">
          <div className="relative">
            <Link to={`/shop/${product._id}`}>
              <img
                className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
                src={product.image}
                alt={product.title}
              />
            </Link>

            <div className="hover:block absolute top-3 right-3">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering parent link
                  handleAddToCart(product); // Add product to the cart
                }}
              >
                <i onClick={(e) => handleRemove(e, item.id)}
 className="ri-shopping-bag-4-line bg-primary p-1.5 text-white hover:bg-primary-dark"></i>
              </button>
            </div>
          </div>

          {/* Product Description */}
          <div className="product__card__content">
            <h4>{product.name}</h4>
            <p>
              ${product.price}
              {product.oldPrice && <s> ${product.oldPrice}</s>}
            </p>
            <RatingStars rating={product.rating} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartModal;
