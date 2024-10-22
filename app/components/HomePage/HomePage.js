"use client";

import styles from "./HomePage.module.css";

import HeaderSlider from "../HeaderSlider/HeaderSlider";
import Loader from "../Loader/Loader";
import {
  fetchAsyncProducts,
  getAllProducts,
  fetchAsyncProductSingle,
  getProductSingle,
  getAllProductsStatus,
} from "@/app/store/productsSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { STATUS } from "@/app/utils/status";
import ProductsList from "../ProductsList/ProductsList";
export default function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);
  // const singleProducts = useSelector(getProductSingle);

  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, [dispatch]);

  return (
    <div className={styles.main_content}>
      <HeaderSlider />
      <div className={styles.container}>
        <div className={styles.categories}>
          <div className={styles.categories_item}>
            <div className={styles.title}>
              <h3>See our products</h3>
            </div>
            <div className={styles.container_items}>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductsList products={products} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
