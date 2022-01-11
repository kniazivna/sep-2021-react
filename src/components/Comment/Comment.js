import "./Comment.css"

const Comment = (props) => {

    const {postId, id, name, email, body} = props;

    return (
        <div className={'comment'}>
            <p> postId: {postId};</p>
            <p> id: {id};</p>
            <p> name: {name};</p>
            <p> email: {email};</p>
            <p>body: {body};</p>
        </div>
    );
};


export default Comment;