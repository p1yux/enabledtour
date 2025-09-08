export default function WhyTour() {
  return (
    <section id="community" data-reveal className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-[960px] mx-auto">
          <h2 className="font-bold text-[#1d191a] text-3xl md:text-4xl leading-tight">
            Why We’re Touring Canada ?
          </h2>
          <p className="mt-4 text-[#3d3638] text-sm md:text-base leading-6 md:leading-7">
            Across Canada, people with disabilities still face hidden barriers to employment. Enabled Talent is on a mission to
            change that—through action, not words. This tour brings us to communities to listen, learn, and co-build an inclusive
            employment and innovation ecosystem, city by city
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E9E9EB]">
          {/* Bridging the Gap */}
          <div className="px-8 py-12 text-center">
            <img src="images/why-tour/gap.svg" alt="Bridging the Gap" className="mx-auto w-32 h-32" />

            <h3 className="font-semibold text-[#1d191a] text-xl">Bridging the Gap</h3>
            <p className="mt-3 text-[#3d3638] text-sm leading-6">
              Over 22% of Canadians live with disabilities, yet representation in tech and innovation remains
              critically low. We're changing that narrative.
            </p>
          </div>

          {/* Accessible Innovation */}
          <div className="px-8 py-12 text-center">
           {/* Accessible Innovation Icon */}
           <img src="images/why-tour/Assessibility.svg" alt="Accessible Innovation" className="mx-auto w-32 h-32" />
            <h3 className="font-semibold text-[#1d191a] text-xl">Accessible Innovation</h3>
            <p className="mt-3 text-[#3d3638] text-sm leading-6">
              Creating technology and solutions that work for everyone isn't just the right thing to do—it's better
              business and drives innovation.
            </p>
          </div>

          {/* National Impact */}
          <div className="px-8 py-12 text-center">
            <img src="images/why-tour/national.svg" alt="National Impact" className="mx-auto w-32 h-32" />

            <h3 className="font-semibold text-[#1d191a] text-xl">National Impact</h3>
            <p className="mt-3 text-[#3d3638] text-sm leading-6">
              From coast to coast, we're building a network of inclusive innovators who understand that diversity drives
              progress.
            </p>
          </div>

          {/* Community First */}
          <div className="px-8 py-12 text-center">
            <img src="images/why-tour/community.svg" alt="Community First" className="mx-auto w-32 h-32" />
            <h3 className="font-semibold text-[#1d191a] text-xl">Community First</h3>
            <p className="mt-3 text-[#3d3638] text-sm leading-6">
              Real change happens when communities come together. We're fostering connections that last beyond the tour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


