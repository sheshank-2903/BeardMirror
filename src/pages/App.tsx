import { useMemo, useRef } from 'react';
import { StyleSelector } from '../components/StyleSelector';
import { useCameraFeed } from '../hooks/useCameraFeed';
import { useMirrorStore } from '../store/useMirrorStore';

export const App = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { error } = useCameraFeed(videoRef);
  const { hairstyles, beards, selectedHairId, selectedBeardId, setHair, setBeard } = useMirrorStore();

  const selectedHair = useMemo(() => hairstyles.find((hair) => hair.id === selectedHairId), [hairstyles, selectedHairId]);
  const selectedBeard = useMemo(() => beards.find((beard) => beard.id === selectedBeardId), [beards, selectedBeardId]);

  return (
    <main className="app-shell">
      <header>
        <h1>AI Smart Hair & Beard Mirror</h1>
        <p>MVP Phase 1: realtime camera + style overlays</p>
      </header>
      <section className="mirror-stage">
        <video ref={videoRef} className="camera" muted playsInline />
        {selectedHair && <img className="overlay hair" src={selectedHair.src} alt={selectedHair.name} />}
        {selectedBeard && <img className="overlay beard" src={selectedBeard.src} alt={selectedBeard.name} />}
        {error && <p className="error">Camera error: {error}</p>}
      </section>
      <StyleSelector title="Hairstyles" assets={hairstyles} selectedId={selectedHairId} onSelect={setHair} />
      <StyleSelector title="Beards" assets={beards} selectedId={selectedBeardId} onSelect={setBeard} />
    </main>
  );
};
