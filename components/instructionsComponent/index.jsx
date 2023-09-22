import styles from "./instructionsComponent.module.css";
import { useForm } from "react-hook-form";
import { useAccount } from "wagmi";
import SwapComponent from "./swap";
import StakeComponent from "./stake";
export default function InstructionsComponent() {
  const { address, isConnecting, isDisconnected } = useAccount();
  console.log(isDisconnected, address);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>
            Testing<span>Basecamp</span>
          </h1>
        </div>
      </header>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SwapComponent />
          <StakeComponent />
          <button
            type="submit"
            className="mt-5 rounded bg-green-500 p-2 text-neutral-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
