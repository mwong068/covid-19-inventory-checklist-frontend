// no longer need this action as the serializer shows the user's items as well

// const getItems = (id) => {
//     console.log(id)
//     return (dispatch) => {
//         dispatch({type: 'LOADING'})
//         const token = localStorage.token;
//         fetch('http://localhost:3000/helpful_items', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//             'Authorization': `Bearer ${token}`
//         },
//         })
//         .then(r => r.json())
//         .then(data => {
//             if (data.message){
//                 console.log(data.message)  
//             }
//             else {
//                 let userItems = data.find((item) => (item.helpful_user_id === id))
//                 console.log(userItems)
//                 dispatch({type: 'LOADED_USER_ITEMS', items: [userItems]})
//             }
//         }
//     )}
// }

// export default getItems;