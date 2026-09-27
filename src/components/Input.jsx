import { useState } from "react";

const STATE_CLASS = {
  default:
    "border-neutral-100 bg-white text-neutral-500 placeholder:text-neutral-200",
  focus:
    "border-primary-500 bg-white text-neutral-500 placeholder:text-neutral-200 shadow-[0_0_0_2px_#52FFBA]",
  filled: "border-neutral-300 bg-white text-neutral-500",
  disabled:
    "border-neutral-100 bg-neutral-100 text-neutral-200 placeholder:text-neutral-200 cursor-not-allowed",
};

export default function Input({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  onFocus,
  onBlur,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  const state = disabled
    ? "disabled"
    : focused
      ? "focus"
      : value
        ? "filled"
        : "default";

  return (
    <div className="flex w-full max-w-80 flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="body-sm text-neutral-500">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        data-state={state}
        {...props}
        onFocus={(event) => {
          setFocused(true);
          onFocus?.(event);
        }}
        onBlur={(event) => {
          setFocused(false);
          onBlur?.(event);
        }}
        className={`w-full rounded-md border px-4 py-2 body-md outline-none transition-colors ${disabled ? "" : "focus:border-primary-500 focus:shadow-[0_0_0_2px_#52FFBA]"} ${STATE_CLASS[state]}`}
      />
      {error && <p className="caption text-red-500">{error}</p>}
    </div>
  );
}
