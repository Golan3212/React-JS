export const EXAMPLE_ACTIONS = `EXAMPLE_ACTIONS`;
export const CHANGE_NAME = 'CHANGE_NAME';


export const exampleAction = {
    type: EXAMPLE_ACTIONS
}

export const changeName = (value) =>(
    {
        type: CHANGE_NAME,
        payload: value
    }) 