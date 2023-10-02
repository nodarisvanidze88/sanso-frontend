export const GetData = async (url, setData=null) => {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Server error")
        }
        const data = await response.json()
        console.log(data)
        setData(data)
        console.log("Successfully get data: ", data)
    } catch (error) {
        console.error("Can not get data from server", error)
    };
}