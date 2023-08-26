import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Teacher } from "../utils/types";

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
