export const PostData = async (url, bodyData) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData)
        })
        if (!response.ok) {
            throw new Error("Server error")
        }
        const data = await response.json()
        console.log("Successfully Deleted data: ", data)
    } catch (error) {
        console.error("Can not delete data from server", error)
    };
}