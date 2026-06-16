import type { MenuItem } from "primereact/menuitem";
import "primeicons/primeicons.css";
import { BreadCrumb } from "primereact/breadcrumb";
interface StoryLineProps {
  items: MenuItem[];
}

const home = { icon: "pi pi-home", url: "/" };

export default function StoryLine({ items }: StoryLineProps) {
  return (
    <div className="p-4">
      <BreadCrumb model={items} home={home} />
    </div>
  );
}
