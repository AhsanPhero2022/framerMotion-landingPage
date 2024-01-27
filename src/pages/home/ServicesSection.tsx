import BatteryReplaceMent from "@/components/serviceTiles/BatteryReplaceMent";
import Container from "@/components/ui/Container";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col  justify-between items-center">
        <h1>Services that we provide.</h1>
        <p className="max-w-[80ch] mt-10 mb-20">
          All our technicians fully qualified and licensed. Moreover, they are
          incredibly skillful and proficient in various aspects or computer
          repair.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[20px]">
        <BatteryReplaceMent></BatteryReplaceMent>
        <div className="col-span-6 lg:col-span-5 bg-green-300 h-[300px]"></div>
        <div className="col-span-6 lg:col-span-7 bg-green-300 h-[300px]"></div>
        <div className="col-span-12 bg-green-300 h-[300px]"></div>
        <div className="col-span-12  md:col-span-6 lg:col-span-4 bg-green-300 h-[300px]"></div>
        <div className="col-span-12   md:col-span-6 lg:col-span-4 bg-green-300 h-[300px]"></div>
        <div className="col-span-12 md:col-span-12 lg:col-span-4 bg-green-300 h-[300px]"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
