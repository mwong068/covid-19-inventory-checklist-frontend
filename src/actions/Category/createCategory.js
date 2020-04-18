const createCategory = (event, categoryInfo, history) => {
    console.log(history)
    console.log(categoryInfo)
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        const token = localStorage.token
        return fetch('http://localhost:3000/categories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            category: {
            name: categoryInfo.name,
            description: categoryInfo.desc
            }
        })
        })
        .then(r => r.json())
        .then(data => {
            if(data.message){
                console.log(data.message)
            }
            else{
                console.log(data)
                history.push('/checklist')
                dispatch({type: 'CATEGORY_CREATED', categories: data})
            }
        })
    }
}

export default createCategory;