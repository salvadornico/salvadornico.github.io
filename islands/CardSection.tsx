
import { useEffect } from "preact/hooks";
import { CollapsibleCard } from "../components/CollapsibleCard.tsx";

export default function CardSection() {
  useEffect(() => {
    console.log('effect hook');
  }, []);

  return (
    <div
          id="interest-cards"
          className="flex flex-col items-center gap-4 p-6"
        >
    <CollapsibleCard
      open
      title="Making Things"
      child={
        <>
          <p>
            Design thinking has always been my mindset. There's just something
            special about creating something new with your hands, whatever it
            is... 3D modelling and printing, Lego, basic woodworking, and
            hopefully electronics as well soon.
          </p>
          <p>Coding is making too :)</p>
        </>
      }
    />
    <CollapsibleCard
        title="Racing" 
        child={
          <>
            <p>
              Racing brings together a lot of my varied interests:
              engineering, business/economics, sport, and community. It's
              something I love doing both in real life and in the simulator.
              I've participated in the AAP's Motorsport Development Program,
              Touge Battle, the Philippine Rallycross Series, and helped
              organize virtual events for MP Turbo.
            </p>
          </>
        }
      />
      <CollapsibleCard
        title="Software Engineering"
        child={
          <>
            <p>
              I've always enjoyed tinkering with technology and poking
              around the deepest levels of software settings, so programming
              was a natural next step. I love the way it demands both the
              ability to solve problems creatively and then the application
              of those ideas in a logical and systematic fashion.
            </p>
          </>
        }
      />
    </div>
  );
}
