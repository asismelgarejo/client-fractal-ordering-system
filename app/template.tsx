"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { MainHeader } from "./src/componets/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ResponsiveAppBar />
      <Container>{children}</Container>
    </>
  );
}

const pages = ["Products"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      const body = document.getElementsByTagName("body");
      if (loader) loader.style.display = "none";
      if (body) {
        body[0].style.overflow = "unset";
        body[0].style.width = "unset";
        body[0].style.height = "unset";
      }
    }
  }, []);

  return <MainHeader />;
}