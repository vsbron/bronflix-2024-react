import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as signOutUser,
} from "firebase/auth";
import app from "@/firebase/firebase";

const auth = getAuth(app);

// Example of signing in a user
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  } catch (error) {
    console.error(error);
  }
};

// Example of signing out a user
export const signOut = async () => {
  try {
    await signOutUser(auth);
    console.log("Signed out");
  } catch (error) {
    console.error(error);
  }
};
