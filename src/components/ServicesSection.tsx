import {
  AirplaneTakeoff,
  CarSimple,
  Truck,
  UserCheck,
} from "@phosphor-icons/react";

function ServicesSection() {
  return (
    <>
      <div className="flex flex-col text-center items-center">
        <div className="text-fuchsia-100 p-3 mt-16 font-semibold">
          WHY CHOOSE US
        </div>

        <div className="text-lg md:text-4xl font-semibold w-1/2 text-white p-3 mb-10">
          Prioritizing safety and comfort with flexible booking and
          comprehensive travel solutions.
        </div>
        <div className="flex flex-col md:flex-row mb-24 mx-3">
          <div className="flex flex-col items-center p-7">
            <div className="rounded-full bg-fuchsia-100 p-4">
              <CarSimple size={32} className="text-theme" />
            </div>
            <div className="flex flex-col p-5 md:text-2xl text-white">
              Employee Transportation
            </div>
            <div className="text-slate-50">
              We also offer safe and reliable transportation solutions for
              individuals commuting to work or other destinations on a daily
              basis
            </div>
          </div>
          <div className="flex flex-col items-center p-7">
            <div className="rounded-full bg-fuchsia-100 p-4">
              <Truck size={32} className="text-theme" />
            </div>
            <div className="flex flex-col p-5 md:text-2xl text-white">
              Cab Transport Service
            </div>
            <div className="text-slate-50">
              Whether you need a ride to the airport, a quick trip to the mall,
              or transportation for a special event, our cab service is just a
              phone call away
            </div>
          </div>

          <div className="flex flex-col items-center p-7">
            <div className="rounded-full bg-fuchsia-100 p-4">
              <UserCheck size={32} className="text-theme" />
            </div>
            <div className="flex flex-col p-5 md:text-2xl text-white">
              Driver on Rent
            </div>
            <div className="text-slate-50">
              In addition to our cab services, we provide skilled drivers and a
              wide range of vehicles for comfortable and safe personal travel.
            </div>
          </div>
          <div className="flex flex-col items-center p-7">
            <div className="rounded-full bg-fuchsia-100 p-4">
              <AirplaneTakeoff size={32} className="text-theme" />
            </div>
            <div className="flex flex-col p-5 md:text-2xl text-white">
              Tour Packages
            </div>
            <div className="text-slate-50">
              Explore our affordable and customizable domestic and international
              tour packages suitable for individuals, couples, families, and
              groups.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesSection;
