import { useEffect, useState } from "react";
import axios from "axios";
import { getAllByPlaceholderText } from "@testing-library/react";

function Blog() {
  const [cont, setCont] = useState();
  const [name, setName] = useState();
  const [url, setUrl] = useState();
  useEffect(() => {
    async function getUserData() {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/type/3`);
        console.log("helo", res.data);
        setName(res.date.damage_relations[0]);
        // setUrl(res.date.results.length);
      } catch (error) {
        console.log("error", error);
      }
    }
    getUserData();
  });
  return (
    <>
      <h1>your value us {cont}</h1>
      <h1>your value us {name}</h1>
      <h1>your value us {url}</h1>
      <select
        value={cont}
        onChange={(e) => {
          setCont(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
}
export default Blog;
