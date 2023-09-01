import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const notify = () => toast(error.message);
    notify();
  }
};

export const createUserInstanceInDB = async (newUserData: User) => {
  const { name, email } = newUserData;
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const usersRef = db.collection("users");
      await usersRef.doc(uid).set({ name, email, favoriteTeachers: [] });
    }
  });
};

export const updateUserFavoritesAPI = async (favoriteTeachers: Teacher[]) => {
  try {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const usersRef = db.collection("users");
        await usersRef.doc(uid).update({ favoriteTeachers });
      }
    });
  } catch (error: any) {
    const notify = () => toast(error.message);
    notify();
  }
};

export const getUserFavoritesAPI = async (uid: string) => {
  try {
        const usersRef = db.collection("users").doc(uid);
        const doc = await usersRef.get();
        if (!doc.exists) {
          // console.log([])
          return []
        } else {
          const userData = doc.data();
          if (userData) {
            const response = userData.favoriteTeachers;
            console.log(response);
            return response;
          } else {
            return [];
          }
        }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const loginAPI = async (userData: User) => {
  const { email, password } = userData;
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error: any) {
    const notify = () => toast(error.message);
    notify();
  }
};

export const logoutAPI = async () => {
  try {
    await auth.signOut();
  } catch (error: any) {
    const notify = () => toast(error.message);
    notify();
  }
};
