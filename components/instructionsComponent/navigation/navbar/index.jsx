
'use client'

import { ConnectKitButton } from "connectkit";
import styles from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a target={"_blank"}>
        Basecamp
      </a>
      <div className="text-3xl font-bold underline">
          Hello world
      </div>
      <ConnectKitButton />
    </nav>
  );
}
