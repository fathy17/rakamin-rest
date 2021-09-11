import { useEffect, useState } from "react";
import { Table } from "antd";
import { instance } from "../api/instance";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../shared/utils";

const columns = [
  {
    title: "ID",
    key: "id",
    render: (_text, record, index) => (
      <Link to={`/detail/${record.name}`}>{index + 1}</Link>
    ),
  },
  {
    title: "Name",
    key: "name",
    dataIndex: "name",
    render: (text) => capitalizeFirstLetter(text),
  },
];

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    instance.get("pokemon").then((value) => {
      setPokemonList(value.data.results);
    });
  });

  return (
    <div style={{ padding: "20px" }}>
      <Table dataSource={pokemonList} columns={columns} />
    </div>
  );
}

export default Pokemon;
