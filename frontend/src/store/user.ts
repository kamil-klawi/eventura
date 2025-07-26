import { create } from "zustand";

type UserState = {
  isAdmin: boolean;
  isOrganizer: boolean;
  setRoles: (
    roles: { isAdmin: boolean; isOrganizer: boolean },
    callerIsAdmin: boolean,
  ) => void;
};

export const useUserStore = create<UserState>((set, get) => ({
  isAdmin: false,
  isOrganizer: false,
  setRoles: ({ isAdmin, isOrganizer }, callerIsAdmin) => {
    if (!callerIsAdmin) return;
    set({ isAdmin, isOrganizer });
  },
}));
