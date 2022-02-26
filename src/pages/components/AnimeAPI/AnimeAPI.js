import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const AnimeAPI = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://animes3.p.rapidapi.com/", {
      method: "GET",
      headers: {
        "x-rapidapi-host": `${process.env.NEXT_PUBLIC_API_HOST}`,
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.slice(0, 9).map((user) => (
            <CardGroup key={user.id} className="w-50">
              <Card className="m-2 position-relative">
                <Image
                  alt="Card image cap"
                  src={user.img}
                  width={500}
                  height={500}
                />
                <CardBody>
                  <CardTitle tag="h5">{user.title}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {user.name}
                  </CardSubtitle>
                </CardBody>
              </Card>
            </CardGroup>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnimeAPI;
