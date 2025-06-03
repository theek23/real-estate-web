import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CleaningServices } from "./screens/CleaningServices/CleaningServices";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CleaningServices />
  </StrictMode>,
);
