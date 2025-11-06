import { supabase } from "../supabase-client";

export const authService = () => {
  const loginAuth = async (data: { email: string; password: string }) => {
    const res = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    return res;
  };

  const registerAuth = async (data: { email: string; password: string }) => {
    const res = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });
    return res;
  };

  const logoutAuth = async () => {
    const res = await supabase.auth.signOut();
    return res;
  };

  return {
    loginAuth,
    registerAuth,
    logoutAuth,
  };
};
