import type { Metadata } from "next";
import FamiliaMinisterial from "@/components/FamiliaMinisterial";

export const metadata: Metadata = {
  title: "Familia Ministerial | RedFormando",
  description:
    "Congregaciones y obreros de la Familia Ministerial RedFormando.",
};

export default function Page() {
  return <FamiliaMinisterial />;
}
