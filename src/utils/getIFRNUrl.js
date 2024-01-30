export const getIFRNUrl = (from) => {
  const rootUrl = process.env.REACT_APP_OAUTH2_LOGIN_URI;

  const options = {
    redirect_uri: process.env.REACT_APP_OAUTH2_REDIRECT_URI,
    client_id: process.env.REACT_APP_OAUTH2_CLIENT_ID,
    response_type: "code",
    grant_type: "authorization-code",
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};