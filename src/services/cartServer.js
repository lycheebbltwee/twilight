import firestore from "../firebase";
import { updateDoc, deleteField } from "firebase/firestore";

export const addItemToCart = async (newItem) => {
    const collectionRef = firestore.collection("cart");
    const docRef = collectionRef.doc("xt6Sy6u1sXGqQokwbDIO");
    let querySnap = await docRef.get();
    const { items } = querySnap.data();

    if (items.some((item) => item.id === newItem.id)) {
        const index = items.findIndex((item) => item.id === newItem.id);
        const foundItem = items[index];
        foundItem.quantity += 1;
        items[index] = foundItem;
        await docRef.set({ items: [...items] });
    } else {
        newItem.quantity = 1;
        await docRef.set({ items: [...items, newItem] });
    }

    querySnap = await docRef.get();
    const { items: updatedItems } = querySnap.data();
    return updatedItems;
};

export const updateCartItemQty = async (productId, newQty) => {
    const collectionRef = firestore.collection("cart");
    const docRef = collectionRef.doc("xt6Sy6u1sXGqQokwbDIO");
    let querySnap = await docRef.get();
    const { items } = querySnap.data();
    const index = items.findIndex((item) => item.id === productId);
    const foundItem = items[index];
    console.log(newQty);
    foundItem.quantity = newQty;
    await docRef.update({ items: [...items] });
    const { items: updatedItems } = querySnap.data();
    return updatedItems;
};
