import React from 'react';

const Cat = ({cats,catRemover}) => {

    return (
        <>
            {
                cats.map(catWithId =>
                    <div key={catWithId.id}>
                        <div>
                            <p>{catWithId.cat}</p>
                            <button onClick={() => catRemover(catWithId.id)}>Delete</button>
                        </div>
                    </div>)
            }
        </>
    );
}

export default Cat;
