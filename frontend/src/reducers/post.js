import { GET_ONE_POST, UPVOTE_POST, DOWNVOTE_POST} from '../actions/types'

const post = (state = {}, action) => {
	switch (action.type){
		case GET_ONE_POST:
			return {
        ...state,
        post: action.post
      }
		case DOWNVOTE_POST:
		case UPVOTE_POST:
		return {
			...state,
                post: action.post
            };
		default:
			return state;
	}
}

export default post;