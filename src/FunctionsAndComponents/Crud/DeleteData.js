export const DeleteData = async (url, dataID) => {
    try {
        const response = await fetch(`${url}${dataID}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (!response.ok) {
            throw new Error("Server error")
        }
        console.log("Successfully Deleted data: ")
    } catch (error) {
        console.error("Can not delete data from server", error)
    };
}