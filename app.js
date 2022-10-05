// const URL = "https://api.astronomyapi.com/api/v2/bodies";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f762bd8c50msha7625877bc0d04dp1c2eb8jsn618f54e9f135",
    "X-RapidAPI-Host": "astronomy.p.rapidapi.com",
  },
};

fetch(
  "https://astronomy.p.rapidapi.com/api/v2/bodies/positions?latitude=33.775867&longitude=-84.39733&from_date=2017-12-20&to_date=2017-12-21&elevation=166&time=12%3A00%3A00",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
