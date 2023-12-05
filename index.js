// fetch("https://reqres.in/api/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const url =
  "https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=2396871";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "63db6dfc53msh4b635f2a364896ap1ae0dejsn6ae74bfe7e77",
    "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
