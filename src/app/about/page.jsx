import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/hero.png" fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Award Winning Digital experience</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nibh felis, posuere at massa a, convallis accumsan risus. Sed
            posuere gravida venenatis. Praesent urna sapien, venenatis a
            accumsan euismod, vulputate ut nibh. Nullam facilisis nulla velit,
            mollis gravida orci vulputate nec. Etiam neque velit, lacinia vitae
            luctus ut, bibendum nec magna. Sed eget luctus massa. Pellentesque
            in blandit nunc. Curabitur vestibulum hendrerit justo ac ornare.
            Aliquam mauris enim, eleifend nec lorem eget, varius fermentum enim.
            Aenean id purus porta, ultrices lectus vel, maximus nulla.
            <br></br>
            Pellentesque nunc ipsum, tincidunt ut ultrices sed, pharetra ac
            nulla. Aenean et molestie lectus, non sollicitudin nibh. Aliquam
            erat volutpat. Aenean eleifend turpis quis est laoreet, sit amet
            volutpat tellus mollis. Maecenas non eros porta dui gravida posuere
            malesuada at massa. In tellus turpis, malesuada eget auctor non,
            luctus sit amet leo. Proin a nunc vitae felis vehicula luctus eu a
            risus.
            <br></br>
            Suspendisse massa diam, accumsan eu dictum vitae, laoreet eget
            libero. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. In vitae
            sapien iaculis, accumsan risus a, varius augue. Quisque egestas
            malesuada felis sed mollis. In in lectus eros. Vestibulum imperdiet
            lectus non leo bibendum ultricies. Nunc elit tellus, viverra et
            pellentesque sed, commodo vitae nulla. Nam quis accumsan massa, vel
            vestibulum massa. Donec ultrices pulvinar diam. Nulla lorem risus,
            dapibus at aliquet ut, lacinia et purus. Cras placerat eget diam
            vitae euismod. Integer semper eros sit amet viverra auctor. Praesent
            volutpat, mi et luctus posuere, arcu erat posuere mi, ullamcorper
            eleifend erat nibh efficitur turpis.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nibh felis, posuere at massa a, convallis accumsan risus. Sed
            posuere gravida venenatis. Praesent urna sapien, venenatis a
            accumsan euismod, vulputate ut nibh. Nullam facilisis nulla velit,
            mollis gravida orci vulputate nec. Etiam neque velit, lacinia vitae
            luctus ut, bibendum nec magna. Sed eget luctus massa. Pellentesque
            in blandit nunc. Curabitur vestibulum hendrerit justo ac ornare.
            Aliquam mauris enim, eleifend nec lorem eget, varius fermentum enim.
            Aenean
            <br />
            <br />
            id purus porta, ultrices lectus vel, maximus nulla. Pellentesque
            nunc ipsum, tincidunt ut ultrices sed, pharetra ac nulla. Aenean et
            molestie lectus, non sollicitudin nibh. Aliquam erat volutpat.
            Aenean eleifen
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default About;
