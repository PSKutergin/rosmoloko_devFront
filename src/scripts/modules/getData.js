const getData = async (url) => {
    try {
        const res = await fetch(url)

        if (res.ok) {
            return await res.json()
        } else {
            throw new Error
        }
    } catch (error) {
        throw new Error("Произошла ошибка, данных нет!")
    }
}

export default getData;