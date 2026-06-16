import * as React from "react";
import "primereact/resources/themes/viva-light/theme.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import { Card } from "primereact/card";

interface NewCardsProps {
  title: string;
  image: any;
  date: string;
  reference: any;
}
export default function NewsCard({
  title,
  image,
  date,
  reference,
}: NewCardsProps) {
  const header = <img alt="Card" src={image} className="h-80" />;
  const titleElement = <div className="centered-text">{title}</div>;
  const dateElement = (
    <p className="centered-text p-card-subtitle">
      <i className="pi pi-calendar"></i>
      {date}
    </p>
  );
  const handleClick = () => {
    window.location.href = reference;
  };

  return (
    <PrimeReactProvider>
      <Card
        title={titleElement}
        header={header}
        className="md:w-25rem"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        {dateElement}
      </Card>
    </PrimeReactProvider>
  );
}
