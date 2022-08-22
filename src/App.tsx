import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";
import "react-toastify/dist/ReactToastify.min.css";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
const Home = lazy(() => import("./pages/Home/Home"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Category = lazy(() => import("./pages/Category/Category"));
const ProductDetail = lazy(
  () => import("./pages/Product Details/ProductDetail")
);
const Register = lazy(() => import("./pages/Login/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
function App() {
  const RequireLogin = ({ children }: { children: any }) => {
    if (localStorage.getItem("loginSuccess") === "true") {
      toast.error("Please log out .", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
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
        <Route
          path="/product/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ProductDetail />
            </Suspense>
          }
        ></Route>
        <Route
          path="/category/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Category />
            </Suspense>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <RequireLogin>
                <Login />
              </RequireLogin>
            </Suspense>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loader />}>
              <RequireLogin>
                <Register />
              </RequireLogin>
            </Suspense>
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
