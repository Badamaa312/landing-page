"use client";

import { Header, Intro } from "@/components";
import { Card } from "@/components/card/Card";
import Benefit from "@/components/customers/Benefits";
import { Customers } from "@/components/customers/Customers";

import Footer from "@/components/footer/Footer";
import Plan from "@/components/plan/Plan";

export default function Home() {
  return (
    <main>
      <Header />
      <Intro />
      <Card />
      <Benefit />
      <Plan />
      <Customers />
      <Footer />
    </main>
  );
}
