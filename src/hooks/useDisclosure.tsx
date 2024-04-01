import { useMemo, useState } from 'react';

interface Props {
  initialState: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function useDisclosure({ initialState, onOpen, onClose }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  return useMemo(() => {
    return {
      open: () => {
        setIsOpen(true);

        return onOpen?.();
      },
      close: () => {
        setIsOpen(false);

        return onClose?.();
      },
      toggle: () => (isOpen ? close() : open()),
      isOpen,
    };
  }, []);
}
