import { collection, getDocs, getDoc, doc, addDoc } from "firebase/firestore";
import { db } from "./firebase-config"; 

export const getProducts = async () => {
    const CollectionRef = collection(db, "Items");
    const data = await getDocs(CollectionRef);
    const products = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    return products;
};


export const getProductById = async (id) => {
    const docRef = doc(db, "Items", id);
    const drink = await getDoc(docRef);
    return drink
}

export const addProduct = async (product, id, quantity) => {
    let order = {
        ...product,
        id: id,
        quantity: quantity
    }
    const CollectionRef = collection(db, "Orders");
    addDoc(CollectionRef, order)
}

// export const updateProduct = async (product, id) => {
    
// }