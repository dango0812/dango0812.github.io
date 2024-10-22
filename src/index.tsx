// react
import { createRoot } from "react-dom/client";

// providers
import RouterProvider from "@/providers/RouterProvider";

// components
import GlobalStyles from "@components/GlobalStyles";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <GlobalStyles />
    <RouterProvider />
  </>
)
