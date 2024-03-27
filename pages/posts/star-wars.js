
export default function StarWars({data}){
    return(
        <div>
            <h1 className="large font-mono">Star Wars Films</h1>
            {data.results.map( film => {
                return(
                    <ul key={film.episode_id}>
                        <li className="text-2xl">{film.title}</li>
                    </ul>
                )
            })}
        </div>
    )
}



export async function getServerSideProps(context) {

    const response = await fetch("https://swapi.dev/api/films")
    const data = await response.json();

    return { props: { data } }

}