import { useEffect, useState } from "react";
import { getShortAccessToken } from "../services/instagram";

const RedirectPage = () => {

  const [accessToken, setAccessToken] = useState("IGQWROWGRzY3N0R1JPdXM3QzBhM1ROVEtZAN3JCdUo4c0pfUmZAGOFdJTWhnOVpWT3pLQ0pSbUIwR1BJZAWZA6Um9USUFjbkpWd29Jbm5hcjBhREx4RlJsZAWYtMDdKY01WbHFQNVlzX05HekJ5Qmpua0twWEVYd1p0VmNlYy1ZAZAkFoalNxdwZDZD")

  useEffect(() => {
    //getCodeFromUrl()
  }, [])

  const getCodeFromUrl = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeParam = urlParams.get('code');
    const code = codeParam.replace("#_", "");

    const sat = await getShortAccessToken(code)
    setAccessToken(sat.access_token)
  }

  const copyTokenToclipboard = () => {
    navigator.clipboard.writeText(accessToken)
  }

  return (
    <div>
      <label>
        Your Access Token: &nbsp;
      </label>
      <button onClick={copyTokenToclipboard}>Copy</button>
      <div className="token-box">
        <div>
          {accessToken}
        </div>
      </div>
    </div>
  )

}

export default RedirectPage;