// react-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// theme
import ThemeProvider from 'src/theme/theme-provider';
// routes
import Router from 'src/routes';

function App() {

  const charAt = `
    ꒰ ˶• ༝ •˶꒱
    ./づ~ ♡
  `;

  console.info(charAt)

  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
