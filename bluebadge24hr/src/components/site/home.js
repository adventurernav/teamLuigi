import React from 'react';
import {Link} from 'react-router-dom';

const Home = ()=> {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Are you cold and hungry?</h1>
                <p>
                    
                </p>
                <hr />
                <h1>Where are you?</h1>
                
                    <p>
                        <Link to='/resources'>Link</Link>
                    </p>
                
            </div>
        </div>
    );
};

export default Home;