import { create } from 'zustand';

export type StyleAsset = {
  id: string;
  name: string;
  category: string;
  src: string;
};

type MirrorState = {
  hairstyles: StyleAsset[];
  beards: StyleAsset[];
  selectedHairId: string;
  selectedBeardId: string;
  setHair: (id: string) => void;
  setBeard: (id: string) => void;
};

const hairstyles: StyleAsset[] = [
  { id: 'hair-short', name: 'Short Textured', category: 'short', src: '/assets/hairstyles/hair-short.svg' },
  { id: 'hair-curly', name: 'Curly Volume', category: 'curly', src: '/assets/hairstyles/hair-curly.svg' },
  { id: 'hair-long', name: 'Long Flow', category: 'long', src: '/assets/hairstyles/hair-long.svg' }
];

const beards: StyleAsset[] = [
  { id: 'beard-stubble', name: 'Stubble', category: 'stubble', src: '/assets/beards/beard-stubble.svg' },
  { id: 'beard-french', name: 'French Beard', category: 'french', src: '/assets/beards/beard-french.svg' },
  { id: 'beard-full', name: 'Full Beard', category: 'full', src: '/assets/beards/beard-full.svg' }
];

export const useMirrorStore = create<MirrorState>((set) => ({
  hairstyles,
  beards,
  selectedHairId: hairstyles[0].id,
  selectedBeardId: beards[0].id,
  setHair: (id) => set({ selectedHairId: id }),
  setBeard: (id) => set({ selectedBeardId: id })
}));
