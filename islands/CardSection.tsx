import { useEffect } from "preact/hooks";
import { Accordion } from "../services/details-accordion.ts";
import { getUrl, ImageSize } from "../services/image.service.ts";
import CollapsibleCard from "./CollapsibleCard.tsx";

const getImageSection = (images: { file: string; alt: string }[]) => (
  <div class="max-w-full text-center m-2">
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
  useEffect(() => {
    document.querySelectorAll("details").forEach((el) => {
      new Accordion(el);
    });
  }, []);

  return (
    <section
      id="interest-cards"
      class="flex flex-col items-center gap-4 p-6"
    >
      <h1 class="text-2xl text-white">Things I'm Into</h1>
      <CollapsibleCard open title="Making">
        <div class="grid md:grid-cols-2">
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
        <div class="grid md:grid-cols-2">
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
      <CollapsibleCard title="Inline Skating">
        <div class="grid md:grid-cols-[repeat(2,auto)] gap-2 justify-items-center">
          <div>
            <p>
              I've been at it on and off since 2002 (see my lame 2011-era video
              footage to the side), skating parks all around Asia-Pacific along
              the way.
            </p>
            <p>
              Used to have a side project bringing in gear from shops all over
              the world to the Philippines, but scale was difficult at the time
              and so it's closed now. I also learned a lot about filming and
              editing video from being involved in this scene.
            </p>
          </div>
          <iframe
            src="https://player.vimeo.com/video/31335546?portrait=0"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </CollapsibleCard>
      <CollapsibleCard title="Marketing/PR/events">
        <p>
          I graduated from the University of the Philippines with a degree in
          Business Administration. And while most of my related experience
          afterwards was in marketing, I'm perfectly comfortable discussing
          economics, finance, corporate strategy, or management, and have even
          been called up to draft a contract or two.
        </p>
        <p>
          I've helped organize an{" "}
          <a class="text-blue-700" href="https://youtu.be/hyKqQg_m8Ds">
            indie-orchestra mashup concert
          </a>,{" "}
          <a
            class="text-blue-700"
            href="https://www.youtube.com/watch?v=iqqKuvqXKj4"
          >
            football tournaments
          </a>, and an{" "}
          <a
            class="text-blue-700"
            href="https://motioncars.inquirer.net/28757/name-kias-pba-team-and-win-a-trip-to-an-nba-game-in-los-angeles"
          >
            online contest to name a professional basketball team
          </a>, among many other less interesting things.
        </p>
        <div class="m-2 text-center">
          <iframe
            class="inline-block m-1"
            src="https://www.youtube.com/embed/hyKqQg_m8Ds"
            frameBorder="0"
            allowFullScreen
          />
          <iframe
            class="inline-block m-1"
            src="https://www.youtube.com/embed/iqqKuvqXKj4"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </CollapsibleCard>
    </section>
  );
}
