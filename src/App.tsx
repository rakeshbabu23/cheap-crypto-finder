import { useState } from "react";
import AmountInput from "./AmountInput";
import ResultRow from "./ResultRow";
import { ResultProps } from "./services/fetchPrices";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [presentPrices, setPresentPrices] = useState<ResultProps[]>([
    {
      crypto: "",
      price: "",
      provider: "",
    },
  ]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-6xl text-center uppercase font-bold bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text from-30% text-transparent">
        find cheapest crypto
      </h1>
      <div className="flex justify-center mt-6">
        <AmountInput
          setIsLoading={setIsLoading}
          setPresentPrices={setPresentPrices}
        />
      </div>
      <div className="mt-6">
        {isLoading ? (
          <>
            <ResultRow loading={isLoading} />
            <ResultRow loading={isLoading} />
          </>
        ) : (
          presentPrices.map((crypto, i) => (
            <ResultRow
              key={i}
              crypto={crypto.crypto}
              price={crypto.price}
              provider={crypto.provider}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default App;
