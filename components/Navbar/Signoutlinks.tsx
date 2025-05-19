"use client";
import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";

const Signoutlinks = () => {
  const handleLogout = () => {
    toast("Logout successfully!.");
  };
  return (
    <>
      <SignOutButton redirectUrl="/">
        <button onClick={handleLogout}>
          Logout
        </button>
      </SignOutButton>
    </>
  );
};
export default Signoutlinks;
