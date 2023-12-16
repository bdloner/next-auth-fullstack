"use client"

import { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserPostPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Check if there is no session user, then redirect to the login page
    if (!session) {
      // You can customize the login page URL based on your project structure
      router.push("/api/auth/signin");
    }
  }, [session, router]);

  // Render the component content only if there is a session user
  return session ? (
    <div>Only Authenticated user should access to this page</div>
  ) : null;
};

export default UserPostPage;
