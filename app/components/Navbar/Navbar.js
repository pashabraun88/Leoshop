"use client";
import styles from "./Navbar.module.css";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setSidebarOn } from "../../store/sidebarSlice";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../store/categorySlice";
import { useEffect } from "react";

export default function Navbar() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.nav__container}>
        <div className={styles.cont_side}>
          <button
            className={styles.navbar_show}
            onClick={() => dispatch(setSidebarOn())}
          >
            <i className="fas fa-bars"></i>
          </button>
          <button className={styles.navbar_bag}>
            <i className="fa-solid fa-bag-shopping"></i>
          </button>
          <Link href="/" className={styles.logo}>
            <span className={styles.leo}>Leo</span>Shop
          </Link>
        </div>
        <div className={styles.container_input}>
          <input
            type="text"
            className={styles.search_input}
            placeholder="Search your product"
          />
          <button className={styles.search_btn}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <button className={styles.cartItemsValue}>
            <i className="fa-solid fa-cart-shopping"></i>
            <div className={styles.cart_items_value}>0</div>
          </button>
        </div>
      </div>
      <div className={styles.container_nav_category}>
        <ul className={styles.navbar_nav}>
          {Array.isArray && categories.length > 0 ? (
            categories.slice(0, 8).map((category, idx) => (
              <li className={styles.nav_items} key={idx}>
                <Link href="/">{category.replace("-", " ")}</Link>
              </li>
            ))
          ) : (
            <li>Loading categories...</li>
          )}
        </ul>
      </div>
    </div>
  );
}
