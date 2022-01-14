const User = ({user: {id, name, username}, getDetails}) => {

    return (
        <p>
            {id}--{name}--{username}
            <button onClick={()=>getDetails(id)}>Get details</button>
        </p>


    );
};

export default User;