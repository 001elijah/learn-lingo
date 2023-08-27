import { useCallback, useEffect } from "react";
import { KEY_EVENT_TYPE, KEY_NAME_ESC } from "./constants";

interface KeyboardEvent {
  key: string;
}

export function useEscapeKey(handleCloseCallback: Function) {
  const handleEscKey = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === KEY_NAME_ESC) {
        handleCloseCallback();
      }
    },
    [handleCloseCallback],
  );

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);
}
