import { getUrl, ImageSize } from "../services/image.service.ts";
import CollapsibleCard from "./CollapsibleCard.tsx";

const getImageSection = (images: { file: string; alt: string }[]) => (
  <div className="max-w-full text-center mb-2 mt-3">
    {images.map(({ file, alt }) => (
      <img
        class="inline-block m-1"
        src={getUrl({
          file,
          path: "portfolio",
          sizeType: ImageSize.Thumb,
        })}
        alt={alt}
        loading="lazy"
      />
    ))}
  </div>
);

export default function CardSection() {
  return (
    <div
      id="interest-cards"
      className="flex flex-col items-center gap-4 p-6"
    >
      <CollapsibleCard open title="Making Things">
        <div className="grid md:grid-cols-2">
          {getImageSection([
            {
              file: "PXL_20201115_100450227.jpg",
              alt: "3D printing in progress",
            },
            { file: "PXL_20201101_022145074.jpg", alt: "Flight stick mods" },
            {
              file: "park_design.jpg",
              alt: "3D printing in progress3D modelled skatepark design",
            },
          ])}
          <div>
            <p>
              Design thinking has always been my mindset. There's just something
              special about creating something new with your hands, whatever it
              is... 3D modelling and printing, Lego, basic woodworking, and
              hopefully electronics as well soon.
            </p>
            <p>Coding is making too :)</p>
          </div>
        </div>
      </CollapsibleCard>

      <CollapsibleCard title="Racing">
        <div className="grid md:grid-cols-2">
          {getImageSection([
            {
              file: "mirage-cis",
              alt: "Touge Battle at Clark International Speedway",
            },
            { file: "simrig.jpg", alt: "Home driving sim rig" },
          ])}
          <div>
            <p>
              Racing brings together a lot of my varied interests: engineering,
              business/economics, sport, and community. It's something I love
              doing both in real life and in the simulator.
            </p>
            <p>
              I've participated in the AAP's Motorsport Development Program,
              Touge Battle, the Philippine Rallycross Series, and helped
              organize virtual events for MP Turbo.
            </p>
          </div>
        </div>
      </CollapsibleCard>
      <CollapsibleCard title="Software Engineering">
        <p>
          I've always enjoyed tinkering with technology and poking around the
          deepest levels of software settings, so programming was a natural next
          step. I love the way it demands both the ability to solve problems
          creatively and then the application of those ideas in a logical and
          systematic fashion.
        </p>
      </CollapsibleCard>
    </div>
  );
}
