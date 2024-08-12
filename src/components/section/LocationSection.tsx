import TitleSection from '../common/TitleSection'
export default function LocationSection() {
  return (
    <section className="container">
        <div className="mb-32 flex flex-col gap-14 md:mb-36 md:gap-20 lg:mb-40">
          <TitleSection title="🗺• Our Library Location" subtitle="location" />
          <img
            src="./map.png"
            alt="map location"
            className="h-[200px] rounded-lg bg-cover bg-center shadow-2xl sm:h-full"
          />
        </div>
      </section>
  )
}
