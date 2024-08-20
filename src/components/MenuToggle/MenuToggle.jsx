import { cn } from "@/helpers/cn";
import "./MenuToggle.css";

export default function MenuToggle({ open }) {
  return (
    <div id="nav-icon" className={cn([open && "open"])}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
