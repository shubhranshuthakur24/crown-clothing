import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("IuGqG4CMM2XGzYjOI2pA")
  .collection("cardItem")
  .doc("EJc97UE88DoAj6G62sq3");

firestore.doc("/users/IuGqG4CMM2XGzYjOI2pA/cardItem/EJc97UE88DoAj6G62sq3");
firestore.collection("/users/IuGqG4CMM2XGzYjOI2pA/cardItems");
