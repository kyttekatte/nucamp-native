import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.ADD_COMMENT:
        //adding id to comment
            let newComment = {...action.payload, id: state.comments.length};
        //create a copy of comments array
            let newComments = state.comments.slice();
        //adding new comment to comments array
            newComments.push(newComment);
        //return new list of comments
            return {...state, comments: newComments};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};