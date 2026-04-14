import { auth, db } from './firebaseConfig';
import { createUserWithEmailAndPassword, User } from 'firebase/auth'; 
import { doc, setDoc } from 'firebase/firestore';

export interface AuthResponse {
    success: boolean;
    user?: User; 
    role?: 'merchant' | 'customer';
    error?: string;
}

interface UserData {
    uid: string;
    email: string | null;
    role: 'merchant' | 'customer';
    createdAt: string;
    shopName?: string; 
    isApproved?: boolean;
}

export const registerUser = async (
    email: string,
    password: string,
    isMerchant: boolean,
    shopName?: string 
): Promise<AuthResponse> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userRole = isMerchant ? 'merchant' : 'customer';

        const userData: UserData = {
            uid: user.uid,
            email: user.email,
            role: userRole,
            createdAt: new Date().toISOString(),
        };

        if (isMerchant && shopName) {
            userData.shopName = shopName;
            userData.isApproved = false;
        }

        await setDoc(doc(db, 'users', user.uid), userData);

        return { success: true, user: user, role: userRole };

    } catch (error: any) { 
        console.error("Error signing up: ", error);
        return { success: false, error: error.message };
    }
};