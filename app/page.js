import Link from "next/link";
import ClientProvider from "./store/ClientProvider";
import HomePage from "./components/HomePage/HomePage";
import store from "./store/store";
import { fetchAsyncProducts } from "./store/productsSlice";
import { fetchAsyncCategories } from "./store/categorySlice";

export default async function Home() {
  await store.dispatch(fetchAsyncProducts(20));
  await store.dispatch(fetchAsyncCategories());

  const products = store.getState().product.products;
  const categories = store.getState().category.categories;
  const productStatus = store.getState().product.productsStatus;
  return (
    <div>
      <HomePage
        products={products}
        categories={categories}
        productStatus={productStatus}
      />
    </div>
  );
}
