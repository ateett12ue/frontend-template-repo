import styles from "./instructionsComponent.module.css";
import { useAccount } from "wagmi";
export default function StakeComponent() {
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        className="rounded border border-neutral-200 bg-neutral-50 p-1"
        type="email"
        id="email"
        name="email"
      />

      <label htmlFor="card-number">Credit Card Number</label>
      <input
        className="rounded border border-neutral-200 bg-neutral-50 p-1"
        type="text"
        id="card-number"
        name="card-number"
      />
    </div>
  );
}
