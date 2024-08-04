import {ReactSVG} from 'react-svg';

export default function ExternalSignIn({src, text}){
    return (
        <div className="border px-2 py-2 border-gray-200 rounded-md flex gap-2 font-sm items-center">
            <ReactSVG src={src}></ReactSVG>
            <p className="text-xs">{text}</p>
        </div>
    )
}