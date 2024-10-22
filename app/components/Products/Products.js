import React from "react";
import styles from "./Products.module.css";
import { formatPrice } from "@/app/utils/helpers";

export default function Products({ product }) {
  return (
    <div className={styles.product_item}>
      <div className={styles.category}>{product?.category}</div>
      <div className={styles.product_item_img}>
        <img src={product?.images[0]} alt={product.title} />
      </div>
      <div className={styles.product_item_info}>
        <div className={styles.brand}>
          <span>Brand: </span>
          <span className={styles.brand_name}>{product.brand}</span>
        </div>
        <div className={styles.title}>{product.title}</div>
        <div className={styles.price}>
          <span className={styles.old_price}>{formatPrice(product.price)}</span>
          <span className={styles.new_price}>
            {formatPrice(product.discountPrice)}
          </span>
          <span className={styles.discount}>
            ({product.discountPercentage}% Off)
          </span>
        </div>
      </div>
    </div>
  );
}
