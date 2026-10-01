import { useRef, useCallback } from "react";

export function usePersistFn<T extends (...args: any[]) => any>(fn: T): T {
  const ref = useRef<T>(fn);
  ref.current = fn;
  return useCallback(((...args: any[]) => {
    return ref.current(...args);
  }) as T, []);
}
