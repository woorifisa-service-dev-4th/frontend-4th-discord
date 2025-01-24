import Image from "next/image";

export function SearchFrom({defaultValue}) {
    return (
        <div className={"relative top-0 pb-10 "}>
            <input
                className={"absolute bg-[#1e1f22] text-[#8f969f] w-full focus:outline-none"}
                type="text"
                name="search"
                placeholder={defaultValue}
            />

            <div className={"absolute mt-1 right-2"}>
                <Image
                    // aria-hidden
                    src="/search-icon.svg"
                    alt="Search icon"
                    width={16}
                    height={16}
                />
            </div>

        </div>
    );
}