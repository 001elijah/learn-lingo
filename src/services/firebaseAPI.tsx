import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";
import { Teacher, User } from "../utils/types";

export const readTeachersAPI = async () => {
  try {
    const response: Teacher[] = [];
    const snapshot = (await getDocs(
      collection(db, "teachers"),
    )) as DocumentData;

    snapshot.forEach((doc: any) => response.push(doc.data()));
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const registerAPI = async (newUserData: User) => {
  const { name, email, password } = newUserData;
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(user, {
      displayName: name,
    });
    return user;
  } catch (error: any) {
    alert(error.message);
  }
};

export const loginAPI = async (userData: User) => {
  const { email, password } = userData;
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error: any) {
    alert(error.message);
  }
};

export const logoutAPI = async () => {
  try {
    await auth.signOut();
  } catch (error: any) {
    alert(error.message);
  }
};
