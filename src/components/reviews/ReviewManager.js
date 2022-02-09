export const createReview = (review) => {
    return fetch("http://localhost:8000/reviews", {
        method: "POST",
        headers: {
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,            
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
    })
}