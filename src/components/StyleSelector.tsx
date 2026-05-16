import type { StyleAsset } from '../store/useMirrorStore';

type Props = {
  title: string;
  assets: StyleAsset[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export const StyleSelector = ({ title, assets, selectedId, onSelect }: Props) => (
  <section className="selector">
    <h2>{title}</h2>
    <div className="row">
      {assets.map((asset) => (
        <button
          key={asset.id}
          className={selectedId === asset.id ? 'chip active' : 'chip'}
          onClick={() => onSelect(asset.id)}
        >
          {asset.name}
        </button>
      ))}
    </div>
  </section>
);
