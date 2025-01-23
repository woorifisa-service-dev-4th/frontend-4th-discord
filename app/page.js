import Image from "next/image";
import {SearchFrom} from "@/components/share-comps/SearchFrom";
import {MessageForm} from "@/components/share-comps/MessageForm";

export default function Home() {
    return (
        <>
            <SearchFrom defaultValue={"검색하기"}/>
            <MessageForm defaultValue={"gag"}/>
        </>
    );
}
