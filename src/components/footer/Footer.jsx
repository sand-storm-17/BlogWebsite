import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles}>&#169; KS. All rights reserved</div>
      <div className={styles.imgContainer}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="KS f"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="KS i"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="KS t"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="KS y"
        />
      </div>
    </div>
  );
}

export default Footer;
