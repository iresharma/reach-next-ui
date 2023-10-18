import {useEditor} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {useEffect, useState} from "react";
import {Skeleton} from "~/components/ui/skeleton";

export type TipTapTextProps = {content: string, className?: string; style?: object};

export default function TipTapText({content, className, style}: TipTapTextProps) {
    const [text, setText] = useState("");
    const editor = useEditor({
        extensions: [StarterKit],
        editorProps: {
            attributes: {
                class:
                    `unreset p-4 pt-0 m-3 ml-0`,
            },
        },
        onCreate: (e) => {
            e.editor.commands.setContent(JSON.parse(content))
            console.log("Create", e.editor.getText())
            setText(e.editor.getText() ?? "")
        },
    }, [content]);
    return <p className={className} style={style}>
        {text === "" && <Skeleton className="h-4 mt-2 w-full rounded-full"/>}
        {text !== "" && text}
    </p>
}
