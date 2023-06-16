const initialState={
    name:"Ram",
    personal_detail:{
        email:"thapaashim.ta@gmail.com",
        phoneNumber:"",
        street:"",
        address:"",
        work:""
    },
    page:0
}

const FormData =(state=initialState,action)=>{
    switch(action.type){
        case "Insert":
            console.log("dispatched",action.payload)
            console.log(state.personal_detail)
            return{
                ...state,
                [action.payload.name]:action.payload.value
            }
        // case "InsertList":
        //     console.log(action.payload.email)
        //     return{
        //         ...state,
        //         personal_detail:action.payload.

        //     }
        case 'INCREMENT_PAGE':
                return{
                    ...state,
                    page: state.page<3?state.page+1:state.page,
                }
        case 'DECREMENT_PAGE':
                    return{
                        ...state,
                        page: state.page>=0?state.page-1:state,
                    }
            
        default:
            // return initialState
            return state
    }

}
export default FormData