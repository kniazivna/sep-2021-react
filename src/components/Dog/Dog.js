import React from 'react';

const Dog = ({dogs,dogRemover}) => {
    return (
        <>
            {
                dogs.map(dogWithId =>
                    <div  key={dogWithId.id}>
                        <div>
                            <p>{dogWithId.dog}</p>
                            <button onClick={() => dogRemover(dogWithId.id)}>Delete</button>
                        </div>
                    </div>)
            }
        </>
    );
};

export default Dog;