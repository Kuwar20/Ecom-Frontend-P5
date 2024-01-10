import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";
import { RiH1 } from "react-icons/ri";

const cartItems = [
    {
        productId: "alf;ga",
        photo: "https://m.media-amazon.com/images/I/618d5bS2lUL._SX466_.jpg",
        name: "Macbook Pro",
        price: 1000,
        quantity: 2,
        stock: 20,
    },
];
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges;

const Cart = () => {
    const [couponCode, setCouponCode] = useState<string>("");
    const [isValidcouponCode, setIsValidCouponCode] = useState<boolean>(false);

    useEffect(() => {
        const timeOutID = setTimeout(() => {
            if (Math.random() > 0.5) {
                setIsValidCouponCode(true);
            } else {
                setIsValidCouponCode(false);
            }
        }, 1000);
        return () => {
            clearTimeout(timeOutID);
            setIsValidCouponCode(false);
        };
    }, [couponCode]);

    return (
        <div className="cart">
            <main>
                {cartItems.length > 0 ? cartItems.map((i, idx) => (
                    <CartItem key={idx} cartItem={i} />
                )): <h1>No Items Added</h1> }
            </main>
            <aside>
                <p>Subtotal: ₹{subtotal}</p>
                <p>Shipping Charges: ₹{shippingCharges}</p>
                <p>Tax: ₹{tax}</p>
                <p>
                    Discount: <em className="red"> - ₹{discount} </em>
                </p>
                <p>
                    <b>Total: {total} </b>
                </p>
                <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                />
                {couponCode &&
                    (isValidcouponCode ? (
                        <span className="green">
                            ₹{discount} off using the <code>{couponCode}</code>
                        </span>
                    ) : (
                        <span className="red">
                            Invalid Coupon
                            <VscError />
                        </span>
                    ))}
                {
                    cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
                }
            </aside>
        </div>
    );
};

export default Cart;
