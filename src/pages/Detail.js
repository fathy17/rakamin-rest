import { Card, Image } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { capitalizeFirstLetter } from "../shared/utils";
import { instance } from "../api/instance";

function Detail() {
  const { pokemonName } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    instance.get(`pokemon/${pokemonName}`).then((value) => {
      setDetail(value.data);
    });
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Card
        title={`Detail ${capitalizeFirstLetter(pokemonName)}`}
        loading={!detail}
      >
        <Image
          src={detail?.sprites.other["official-artwork"].front_default}
          width="250px"
        />
        <p>Name: {capitalizeFirstLetter(detail?.name)}</p>
        <p>
          Abilities:{" "}
          {detail?.abilities
            .map((ability) => capitalizeFirstLetter(ability.ability.name))
            .join(", ")}
        </p>
        <p>Weight: {detail?.weight}</p>
      </Card>
    </div>
  );
}

export default Detail;
