import { ComponentChildren, JSX } from "preact";

interface CollapsibleCardOptions
  extends JSX.HTMLAttributes<HTMLDetailsElement> {
  title: string;
  children?: ComponentChildren;
}

export default function CollapsibleCard(props: CollapsibleCardOptions) {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const currentTitle = target.textContent;

    // target.scrollIntoView({ behavior: "smooth" });

    document.querySelectorAll("details").forEach((el) => {
      if (el.getAttribute("title") !== currentTitle) {
        el.removeAttribute("open");
      }
    });
  };

  return (
    <details
      class="bg-white p-4 drop-shadow-lg rounded-lg max-w-screen-lg"
      {...props}
      onClick={handleClick}
    >
      <summary class="font-bold">{props.title}</summary>
      <div class="content">{props.children}</div>
    </details>
  );
}
