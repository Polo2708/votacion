import { create } from "zustand";
import { authService } from "../../libs/auth/auth-service";
import { supabase } from "../../libs/supabase-client";
import Cookies from "js-cookie";

const { loginAuth, registerAuth, logoutAuth } = authService();

interface AuthState {
  user: any;
  loading: boolean;
  error: string | null;

  login: (data: { email: string; password: string }) => Promise<void>;
  register: (data: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  checkSession: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  error: null,

  login: async (data) => {
    set({ loading: true, error: null });
    try {
      const { data: res, error } = await loginAuth(data);
      if (error) throw error;
      Cookies.set("sb_token", res.session.access_token, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
      });
      set({ user: res.user });
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  register: async (data) => {
    set({ loading: true, error: null });
    try {
      const { data: res, error } = await registerAuth(data);
      if (error) throw error;

      Cookies.set("sb_token", res.session!.access_token, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
      });

      set({ user: res.user });
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    set({ loading: true });
    await logoutAuth();

    Cookies.remove("sb_token");
    set({ user: null, loading: false });
  },

  checkSession: async () => {
    const token = Cookies.get("sb_token");
    if (!token) return;

    const { data } = await supabase.auth.getUser(token);
    if (data.user) set({ user: data.user });
  },
}));
