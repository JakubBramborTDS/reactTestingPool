import { useEffect } from "react";
import "./App.css";
import DefaultButton from "./components/DefaultButton";

function App() {
  console.log("Renderuję ten komponent");
  useEffect(() => {
    // To odpala się tylko PO tym, jak komponent faktycznie pojawi się na ekranie
    console.log("2. EFEKT: Komponent zamontowany");

    return () => {
      // To jest funkcja czyszcząca (cleanup)
      console.log("3. CZYSZCZENIE: Komponent odmontowany");
    };
  }, []);
  return (
    <>
      <DefaultButton />
    </>
  );
}

export default App;
