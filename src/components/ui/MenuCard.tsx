interface MenuCardProps {
  imagenSrc: string;
  alt: string;
  title: string;
  description: string;
  button: string;
  link: string;
}

export function MenuCard({
  imagenSrc,
  alt,
  title,
  description,
  button,
  link,
}: MenuCardProps) {
  return (
    <article className="rounded-lg flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white">
      <img src={imagenSrc} alt={alt} className="h-60 w-full object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-gray-900 font-bold text-xl">{title}</h3>
        <p className="text-gray-500 text-md mt-4 flex-1">{description}</p>
        <a
          href={link}
          className="flex cursor-pointer mt-6 font-semibold text-gray-700 hover:text-amber-400 transition-colors duration-200 items-center group"
        >
          {button}
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
