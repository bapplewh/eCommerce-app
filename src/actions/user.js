import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from "./types";


export function signIn({ email, password }) {
    return ({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: "Milo Applewhite",
                address: "1234 Any Street",
                cartProducts: []
            } 
        }
    })
}

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
                _id: 0,
                product: {
                    _id: 0,
                    title: "Javascript in the Browser",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa eros, blandit quis pellentesque porta, consequat id purus. Nunc sed fringilla nisi, at congue justo. Nulla vitae nunc consequat, tempor nulla eget, auctor dolor.",
                    price: 1.99,
                    belongsTo: [0, 1],
                    imageUrl: "http://via.placeholder.com/80x80"
                },
                quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                    title: "Graph Database",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent massa eros, blandit quis pellentesque porta, consequat id purus. Nunc sed fringilla nisi, at congue justo. Nulla vitae nunc consequat, tempor nulla eget, auctor dolor.",
                    price: 1.99,
                    belongsTo: [0, 6],
                    imageUrl: "http://via.placeholder.com/80x80"
                },
                quantity: 1
            }
        ]
    })
}


export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total:  19.40,
                orderNumber: "A93045843",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Brooke Barker",
                    shippingAddress: "1234 Any Street"
                }
            },
            {
                _id: 1,
                total:  10.50,
                orderNumber: "G89745298",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Mr. Milo",
                    shippingAddress: "9876 Any Street"
                }
            },
            {
                _id: 2,
                total:  4.78,
                orderNumber: "KO8093749",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "User 789",
                    shippingAddress: "8976 Any Street"
                }
            },
            {
                _id: 3,
                total:  25.92,
                orderNumber: "JK90374320",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "David Apples",
                    shippingAddress: "2317 Marion Street"
                }
            },
            {
                _id: 4,
                total:  8.02,
                orderNumber: "Y98374290",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Camille Apples",
                    shippingAddress: "987 Magnolia Avenue"
                }
            },
            {
                _id: 5,
                total:  9.05,
                orderNumber: "A89073409",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Mitch Barker",
                    shippingAddress: "1234 Any Street"
                }
            },
            {
                _id: 6,
                total:  29.90,
                orderNumber: "C098374209",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Alex Johnson",
                    shippingAddress: "9867 Denver Road"
                }
            },
            {
                _id: 7,
                total:  2.72,
                orderNumber: "G89237408",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Max User",
                    shippingAddress: "2343 Denver Road"
                }
            }
        ]
    })
}