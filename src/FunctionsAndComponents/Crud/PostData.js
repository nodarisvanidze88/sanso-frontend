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
        console.log("Successfully Created New Data: ", data)
    } catch (error) {
        console.error("Can not Create new data in server", error)
    };
}