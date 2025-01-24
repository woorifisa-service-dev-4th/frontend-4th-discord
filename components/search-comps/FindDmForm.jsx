

export function FindDmForm() {
    return (
        <div className={"relative top-0 z-5"}>
            <input
                className={"absolute bg-[#1e1f22] text-[#8f969f] text-sm  rounded-md py-1 px-2 w-full focus:outline-none"}
                type="text"
                name="search"
                placeholder="대화 찾기 또는 시작하기"
            />
            <div className="h-9  flex items-center border-b border-black"></div>
        </div>
    );
}