const testimonials = [
  {
    name: "Mehwish",
    text: "Compliment interested discretion estimating on stimulated apartments oh.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    active: false,
  },
  {
    name: "Elizabeth Jeff",
    text: "Dear so sing when in find read of call. As distrusts behaviour abilities defective.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    active: true,
  },
  {
    name: "Emily Thomas",
    text: "Never at water me might. On formed merits hunted unable merely by mr whence or.",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    active: false,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#1e2b23] text-[#f5f5f5] py-20 px-6 md:px-20 font-sans relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none z-0">
        <div className="bg-[#0F172A] col-span-7"></div>
        <div className="bg-[#1E293B] col-span-5"></div>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center max-w-[1260px] mx-auto">
        {/* Left side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            What Our <span className="italic text-blue-400">Clients</span> Say
          </h2>
          <p className="text-gray-400 mb-6 max-w-lg">
            We’ve worked with founders, creators, and Web3 brands across the
            globe. Here’s what they think.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-black px-6 py-2 rounded-md shadow font-semibold uppercase tracking-wide">
            View More
          </button>
        </div>

        {/* Right side */}
        <div className="space-y-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                t.active
                  ? "bg-[#0F172A] border-l-4 border-blue-500"
                  : "bg-[#1E293B]"
              }`}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-400"
              />
              <div>
                <h4 className="font-bold text-white text-lg">{t.name}</h4>
                <p className="text-gray-300 text-sm">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
