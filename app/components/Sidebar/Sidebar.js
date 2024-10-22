"use client";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  getSidebarStatus,
  setSidebarOff,
  setSidebarOn,
} from "@/app/store/sidebarSlice";
import styles from "./Sidebar.module.css";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "@/app/store/categorySlice";
import { useEffect } from "react";

export default function Sidebar() {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <aside className={`${styles.sidebar} ${isSidebarOn ? styles.active : ""}`}>
      <button
        className={styles.sidebar__hide_btn}
        onClick={() => dispatch(setSidebarOff())}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className={styles.sidebar_content}>
        <div className={styles.category_title}>All categories</div>
        <ul className={styles.category_list}>
          {Array.isArray && categories.length > 0 ? (
            categories.map((category, idx) => (
              <li key={idx}>
                <Link href="/">{category.replace("-", " ")}</Link>
              </li>
            ))
          ) : (
            <li>Loading categories...</li>
          )}
        </ul>
      </div>
    </aside>
  );
}
