import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth, db } from "./firebaseConfig";
import { Teacher, User } from "../utils/types";

//Firebase pagination
export const readTeachersPaginateAPI = async (lasTeacherItem: number) => {
  try {
    const teachersRef = db.collection("teachers");
    const snapshot = await teachersRef
      .orderBy("id", "asc")
      .startAfter(lasTeacherItem)
      .limit(4)
      .get();
    const response: Teacher[] = snapshot.docs.map((doc: any) => doc.data());
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
