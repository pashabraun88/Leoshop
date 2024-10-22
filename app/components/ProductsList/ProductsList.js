"use client";
import styles from "./ProductsList.module.css";
import Products from "../Products/Products";

export default function ProductsList({ products }) {
  return (
    <div className={styles.product_list}>
      {products.map((product) => {
        let discountPrice =
          product.price - product.price * (product.discountPercentage / 100);

        return (
          <Products key={product.id} product={{ ...product, discountPrice }} />
        );
      })}
    </div>
  );
}
