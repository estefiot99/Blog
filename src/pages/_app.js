import "/public/assets/fonts/fonts.scss";
import "../styles/global.scss";
import { ThemeProvider } from "../context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
