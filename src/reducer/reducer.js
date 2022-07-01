import { type } from "@testing-library/user-event/dist/type";

const incionstate=0;
const incrimentDecriment =(state=incionstate,action)=>{
    switch (action.type) {
        case
         'Incriment':
            return state + 1;
        case 'Decriment':
            return state - 1;
            break;
    
        default: return state;
            break;
    }
}

export default incrimentDecriment;