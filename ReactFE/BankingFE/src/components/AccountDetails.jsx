import { useEffect, useState } from "react";

function AccountDetails() {

  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("/api/accounts.json")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch accounts");
        }

        return response.json();

      })

      .then((data) => {

        setAccounts(data);
        setLoading(false);

      })

      .catch((error) => {

        console.error(error);

        setError(
          "Unable to fetch account data."
        );

        setLoading(false);

      });

  }, []);


  if (loading) {

    return (
      <p>
        Loading accounts...
      </p>
    );

  }


  if (error) {

    return (
      <p style={{ color: "red" }}>
        {error}
      </p>
    );

  }


  return (

    <div>

      <h2>
        Accounts from API
      </h2>

      <table>

        <thead>

          <tr>

            <th>
              Account No
            </th>

            <th>
              Holder
            </th>

            <th>
              Balance
            </th>

          </tr>

        </thead>

        <tbody>

          {accounts.map((account) => (

            <tr
              key={account.accountNo}
            >

              <td>
                {account.accountNo}
              </td>

              <td>
                {account.holderName}
              </td>

              <td>
                ₹ {account.balance.toLocaleString()}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default AccountDetails;