import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-2 place-content-center">
      <div>
        <h1 className="text-8xl font-bold">
          <span className="text-gray">Don't worry</span>
          <br />
          <span>We'll fix it</span>
        </h1>
        <p>
          Welcome to <span>iRepair</span>, your one-stop place for all kinds of
          <span>Mackbook repairs</span> and diagnostics
        </p>
        <Button>Book a service</Button>
      </div>

      <div>
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/6/316317115/VU/LP/UY/181126883/macbook-repair-services.jpg"
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
