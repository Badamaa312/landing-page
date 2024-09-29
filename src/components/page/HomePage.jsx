"use client";

import { Card } from "../card/Card";
import { Header } from "../header/Header";
import { Intro } from "../intro/Intro";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Intro />
      <Card />
    </main>
  );
};
export default HomePage;
