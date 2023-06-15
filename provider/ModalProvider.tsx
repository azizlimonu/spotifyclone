"use client";

import AuhtModal from "@/components/AuhtModal";
import Modal from "@/components/Modal";
import UploadModal from "@/components/UploadModal";
import { useEffect, useState } from "react";

interface ModalProviderProps {

}

// modal component cant seen by servesiderendering
const ModalProvider: React.FC<ModalProviderProps> = ({

}) => {
  const [isMounted, setIsMounted] = useState(false);

  // prevent hydration server side rendering
  // if useEffect ever load it means in client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuhtModal />
      <UploadModal />
    </>
  )
};

export default ModalProvider;