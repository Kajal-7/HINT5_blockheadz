import { auth, db } from "./firebase";
import { doc, setDoc  } from 'firebase/firestore';
import { createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from 'firebase/auth';
import { createContext, useContext, useEffect , useState } from 'react';

//Creating Auth Context
export const AuthContext= createContext("");

//Creating provider to subscribe into context
export function Authentication({child}){

    const [user,setUser]=useState();
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(u)=>{
            setUser(u);
        });
        return()=>{
            unsubscribe(); //to do clean up on unmount
        }
    },[]);
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function signIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function userAdd(email,name,value){
       
        const uid = value.user.uid;
        const val=0;
        const data = {
            id : uid,
            email: email,
            name : name,
            OpportunitiesPosted: val,
            }; 
        //adding a document with doc id as uid
        async function storeUserData(){
            const newUser = doc(db, 'users', uid)
            await setDoc(newUser, data);
          }
          storeUserData();
    }
    return (
        //value contains all the values you wanna expose
        <AuthContext.Provider value={{ user,userAdd, signUp, signIn}}>
            {child}
        </AuthContext.Provider>
    )
}

//export 
export function useAuthContext(){
    return useContext(AuthContext);  
}