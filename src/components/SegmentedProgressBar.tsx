interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="progress-indicator segmented" style={{ width: '100%' }}>
      <span
        className="progress-indicator-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
