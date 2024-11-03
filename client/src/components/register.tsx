import { create } from 'zustand';

export const Registered = create((set) => ({
  isRegistered: false,
  toggleRegistered: () => set((state) => ({ isRegistered: !state.isRegistered })),
}));
