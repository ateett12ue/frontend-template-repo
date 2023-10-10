import styles from "./instructionsComponent.module.css";
import { useAccount } from "wagmi";
export default function SwapComponent() {
  return (
    <div class="mx-auto max-w-xs space-y-5">
  <div>
    <label for="example10" class="mb-1 block text-sm font-medium text-gray-700">Phone number</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center text-gray-500">
        <label for="currency" class="sr-only">Currency</label>
        <select id="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
          <option>US</option>
          <option>CA</option>
          <option>JP</option>
          <option>CN</option>
        </select>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center px-2.5">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      </div>
      <input type="text" id="example10" class="block w-full rounded-md border-gray-300 pl-16 pr-10 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="+1 (666) 000-0000" />
    </div>
  </div>
  <div>
    <label for="example11" class="mb-1 block text-sm font-medium text-gray-700">Price</label>
    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2.5 text-gray-500">$</div>
      <div class="absolute inset-y-0 right-0 flex items-center text-gray-500">
        <label for="currency" class="sr-only">Currency</label>
        <select id="currency" class="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
        </select>
      </div>
      <input type="text" id="example11" class="block w-full rounded-md border-gray-300 pl-8 pr-16 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500" placeholder="0.00" />
    </div>
  </div>
</div>
  );
}
