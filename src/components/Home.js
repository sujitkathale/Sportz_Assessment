import React from "react";
import { useEffect, useState } from "react";
// import "./main.css";
import PlayerDetails from "./PlayerDetails";
export default function Home() {
    const [dataSet, setDataSet] = useState([]);
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const response = await fetch(
                "https://api.npoint.io/20c1afef1661881ddc9c"
            );
            const result = await response.json();
            setDataSet(result);
            setPlayers(result.playerList);
            console.log(result);
        };
        fetchAPI();
    }, []);

    const handleSearch = (e) => {
        const item = e.target.value;
        const search_res = dataSet.playerList.filter((itm) => {
            return (
                itm.PFName?.toLowerCase().includes(item.toLowerCase()) ||
                itm.TName?.toLowerCase().includes(item.toLowerCase())
            );
        });
        setPlayers(search_res);
    };
    return (
        <div>
            <div className="playerSearch">
                <input
                    type="search"
                    placeholder="Search by name..."
                    className="playerInput"
                    id="search"
                    onChange={(e) => handleSearch(e)}
                />
            </div>

            <div className="playerContainer">
                {players.map((player) => (
                    <PlayerDetails
                        player={player}
                        className="playerItem"
                        key={player.Id}
                    />
                ))}
            </div>
        </div>
    );
}
