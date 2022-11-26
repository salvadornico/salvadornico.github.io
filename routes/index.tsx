import { Head } from "$fresh/runtime.ts";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/mail.tsx";
import { CollapsibleCard } from "../components/CollapsibleCard.tsx";
import { Image } from "../components/Image.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nico Salvador</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="https://res.cloudinary.com/salvadornico/image/upload/v1507347645/Portfolio/icon.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans"
          rel="stylesheet"
        />
        <link href="css/base.css" rel="stylesheet" />
      </Head>

      <main class="bg-blue-800 min-h-screen">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center min-h-screen p-4">
          <div class="card md:max-w-[60vw] md:mr-4">
            <Image
              class="max-h-96"
              height="300"
              file="portrait.png"
              alt="That's me!"
            />
            <div class="bg-gray-100 p-4">
              <h1 class="text-2xl mb-3">Nico Salvador</h1>
              <h3>Mandaluyong, Philippines 🇵🇭</h3>
              <span class="text-xs text-slate-300">(current)</span>
              <h3>Quezon City, Philippines 🇵🇭</h3>
              <div class="link-icons mt-3">
                <a class="inline-block" href={"mailto:salvador.nico@gmail.com"}>
                  <IconMail class="w-6 h-6" />
                </a>
                <a class="inline-block" href="https://github.com/salvadornico">
                  <IconBrandGithub class="w-6 h-6" />
                </a>
                <a
                  class="inline-block"
                  href="https://www.linkedin.com/in/salvadornico"
                >
                  <IconBrandLinkedin class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div class="card-text text-white">
            <h1 class="text-2xl mb-3">Hi, I'm Nico.</h1>
            <p class="mb-2">
              I'm into all sorts of things. Maybe we can work on something
              together?
            </p>
            <p class="mb-3">
              I've always had a hard time picking what it is I'm most into over
              the course of my life. There are just so many awesome things out
              there in the world to be involved in, why just choose one? I
              believe that incredible things can come out of the most unlikely
              partnerships.
            </p>
            <h3 class="text-2xl">Let's get in touch!</h3>
            {/* TODO: Add back hvr arrow icon */}
          </div>
        </div>

        <Image
          class="w-screen max-h-96 object-cover"
          file="clark.jpg"
          alt="Clark International Speedway at sunset"
        />

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
                  Design thinking has always been my mindset. There's just
                  something special about creating something new with your
                  hands, whatever it is... 3D modelling and printing, Lego,
                  basic woodworking, and hopefully electronics as well soon.
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
      </main>
    </>
  );
}
