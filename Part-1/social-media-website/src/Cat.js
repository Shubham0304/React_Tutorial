import { useGetCat } from "./useGetCat.js"


export const Cat = () => {

    const {data, isCatLoading, refetchData} = useGetCat();

    if(isCatLoading) {
        return <h1> Loading...</h1>
    }

    return (
        <div>
            <button onClick={refetchData}>Get New Fact</button>
            <h1>
                {data?.fact}
            </h1>
        </div>

    )
}