// GatoCard.jsx
export default function CatCard({ image, title, description, hoverColor, handleHover }) {
  return (
    <div
      onMouseEnter={() => handleHover(hoverColor)}
      onMouseLeave={() => handleHover('#FF70C0')}
      className="hover:border-[#C6FF00] hover:shadow-[inset_0_0_8px_#C6FF00] text-[#C6FF00] group relative w-96 h-96 rounded-2xl border border-black mt-8 overflow-hidden transition-colors duration-300"
    >
      <img
        src={`/${image}`}
        alt={title}
        className="w-full h-full object-cover rounded-2xl "
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-2xl">
        <div className="ml-2 flex flex-col gap-2 px-4">
          <p className="text-white text-2xl font-poppins font-bold">{title}</p>
          <p className="text-white text-base font-poppins font-regular">{description}</p>
        </div>
      </div>
    </div>
  );
}
