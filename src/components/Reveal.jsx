import useFadeIn from "./useFadeIn";

/**
 * Wraps any element so it reveals when scrolled into view. Pair with the
 * existing `.fade-in` + `.fade-in.visible` CSS rules. Pass `as` to render a
 * different tag (defaults to `<div>`); pass `delay` to stagger.
 */
export default function Reveal({ as: Tag = "div", delay, children, className = "", ...rest }) {
  const ref = useFadeIn();
  const style = delay
    ? { ...(rest.style || {}), "--reveal-delay": `${delay}ms` }
    : rest.style;
  return (
    <Tag ref={ref} className={`fade-in ${className}`.trim()} style={style} {...rest}>
      {children}
    </Tag>
  );
}