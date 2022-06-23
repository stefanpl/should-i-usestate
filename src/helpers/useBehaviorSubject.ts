import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

/**
 * Subscribe to the current value of a BehaviorSubject.
 */
export const useBehaviorSubject = <T>(subject: BehaviorSubject<T>): T => {
  const [value, setValue] = useState<T>(subject.getValue());

  useEffect(() => {
    const subscription = subject.subscribe((v) => {
      setValue(v);
    });

    return () => subscription.unsubscribe();
  }, [subject]);

  return value;
};
