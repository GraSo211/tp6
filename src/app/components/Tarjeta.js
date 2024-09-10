export default function Tarjeta() {
    return (
        <div className="flex   justify-center items-center w-full   ">
            <div className="flex flex-col gap-3 border border-pink-400  rounded-lg p-5 w-3/4 h-auto my-5 ">
                <h4 className="justify-self-center font-bold text-xl">Datos de la Tarjeta</h4>

                <span className="flex  flex-col">
                    <label className="block  text-sm font-bold mb-2">Nro Tarjeta:</label>
                    <input
                        type="text"
                        placeholder="---- ---- ---- ---- "
                        className="shadow appearance-none border border-red-500 rounded text-2xl w-full  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    ></input>
                </span>

                <span className="flex  flex-col">
                    <label className="block  text-sm font-bold mb-2">Pin:</label>
                    <input
                        type="text"
                        pattern="/^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$/"
                        placeholder="---"
                        
                        className="shadow appearance-none border border-red-500 rounded text-2xl w-full  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    ></input>
                </span>

                <span className="flex  flex-col">
                    <label className="block  text-sm font-bold mb-2">Nombre que Figura en la Tarjeta:</label>
                    <input
                        type="text"
                        placeholder="Nombre y Apellido"
                        className="shadow appearance-none border border-red-500 rounded text-2xl w-full  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    ></input>
                </span>

                <span className="flex  flex-col">
                    <label className="block  text-sm font-bold mb-2">Tipo de Documento:</label>
                    <select className=" text-black">
                        <option value="Tipo1">Tipo1</option>
                        <option value="Tipo2">Tipo2</option>
                        <option value="Tipo3">Tipo3</option>
                        <option value="Tipo4">Tipo4</option>
                        <option value="Tipo5">Tipo5</option>
                        <option value="Tipo6">Tipo6</option>
                    </select>
                </span>

                <span className="flex  flex-col">
                    <label className="block  text-sm font-bold mb-2">Nro de Documento:</label>
                    <input
                        type="text"
                        placeholder="12345678 "
                        className="shadow appearance-none border border-red-500 rounded text-2xl w-full  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    ></input>
                </span>
                <input type="submit"></input>
            </div>
        </div>
    );
}
