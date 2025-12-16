interface TitleProps {
  titulo: string;
  subtitulo: string;
}

export function Title({ titulo, subtitulo }: TitleProps) {
  // Uso interface para tipar las props (mejor práctica)
  return (
    <div className="flex flex-col items-start justify-center mb-8">
      <h1 className="text-gray-900 text-3xl font-bold text-left">{titulo}</h1>
      <h2 className="text-gray-500 text-sm font-semibold text-left mt-2">
        {subtitulo}
      </h2>
    </div>
  );
}
