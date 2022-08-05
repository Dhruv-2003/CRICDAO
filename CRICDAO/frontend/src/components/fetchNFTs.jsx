// alchemy-nft-api/axios-script.js
import axios from "axios";

const FetchNFTs = async (userAddress) => {
  // Replace with your Alchemy API key:
  const apiKey = "bZFiL-IFAMe4QAh9Q30gDQ7m1vxEss4u";
  const baseURL = `https://polygon-mumbai.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
  // Replace with the wallet address you want to query for NFTs:
  const ownerAddr = userAddress;

  // Construct the axios request:
  var config = {
    method: "get",
    url: `${baseURL}?owner=${ownerAddr}`,
  };

  // Make the request and print the formatted response:
  const data = axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data, null, 2));
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return data;
};
