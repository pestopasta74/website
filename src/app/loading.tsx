export default function Loading() {
  return (
    <main className="loading-shell" aria-label="Loading page" aria-busy="true">
      <div className="loading-header">
        <span className="loading-block loading-mark" />
        <span className="loading-block loading-nav" />
      </div>
      <div className="loading-content">
        <span className="loading-block loading-kicker" />
        <span className="loading-block loading-title" />
        <span className="loading-block loading-title loading-title-short" />
        <span className="loading-block loading-copy" />
      </div>
    </main>
  );
}
