import { create } from "zustand/react";

interface AuthState {
  isLogged: boolean;
  setLogged: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLogged: false,
  setLogged: (value) => set({ isLogged: value }),
}));
