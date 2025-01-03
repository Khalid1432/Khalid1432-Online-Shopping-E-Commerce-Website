import { collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { fireDB } from "../firebase/FirebaseConfig";
import toast from 'react-hot-toast';


export const ContextApp = createContext();

export default function ContextAppProvider({children}){

    const[search, setSearch] = useState("");
    const[loading, setLoading] = useState(false); 
    const [getAllProduct, setGetAllProduct] = useState([]);

    const getAllProductFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "products"),
                orderBy('time')
            );
            
            const allProductData = onSnapshot(q, (querySnapshot)=>{
                let productArray = [];
                querySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllProduct(productArray);
                setLoading(false);
            })

            return allProductData;

        } catch (error) {
            console.error("Error fetching Firestore data:", error);
            setLoading(false);
        }
        setLoading(false);
    } 

    const[getAllOrder,setGetAllOrder] = useState([]);
    

    async function getAllOrderfun(){
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "order"),
                orderBy("time")
            )

            const getAllOrderData = onSnapshot(q, (querySnapshot)=>{
                let orderArray = [];
                querySnapshot.forEach((doc)=>{
                    orderArray.push({...doc.data(), id: doc.id});
                })
                setGetAllOrder(orderArray);
                setLoading(false);
            })
            return getAllOrderData;
        } catch (error) {
            console.log("order is not Fetched", error);
            setLoading(false);
        }
        setLoading(false);
    };

    async function deleteOrderFun(id){
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, "order", id));
            toast.success("Order Deleted Successfull");
            getAllOrderfun();
            setLoading(false);
        } catch (error) {
            console.error("Product is not Fetch", error);
        }
        setLoading(false);
    }

    const[getAllUser, setGetAllUser] = useState([]);

    async function getAllUserFun(){
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "user"),
                orderBy("time")
            )
            const userData= onSnapshot(q, (querySnapshot)=>{
                let AllUser = [];
                querySnapshot.forEach((doc)=>
                AllUser.push({...doc.data(), id : doc.id})
                )
                setGetAllUser(AllUser);
                setLoading(false);
            })
            return userData;
        } catch (error) {
            console.log("User is not Fetched", error);
        }
        setLoading(false);
    }

    useEffect(() => {
        getAllProductFunction();
        getAllOrderfun();
        getAllUserFun();
    }, []);

    const value = {
        search,
        setSearch,
        loading,
        setLoading,
        getAllProduct, 
        setGetAllProduct,
        getAllProductFunction,
        getAllOrderfun,
        setGetAllOrder,
        getAllOrder,
        deleteOrderFun,
        getAllUserFun,
        setGetAllUser,
        getAllUser
    }

    return <ContextApp.Provider value={value}>
        {children}
    </ContextApp.Provider>
}