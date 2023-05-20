import { useEffect } from "react"

const useTitle = (title) => {

    useEffect( () => {
        document.title = `${title} - Sports ToyZone`;
    }, [title])
}

export default useTitle;