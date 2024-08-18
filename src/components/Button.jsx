import Link from "next/link";

export default function Button({
  link,
  label,
  className = "",
  isExternal = false,
  isLink = true,
  unstyled = false,
  ...args
}) {
  const buttonClass = unstyled ? className : `primary-button ${className}`;

  if (!isLink) {
    return (
      <button {...args} className={buttonClass}>
        <span>{label}</span>
      </button>
    );
  }

  if (isExternal) {
    args.target = "_blank";
  }

  return (
    <Link
      {...args}
      href={link}
      rel="noopener noreferrer nofollow"
      className={buttonClass}
    >
      <span>{label}</span>
    </Link>
  );
}
