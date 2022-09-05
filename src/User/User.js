import React from "react";

export default function User(props) {

    const {name, city} = props
    
    return(
        <div>
            <h1>{name.first} {props.name.last}</h1>
            <h1>{props.id}/25</h1>
            <p><strong>From: </strong>{city}, {props.country}</p>
            <p><strong>Job Title: </strong>{props.title}</p>
            <p><strong>Employer: </strong>{props.employer}</p>
            <ol><strong>Favorite Movies:</strong>
                <li>{props.favoriteMovies[0]}</li>
                <li>{props.favoriteMovies[1]}</li>
                <li>{props.favoriteMovies[2]}</li>
            </ol>

        </div>
    );
}