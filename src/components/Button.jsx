const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor }) => {
    return (
        <button className={`flex 
        justify-center 
        items-center gap-2 px-7 
        py-4 border ${borderColor ? borderColor : 'border-coral-red'} font-montserrat 
        text-lg leading-none 
        ${backgroundColor ? backgroundColor : 'bg-coral-red'} rounded-full 
        ${textColor ? textColor : 'text-white'}`
        }
        >
            {label}
            {iconUrl && <img
                src={iconUrl}
                alt="arrow right icon"
                className="ml-2 rounded-full w-5 h-5"
            />}
        </button>
    )
}

export default Button
