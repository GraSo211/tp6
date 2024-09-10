export default function Envio(props) {
    return (
        <div className=" w-3/4 justify-around min-h-20    mt-5 ">
            <h3 className="font-bold">Datos del Envio</h3>
            <div className="border border-pink-400   rounded-lg flex justify-evenly p-4">
                <span className="flex flex-col items-center border border-pink-400   p-5 rounded-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-calendar-month"
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
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                        <path d="M4 11h16" />
                        <path d="M7 14h.013" />
                        <path d="M10.01 14h.005" />
                        <path d="M13.01 14h.005" />
                        <path d="M16.015 14h.005" />
                        <path d="M13.015 17h.005" />
                        <path d="M7.01 17h.005" />
                        <path d="M10.01 17h.005" />
                    </svg>
                    <h2>Fecha Retiro</h2>
                    <p>{props.fecha_retiro}</p>
                </span>

                <span className="flex flex-col items-center border  border-pink-400  p-5 rounded-md">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-calendar-month"
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
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                        <path d="M4 11h16" />
                        <path d="M7 14h.013" />
                        <path d="M10.01 14h.005" />
                        <path d="M13.01 14h.005" />
                        <path d="M16.015 14h.005" />
                        <path d="M13.015 17h.005" />
                        <path d="M7.01 17h.005" />
                        <path d="M10.01 17h.005" />
                    </svg>
                    <h2>Fecha Entrega</h2>
                    <p>{props.fecha_entrega}</p>
                </span>
            </div>
        </div>
    );
}
