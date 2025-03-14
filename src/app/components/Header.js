
export default function Header() {

    return (
        <header className="flex sticky top-0   backdrop-blur-sm border-b border-pink-100 justify-around items-center h-16  min-h-16 w-full">
            <span className="w-1/2 h-full flex items-center font-bold  text-3xl ">TANGO APP</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-user-square"
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
                <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
                <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
            </svg>
        </header>
    );
}
