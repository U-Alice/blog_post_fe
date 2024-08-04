export default function Button({className, content, onClick, type}){
    return (
      <button
        className={`bg-brand text-white rounded-md py-2 ${className} font-bold`}
        onClick={onClick}
        type={type}
      >
        {content}
      </button>
    );
}