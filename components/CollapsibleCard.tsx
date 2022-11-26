import { ComponentChild, JSX } from "preact";

interface CollapsibleCardOptions
  extends JSX.HTMLAttributes<HTMLDetailsElement> {
  title: string;
  child?: ComponentChild;
}

// TODO: Convert to island
// Scroll down to show fulll contents when opening
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#events

export function CollapsibleCard(props: CollapsibleCardOptions) {
  return (
    <details class="bg-white p-4" {...props}>
      <summary>{props.title}</summary>
      {props.child}
    </details>
  );
}
