import { FC, useEffect, useState } from "react";
import Input, { InputProps } from "./components/Input";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button";
import useFetch from "./hooks/useFetch";
import useWindowResize from "./hooks/useWindowResize";
import { ResultProps } from "./services/fetchPrices";
const CURRENCIES: string[] = ["USD", "EUR", "INR"];
const CRYPTOES: string[] = ["BTC", "ETH", "SOL"];

interface ExtendedProps extends InputProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPresentPrices: React.Dispatch<React.SetStateAction<ResultProps[]>>;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  setCrypto: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
}

const AmountInput: FC<ExtendedProps> = ({
  value,
  onChange,
  setIsLoading,
  setPresentPrices,
}) => {
  const width = useWindowResize();
  const [price, setPrice] = useState<string>("100");
  const [currency, setCurrency] = useState<string>("USD");
  const [crypto, setCrypto] = useState<string>("BTC");
  const { prices } = useFetch();

  const fetchCryptoPrices = async () => {
    setIsLoading(true);
    const currentPrices = await prices({
      currency,
      amount: price,
      crypto,
    });
    setIsLoading(false);
    setPresentPrices(currentPrices);
  };
  useEffect(() => {
    fetchCryptoPrices();
  }, []);

  return (
    <div>
      {width < 768 ? (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Input
              classNames="text-left border rounded-lg w-24 pl-4 bg-transparent text-xl"
              placeholder="Amount"
              value={value}
              onChange={(e) => onChange(e)}
            />
            <Dropdown
              options={CURRENCIES}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            />
            <Dropdown
              options={CRYPTOES}
              value={crypto}
              onChange={(e) => setCrypto(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <Button
              title="search"
              onClick={() => {
                fetchCryptoPrices();
              }}
            />
          </div>
        </div>
      ) : (
        <div className="rounded-lg flex items-center gap-4">
          <Input
            classNames="text-left border rounded-lg w-24 pl-4 bg-transparent text-xl"
            placeholder="Amount"
            value={value}
            onChange={(e) => onChange(e)}
          />
          <Dropdown
            options={CURRENCIES}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
          <Dropdown
            options={CRYPTOES}
            value={crypto}
            onChange={(e) => setCrypto(e.target.value)}
          />

          <Button
            title="search"
            onClick={() => {
              console.log("Searching...");
              fetchCryptoPrices();
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AmountInput;
