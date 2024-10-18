import BuyResidentialPage from "@/components/template/BuyResidentialPage";
import React from "react";
import toast from "react-hot-toast";

async function BuyResidential({ searchParams }) {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();
  let finalDate = data.data;
  if (searchParams.gategorie) {
    finalDate = finalDate.filter(
      (item) => item.gategorie === searchParams.gategorie
    );
  }
  if (data.error) {
    return <h3>مشکلی پیش آمده است</h3>;
  }
  return <BuyResidentialPage data={finalDate} />;
}

export default BuyResidential;
