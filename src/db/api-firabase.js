import { collection, getDocs, getDoc, doc, updateDoc, addDoc} from "firebase/firestore";
import { db } from "./firebase-config"; 


export const getProducts = async () => {
    const CollectionRef = collection(db, "Items");
    const data = await getDocs(CollectionRef);
    const drinks = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    return drinks;
};

export const getProductById = async (id) => {
    const docRef = doc(db, "Items", id);
    const drink = await getDoc(docRef);
    return drink
}

export const updateProducts = async (products) => {
    for (let i = 0; i < products.length; i++) {
        const docRef = doc(db, "Items", products[i].id);
        await updateDoc(docRef, {
            stock: products[i].stock - products[i].quantity
        });
    }
}

export const createOrder = async (order) => {
    const docRef = collection(db, "Orders");
    return await addDoc(docRef, order);
}
