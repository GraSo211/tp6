export default function Transportista( props) {
    return (
        <div className=" w-3/4 justify-around min-h-20    mt-5 ">
            <h3 className="font-bold">Datos del Transportista</h3>
            <div className="border border-pink-400  rounded-lg flex justify-evenly p-4">
                <span className="flex flex-col items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-user"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#f92f60"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <h2>{props.nombre}</h2>
                </span>

                <span className="flex flex-col items-center self-end">
                    <h3>Calificacion</h3>
                    <p> {props.calificacion}</p>
                </span>
                
            </div>
        </div>
    );
}
