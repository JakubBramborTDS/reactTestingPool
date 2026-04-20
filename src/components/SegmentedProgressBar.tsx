export const SegmentedProgressBar = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  return (
    <div
      className="progress-indicator"
      style={{
        display: 'flex',
        gap: '2px', // Przerwa między kafelkami
        padding: '2px', // Odstęp od ramki paska
        backgroundColor: '#bdbdbd', // Tło wewnątrz paska (klasyczny Win98 szary)
        height: '22px', // Stała wysokość kontenera
        alignItems: 'stretch', // Rozciąga kafelki w pionie, by nie było dziury na dole
      }}
    >
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          style={{
            width: '12px', // Sztywna szerokość kafelka, żeby nie były za szerokie
            backgroundColor: index < currentStep ? '#000080' : 'transparent',
            flexShrink: 0, // Blokuje zwężanie się kafelków, gdy jest ich dużo
          }}
        />
      ))}
    </div>
  );
};
