import { ComponentChild, JSX } from "preact";

interface CollapsibleCardOptions
  extends JSX.HTMLAttributes<HTMLDetailsElement> {
  title: string;
  child?: ComponentChild;
}

// TODO: collapse others when opening one
// scroll down to show full content (but not so much that top is no longer visible)
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#events

export function CollapsibleCard(props: CollapsibleCardOptions) {
  const handleClick = () => {
    console.log("hello");
    // trigger event here?
  };

  return (
    <details class="bg-white p-4" {...props} onClick={handleClick}>
      <summary>{props.title}</summary>
      {props.child}
    </details>
  );
}
