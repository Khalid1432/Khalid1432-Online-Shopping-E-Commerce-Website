import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllProductPage from "./pages/AllProductPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ShoppingPage from "./pages/ShoppingPage";
import ProductDetails from "./pages/ProductDetails";
import UserProfile from "./pages/UserProfile";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserPrivateRoutes from "./components/strictRoutes/UserPrivateRoutes";
import AdminPrivateRoutes from "./components/strictRoutes/AdminPrivateRoutes";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/allproduct" element={<AllProductPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<ShoppingPage />} />
        <Route path="/category/:categoryname" element={<CategoryPage />} />

        <Route path="/productdetails/:id" element={<ProductDetails/>} />
        <Route path="/user-profile" element={
          <UserPrivateRoutes>
            <UserProfile/>
          </UserPrivateRoutes>
        } />
        <Route path="/admin-dashboard" element={
          <AdminPrivateRoutes>
            <AdminDashboard/>
          </AdminPrivateRoutes>
        } />
        <Route path="/add-product" element={
          <AdminPrivateRoutes>
            <AddProduct/>
          </AdminPrivateRoutes>
        }/>
        <Route path="/update-product/:id" element={
          <AdminPrivateRoutes>
            <UpdateProduct/>
          </AdminPrivateRoutes>
        }/>
      </Routes>
    </div>
  );
}

export default App;
