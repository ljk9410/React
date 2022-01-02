let init = []
  
export function reducer(state = init, action) {
    if (action.type === '장바구니추가') {
        let copy = [...state];
        let same;
        
        same = copy.find(e => e.id === action.payload.id);
        console.log(same);
        if (same) {
            same.quantity++;
        } else {
            copy.push(action.payload);
        }
        return copy;
    }
    else if ( action.type === '수량증가' ) {
        let copy = [...state];

        copy[0].quantity++;
        return copy;
    }
    else if (action.type === '수량감소') {
        let copy = [...state];

        if (copy[0].quantity > 0)
        copy[0].quantity--;
        return copy;
    }
    else return state;
}

export function reducer2(state = true, action) {
    if (action.type === 'alert닫기') {
        return false
    }
    return state;
}