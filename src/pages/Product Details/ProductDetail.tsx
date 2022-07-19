import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Product } from "../../@types/type";
import axiosClient from "../../apis/axiosClient";
import CartSlice from "../../components/Cart/CartSlice";
interface ItemTabLish {
  id: number;
  name: string;
}
const tablist: Array<ItemTabLish> = [
  {
    id: 1,
    name: "Description",
  },
  {
    id: 2,
    name: "Author",
  },
  {
    id: 3,
    name: "Comments",
  },
  {
    id: 4,
    name: "Review",
  },
];
const ProductDetail = () => {
  document.title = "Capitl Shop - ProductDetail";
  const dispatch = useDispatch();
  const [itemActive, setItemActive] = useState<number>(1);
  const [Product, setProduct] = useState<Product>({
    id: 1,
    title: "Loading",
    price: 1,
    description: "Loading",
    category: {},
    images: ["test"],
  });
  const handleAddCartClick = () => {
    dispatch(
      CartSlice.actions.addCart({
        id: Product.id.toString(),
        quantity: 1,
      })
    );
  };
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const res: Product = await axiosClient.get(`products/${id}`);
      setProduct(res);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="bg-[#F3EAD8] py-10 flex items-center justify-center flex-col">
        <p className="text-4xl font-semibold">Product Details</p>
        <div className="flex mt-5">
          <p className="text-[#74706B] text-sm border-r border-gray-400 pr-3">
            Home
          </p>
          <p className="pl-3 text-[#74706B] text-sm "> Product Details</p>
        </div>
      </div>
      <div className="py-20">
        <div className="bg-primary mx-20 px-10 py-5 flex">
          <img
            src={Product.images[0] ?? ""}
            alt=""
            className="max-w-[40%] min-w-[40%]"
          />
          <div className="flex flex-col text-white px-14">
            <p className="text-4xl">{Product.title}</p>
            <p className="font-medium text-3xl mt-10">{"$" + Product.price}</p>
            <div className="flex mt-7 text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p>(120 Review)</p>
            </div>
            <div
              onClick={handleAddCartClick}
              className="relative cursor-pointer max-w-max mt-8 inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white hover:shadow-custom group "
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-primary absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white  ">
                Add To Cart
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-40 py-14">
        <div className="border-b border-gray-200 flex">
          {tablist.map((item) => (
            <div
              className={`${
                item.id === itemActive ? "border-b-4" : ""
              } text-center py-6 px-5 cursor-pointer  border-primary hover:text-primary text-base font-medium transition-all duration-300`}
              key={item.id}
              onClick={() => {
                setItemActive(item.id);
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
        <p className="text-base text-[#301A22] font-normal mt-10">
          {Product.description} Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Vitae, veniam assumenda reiciendis at aut maiores,
          iure, a doloribus alias pariatur molestiae asperiores ducimus
          molestias labore eum repellat aperiam voluptatum! Inventore.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
