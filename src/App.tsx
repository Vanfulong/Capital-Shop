import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/Product Details/ProductDetail";
import Loader from "./components/Loader/Loader";
import Category from "./pages/Category/Category";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import { ToastContainer } from "react-toastify";
const Home = lazy(() => import("./pages/Home/Home"));
function App() {
  const RequireLogin = ({ children }: { children: any }) => {
    if (localStorage.getItem("loginSuccess") === "true") {
      alert("Vui long dang xuat truoc khi dang nhap/dang ki tai khoan khac");
    }
    return localStorage.getItem("loginSuccess") === "true" ? (
      <Navigate to="/home" />
    ) : (
      children
    );
  };
  return (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route
          path="/home"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/category/:id" element={<Category />}></Route>
        <Route
          path="/login"
          element={
            <RequireLogin>
              {" "}
              <Login />{" "}
            </RequireLogin>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <RequireLogin>
              <Register />
            </RequireLogin>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          }
        ></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
