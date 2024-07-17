import { EventType, INITIAL_EVENT } from "@/types/data";
import { create } from "zustand";

interface ModalState {
  selectedEvent: EventType;
  setSelectedEvent: (event: EventType) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const useModalStore = create<ModalState>((set) => ({
  selectedEvent: INITIAL_EVENT,
  setSelectedEvent: (event) => set({ selectedEvent: event }),
  isModalOpen: false,
  setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
}));

export default useModalStore;
