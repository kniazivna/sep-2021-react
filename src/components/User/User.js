const User = (props) => {
    let {id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs} = props;
    return (
        <div>
           <p> id: {id};</p>
           <p> name: {name};</p>
           <p> username: {username};</p>
            <p>email: {email};</p>
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
            <p>name: {companyName}</p>
            <p>catchPhrase: {catchPhrase}</p>
            <p>bs: {bs}</p>
        </div>
    );
};

export default User;