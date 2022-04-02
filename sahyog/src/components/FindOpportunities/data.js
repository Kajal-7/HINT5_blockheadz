import {db} from "../../data/firebase";
import { collection, getDocs } from "firebase/firestore";
 //collection ref
 const colRef=collection(db,'Opportunities');
 //getting collection data
 let opp=[];
 getDocs(colRef)
               .then((snapshot)=>{
                 snapshot.docs.forEach((doc)=>{
                   opp.push({...doc.data(),id: doc.id})
                 })
               
               })
               .catch(err=>{
                 console.log(err.message);
               })
               console.log(opp);
export default opp;
