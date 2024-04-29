// auth.js

import { useRouter } from "next/router";
import { useEffect } from "react";

const useAuthGuard = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = !!sessionStorage.getItem("token");
    if (!isAuthenticated) {
      console.log("isAuthenticated--->", isAuthenticated);
      router.push("/");
    }
  }, []);

  return null;
};

export default useAuthGuard;
