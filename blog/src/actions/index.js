import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';


/*
export const fetchPosts = () => { // Removed async 

                        // BAD APPROACH!
                        // const response = await jsonPlaceholder.get('/posts');
                        // return {
                        //     type: 'FETCH_POSTS',
                        //     payload: response
                        // };

    return async function(dispatch, getState)  {

        const response  =  await jsonPlaceholder.get('/posts');

        dispatch( { type: 'FETCH_POSTS', payload: response });    
    };
};
*/


// Shortened code equal to the above code, ES2015 syntax
export const fetchPosts = () => async dispatch =>  {
        const response  =  await jsonPlaceholder.get('/posts');
        dispatch( { type: 'FETCH_POSTS', payload: response.data });    
};

/* Commented out this version to implement the memoized version
export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`users/${id}`);
    dispatch( { type: 'FETCH_USER', payload: response.data });
};
*/


export const fetchUser = id => dispatch => {
    _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`users/${id}`);
    dispatch( { type: 'FETCH_USER', payload: response.data });
});



