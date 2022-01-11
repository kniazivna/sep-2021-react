const Comment = (props) => {

    const {postId, id, name, email, body} = props;

    return (
        <div>
            <p> postId: {postId};</p>
            <p> id: {id};</p>
            <p> name: {name};</p>
            <p> email: {email};</p>
            <p>body: {body};</p>
        </div>
    );
};


export default Comment;