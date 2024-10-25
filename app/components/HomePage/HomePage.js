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
import {
  fetchAsyncCategories,
  getAllCategories,
} from "@/app/store/categorySlice";
import { useSelector, useDispatch } from "react-redux";
import { STATUS } from "@/app/utils/status";
import ProductsList from "../ProductsList/ProductsList";
import { store } from "../../store/store";

export default function HomePage({ products, categories, productStatus }) {
  // const productStatus = useSelector(getAllProductsStatus);

  // const dispatch = useDispatch();

  // const products = useSelector(getAllProducts);
  // const categories = useSelector(getAllCategories);
  // // const singleProducts = useSelector(getProductSingle);

  // useEffect(() => {
  //   dispatch(fetchAsyncProducts(10));
  // }, [dispatch]);

  // const tempProducts = [];
  // if (products.length > 0) {
  //   for (let i in products) {
  //     let randomIndex = Math.floor(Math.random() * products.length);

  //     while (tempProducts.includes(products[randomIndex])) {
  //       randomIndex = Math.floor(Math.random() * products.length);
  //     }
  //     tempProducts[i] = products[randomIndex];
  //   }
  // }

  let catProductsOne = products.filter(
    (product) => product.category === categories[0]
  );
  let catProductsTwo = products.filter(
    (product) => product.category === categories[1]
  );
  let catProductsThree = products.filter(
    (product) => product.category === categories[2]
  );
  let catProductsFour = products.filter(
    (product) => product.category === categories[3]
  );

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
            <div className={styles.categories_item}>
              <div className={styles.title}>
                <h3>{categories[0]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductsList products={catProductsOne} />
              )}
            </div>
            <div className={styles.categories_item}>
              <div className={styles.title}>
                <h3>{categories[1]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductsList products={catProductsTwo} />
              )}
            </div>
            <div className={styles.categories_item}>
              <div className={styles.title}>
                <h3>{categories[2]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductsList products={catProductsThree} />
              )}
            </div>
            <div className={styles.categories_item}>
              <div className={styles.title}>
                <h3>{categories[3]}</h3>
              </div>
              {productStatus === STATUS.LOADING ? (
                <Loader />
              ) : (
                <ProductsList products={catProductsFour} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
