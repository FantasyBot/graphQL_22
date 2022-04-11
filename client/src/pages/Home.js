import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
    }
  }
`;

const Home = () => {
  const { error, loading, data } = useQuery(GET_PRODUCTS);

  if (error) return <h2>Something went wrong...</h2>;
  if (loading) return <h2>Loading...</h2>;
  return (
    <ul>
      {data.products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  );
};

export default Home;
