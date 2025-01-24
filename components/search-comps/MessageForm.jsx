import Image from "next/image";

export function MessageForm({defaultValue}) {
    return (
        <div className={"relative top-0 pb-10 "}>
            <input
                className={"absolute bg-[#1e1f22] text-[#8f969f] w-full focus:outline-none"}
                type="text"
                name="search"
                placeholder={`${defaultValue}에 메시지 보내기`}
            />

            {/*<div className={"absolute mt-1 right-2"}>*/}
            {/*    <Image*/}
            {/*        // aria-hidden*/}
            {/*        src="/attach-button.svg"*/}
            {/*        alt="Attach button"*/}
            {/*        width={16}*/}
            {/*        height={16}*/}
            {/*    />*/}
            {/*</div>*/}
        </div>
    );
}