// react
import { createRoot } from "react-dom/client";
// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// providers
import RouterProvider from "@providers/RouterProvider";
// components
import GlobalStyles from "@/components/common/GlobalStyles";

const queryClient = new QueryClient();
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <RouterProvider />
    </QueryClientProvider>
  </>
)
