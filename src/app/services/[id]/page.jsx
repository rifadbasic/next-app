import React from "react";

export default async function ServicesDetails({ params }) {
  const { id } = await params;
  console.log(id);

  return (
    <div>
      <p>Services Details, ID: {id}</p>
    </div>
  );
}
