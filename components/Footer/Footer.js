import Image from "next/image";
import styles from "./Footer.module.css";

import { Container, Waves } from "../";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Container>
        <Waves flip image="/images/wave--infinite-grey.svg" />
        <Image
          src="/images/icons/build.png"
          alt={`card icon for second card`}
          className={styles.cardIcon}
          height={158}
          width={181}
        />
        <div className={styles.grid}>
          <div>
            <h5>About us</h5>
            <p>Designs products and experience for users.</p>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li>hello@prologuelabs.lk</li>
              <li>+948375454354</li>
            </ul>
          </div>
          <address>
            <h5>Address</h5>
            <ul>
              <li>8-9 Beach road</li>
              <li>Galle</li>
              <li>Srilanks</li>
              <li>43564654</li>
            </ul>
          </address>
          <div>
            <h5>Other Links</h5>
            <ul>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
