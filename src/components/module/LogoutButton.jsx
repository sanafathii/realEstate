"use client";

import React from "react";
import styels from "./LogoutButton.module.css";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <button className={styels.button} onClick={signOut}>
      <FiLogOut />
      خروج
    </button>
  );
}

export default LogoutButton;
