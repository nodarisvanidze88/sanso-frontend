export const PutData = async (url, dataID, bodyData) => {
    try {
        const response = await fetch(`${url}${dataID}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData)
        })
        if (!response.ok) {
            throw new Error("Server error")
        }
        const data = await response.json()
        console.log("Successfully Updated data: ", data)
    } catch (error) {
        console.error("Can not Update data from server", error)
    };
}