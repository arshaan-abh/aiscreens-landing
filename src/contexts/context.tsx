import { Dispatch, SetStateAction, createContext } from "react";
import { defaultValue } from "./context-default-value";

export const Context = createContext<{
  context: (index: number) => void;
  setContext: Dispatch<SetStateAction<(index: number) => void>>;
}>({
  context: defaultValue,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setContext: () => {},
});
