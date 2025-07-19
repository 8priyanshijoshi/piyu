import React, { useState } from 'react'

    function Welcome(props) {
        const [likes, setLikes] = useState(0);
        const [dislikes, setDislikes] = useState(0);

    return(
        <>
            <h2>Hello {props.name}!</h2>
            <p>You have {likes} likes.</p>
            <p>You have {dislikes} dislikes.</p>
            <button onClick={() => setLikes(likes + 1)}>Likes</button>
            <button onClick={() => setDislikes(dislikes + 1)}>Dis-likes</button>
        </>
    );
}

const Props_State = () => {
  return (
    <>
        <Welcome name="Priyanshi" /> 
    </>
  );
};

export default Props_State
