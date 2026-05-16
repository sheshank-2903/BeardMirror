import { useEffect, useState } from 'react';

export const useCameraFeed = (videoRef: React.RefObject<HTMLVideoElement>) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const setupCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          await videoRef.current.play();
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Could not access webcam');
      }
    };

    setupCamera();

    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, [videoRef]);

  return { error };
};
