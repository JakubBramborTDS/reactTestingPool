import { useEffect } from 'react';
import './App.css';
import '98.css';
import { SegmentedProgressBar } from './components/SegmentedProgressBar';
import { useProgress } from './hooks/useProgress';

function App() {
  console.log('Renderuję ten komponent');
  useEffect(() => {
    // To odpala się tylko PO tym, jak komponent faktycznie pojawi się na ekranie
    console.log('2. EFEKT: Komponent zamontowany');

    return () => {
      // To jest funkcja czyszcząca (cleanup)
      console.log('3. CZYSZCZENIE: Komponent odmontowany');
    };
  }, []);
  const { currentStep, totalSteps, isFinished } = useProgress(50, 81);

  return (
    <>
      {isFinished ? (
        <div>Desktop</div>
      ) : (
        <div className="startup-screen">
          <div className="loading-box">
            <p>Trwa uruchamianie systemu...</p>
            {/* Przekazujemy progress "windą" do komponentu UI */}
            <SegmentedProgressBar
              currentStep={currentStep}
              totalSteps={totalSteps}
            />
          </div>
          <div className="startup-footer">
            <p>Copyright © 1981-1998 Microsoft Corp.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
