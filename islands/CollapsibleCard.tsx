import { ComponentChild, JSX } from "preact";

interface CollapsibleCardOptions
  extends JSX.HTMLAttributes<HTMLDetailsElement> {
  title: string;
  child?: ComponentChild;
}

export default function CollapsibleCard(props: CollapsibleCardOptions) {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const currentTitle = target.textContent;

    target.scrollIntoView({ behavior: "smooth" });

    document.querySelectorAll("details").forEach((el) => {
      if (el.getAttribute("title") !== currentTitle) {
        el.removeAttribute("open");
      }
    });
  };

  return (
    <details class="bg-white p-4" {...props} onClick={handleClick}>
      <summary>{props.title}</summary>
      {props.child}
    </details>
  );
}
