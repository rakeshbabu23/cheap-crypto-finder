export interface FetchParams {
  currency?: string;
  crypto?: string;
  amount?: string;
}

export interface ResultProps {
  crypto: string;
  provider: string;
  price: string;
}
const fetchFromGuardian = async ({
  currency = "USD",
  crypto = "BTC",
  amount = "100",
}: FetchParams): Promise<ResultProps | void> => {
  try {
    const res = await fetch(
      `https://api-payments.guardarian.com/v1/estimate?from_amount=${amount}&from_currency=${currency}&to_currency=${crypto}&platform=web&from_network=${currency}&to_network=${crypto}`,
      {
        method: "GET",
        headers: {
          "x-api-key": "b9ee06c9-269d-4260-8cc5-1301da21197b",
          "x-sign-id": "a844b27f8ffe760d9a12cd1c9d602ebf",
        },
      }
    );
    const jsonData = await res.json();
    const obj = {
      provider: "Guardian",
      price: jsonData?.value?.toString(),
      crypto,
    };
    return obj;
  } catch (err) {
    alert("Error fetching prices:", err);
    return;
  }
};

const fetchFromMoonpay = async ({
  currency = "USD",
  crypto = "BTC",
  amount = "100",
}: FetchParams): Promise<ResultProps | void> => {
  try {
    const res = await fetch(
      `https://api.moonpay.com/v3/currencies/${crypto.toLowerCase()}/quote?baseCurrencyAmount=${amount}&areFeesIncluded=true&fixed=true&apiKey=pk_live_R5Lf25uBfNZyKwccAZpzcxuL3ZdJ3Hc&baseCurrencyCode=${currency}`,
      {
        method: "GET",
      }
    );

    const jsonData = await res.json();
    return {
      provider: "MoonPay",
      price: jsonData?.quoteCurrencyAmount.toString(),
      crypto,
    };
  } catch (err) {
    alert("Error fetching prices:", err);
    return;
  }
};

export const fetchPrices = async ({
  currency,
  crypto,
  amount,
}: FetchParams) => {
  try {
    const prices = await Promise.all([
      fetchFromGuardian({ currency, crypto, amount }),
      fetchFromMoonpay({ currency, crypto, amount }),
    ]);

    return prices;
  } catch (err) {
    alert("Error fetching prices:", err);
  }
};
