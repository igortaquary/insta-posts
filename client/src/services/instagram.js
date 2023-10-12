
const clientId = "623022389728995"
const clientSecret = "4053837fec543e7997535af4ae345812";
const redirectUri = "https://localhost:3000/redirect"

export const instaPopUp = () => {
  const url = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`
  window.open(url)
}

//https://localhost:3000/?code=#_

//AQBJHpx0vPSCBEKHXQYErTsBHNfAvyrnTNzynRrUv1Q1TzBbLqO2LOSxXvQraNmaxB0N4WjxNW5URnjnakOUhZQUPxtAzJbDeIKb7zxhxKfo9t8E_NMR9Qs1QZenGTcPZ8lE4WDvwS-jr5TmcVU-eeBCqcucG5MZSU4VQW580uPQdzB4B9Jy3tHwTeu6_mOx0jzoGpRnEdDdb1njk7_rks572cwcaeJ9xf9rHJUYSjMQ5w

//IGQWRNUGU4bkd4bE5BUWQxTzB1MktldFRxZAkxWYm5nalRwNkJNTDIzZAzBDdlhoSmlHZAEVCWTRlZATZA4MWJITUpjYVp0cmpFTW1XU1BpNnZApanRGWG5MaDBJODRJWm1wSnJNMzFvQmxDRFlOYTBxTVhjME96YmlQYkkZD

/* export const getShortAccessToken = async (code) => {
  const form = new FormData();
  form.append("code", code);
  form.append("client_secret", clientSecret);
  form.append("client_id", clientId);
  form.append("redirect_uri", redirectUri);
  form.append("grant_type", "authorization_code");

  const options = {
    method: 'POST',
    headers: {
      //cookie: 'ig_did=BE49AD40-DAE8-4B4F-B1CB-845DB258010A; ig_nrcb=1; csrftoken=EGYdq811QO6HpAxkyoLSniOx4wWn5KLD; mid=ZSc7awAEAAHQHCLaGh1e5nuKYfGr',
      'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
      'Access-Control-Allow-Origin': 'https://localhost:3000',
      'Access-Control-Allow-Credentials': 'true'
    }
  };

  options.body = form;

  try {
    const response = await fetch('https://api.instagram.com/oauth/access_token', options)
    const json = response.json()
    console.log(json)
    const shortAccessToken = json.access_token
    return shortAccessToken;
  } catch (error) {
    console.error(error)
  }
} */

export const getShortAccessToken = async (code) => {
  const response = await fetch('http://localhost:3001/getsat?code='+code)
  return response.json()
}

export const exchangeToken = (shortAccessToken) => {
  const longAccessToken = ""

  return longAccessToken;
}