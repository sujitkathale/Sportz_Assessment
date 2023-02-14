import React from "react";
import { Link } from "react-router-dom";

export default function PlayerDetails({ player }) {
    return (
        <>
            <Link className="card" to={`/${player.Id}`}>
                <img className="playerImg" src={`images/${player.Id}.jpg`} alt="players" />
                <h3 className="playerName">{player.PFName}</h3>
                <h4 className="playerSkill">Skill: {player.SkillDesc}</h4>
                <h3 className="playerValue">Value: ${player.Value}</h3>
                <h5> UPCOMING MATCHES </h5>
                {player.UpComingMatchesList.map((match) => (
                    <p key={match.VsCCode}>
                        {match.CCode} vs {match.VsCCode}
                        <br />
                        <p>{match.MDate}</p>
                    </p>
                ))}

            </Link>

        </>
    );
}
