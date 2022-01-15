import React from 'react';

import './Details.css'

const Details = ({user,getUserId}) => {

    const {id, name, username, email,address:{street,suite,city, zipcode,geo:{lat, lng}}, phone, website,
        company} = user;
    return (
        <div className={'details'}>
            <p>Id: {id}</p>
            <p>name: {name}</p>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>address:</p>
            <p>street: {street}</p>
            <p>suite: {suite}</p>
            <p>city: {city}</p>
            <p>zipcode: {zipcode}</p>
            <p>geo:</p>
            <p>lat: {lat}</p>
            <p>lng: {lng}</p>
            <p>phone: {phone}</p>
            <p>website: {website}</p>
            <p>company:</p>
            <p>company name: {company.name}</p>
            <p>catchPhrase: {company.catchPhrase}</p>
            <p>bs: {company.bs}</p>
            <button onClick={() => getUserId(id)}>Show user posts</button>
        </div>
    );
};

export default Details;