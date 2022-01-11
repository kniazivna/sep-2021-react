import "./Post.css"

const Post = (props) => {

    const {userId, id, title, body} = props;

    return (
        <div className={'post'}>
            <p> userId: {userId};</p>
            <p> id: {id};</p>
            <p> title: {title};</p>
            <p>body: {body};</p>
        </div>
    );
};


export default Post;