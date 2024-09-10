import { useState } from "react";
import Tarjeta from "./Tarjeta";
export default function Pago() {
    const [tarjetaOption, setTarjetaOption] = useState(false);
    return (
        <div className="flex flex-col w-3/4 justify-around min-h-20 h-auto  my-5  ">
            <h3 className="font-bold">Medios de Pago</h3>
            <div className="border  border-pink-400  rounded-lg flex justify-evenly p-4">
                <button className="flex justify-center flex-col items-center hover:bg-pink-300 w-40 rounded-lg p-3 duration-500 transition-colors" onClick={() => setTarjetaOption(!tarjetaOption)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-credit-card"
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
                        <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
                        <path d="   M3 10l18 0" />
                        <path d="M7 15l.01 0" />
                        <path d="M11 15l2 0" />
                    </svg>
                    Tarjeta
                </button>
                <button className="flex justify-center flex-col items-center w-40 hover:bg-pink-300 rounded-lg p-3 duration-500 transition-colors">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-cash-banknote"
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
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
                        <path d="M18 12l.01 0" />
                        <path d="M6 12l.01 0" />
                    </svg>
                    Contado
                </button>
                <button className="flex justify-center flex-col items-center w-40 hover:animate- hover:bg-pink-300 rounded-lg p-3 duration-500 transition-colors ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-cash"
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
                        <path d="M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                        <path d="M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                    </svg>
                    Contra-Entrega
                </button>
            </div>
            {tarjetaOption && <Tarjeta />}
        </div>
    );
}
