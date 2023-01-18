import { create } from 'zustand';

interface Authentication {
  id: string;
  userName: string;
  email: string;
  password: string;
  isAuthenticated?: boolean;
  activeSession?: boolean;
}

export const useAuthentication = create<{
  user: Authentication[];
  isLogin: (login: boolean) => void;
  isLogout: (logout: string) => void;
}>((set) => ({
  user: [
    {
      id: '',
      userName: '',
      email: '',
      password: '',
      isAuthenticated: false,
    },
  ],
  isLogin: (login: boolean) =>
    set((state) => ({
      ...state,
      user: [
        ...state.user,
        {
          id: '',
          login,
          userName: '',
          email: '',
          password: '',
        },
      ],
    })),
  isLogout: (logout: string) =>
    set((state) => ({
      ...state,
      user: state.user.filter((u) => u.id !== logout),
    })),
}));
