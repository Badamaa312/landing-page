"use client";

import { Card } from "../card/Card";
import { Customers } from "../customers/Customers";
import { Header } from "../header/Header";
import { Intro } from "../intro/Intro";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Intro />
      <Card />
      <Customers />
    </main>
  );
};
export default HomePage;
