import {
  useState,
  useDebugValue
} from "react";

export default function useBalance(initialBalance) {

  const [balance, setBalance] =
    useState(initialBalance);

  useDebugValue(balance);

  return [balance, setBalance];

}