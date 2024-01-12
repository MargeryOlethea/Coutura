import ImageCarousel from "../components/ImageCarousel";
import Navbar from "../components/Navbar";
import ProductsCatalogue from "../components/ProductsCatalogue";
import { useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />
      <section>
        <ImageCarousel />
        <ProductsCatalogue search={search} />
      </section>
    </>
  );
}
