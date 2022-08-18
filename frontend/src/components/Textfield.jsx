export default function TextField({type, placeholder}) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className="p-4 bg-white w-full rounded-2xl shadow text-black outline-none"
        />
    );
}