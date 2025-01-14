import { FC } from "react";
type ResultRowProps = {
  loading?: boolean;
  crypto?: string;
  price?: string;
  provider?: string;
};
const ResultRow: FC<ResultRowProps> = ({
  loading,
  provider,
  crypto,
  price,
}) => {
  return (
    <div className="relative border min-h-12 border-white/10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 mt-2 overflow-hidden">
      <div className="flex gap-4">
        <div className="grow text-2xl">{provider || ""}</div>
        <div className="flex gap-2">
          <span className=" text-xl text-purple-200/80">{price || ""}</span>
          <span className=" text-xl text-purple-300/50">{crypto || ""}</span>
        </div>
      </div>
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-800 to-transparent skeleton-placeholder"></div>
      )}
    </div>
  );
};

export default ResultRow;
