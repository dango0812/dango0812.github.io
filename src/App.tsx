// theme
import ThemeProvider from 'src/theme/theme-provider';
// routes
import Router from 'src/routes'

function App() {

  const charAt = `
    ꒰ ˶• ༝ •˶꒱
    ./づ~ ♡
  `;

  console.info(charAt)

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
