type IconProps = {
  className?: string;
};

export function ArrowIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BoltIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m13 2-8 12h6l-1 8 9-13h-6l0-7Z" fill="currentColor" />
    </svg>
  );
}

export function RouteIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 18.5c4.7 0 2.4-13 8.6-13 2 0 3.4 1.3 3.4 3.1 0 5.7-13 4-13 9.9 0 1.8 1.5 3 3.4 3h8.6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M6.5 18.5h.01M18.5 8.5h.01" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.1 4.3 9 3.5c.9-.4 1.9 0 2.3.9l.9 2.1c.3.8.1 1.7-.6 2.2l-1.1.9c.9 1.8 2.2 3.1 4 4l.9-1.1c.6-.7 1.5-.9 2.3-.6l2 .9c.9.4 1.3 1.4 1 2.3l-.8 1.9c-.4.9-1.2 1.5-2.2 1.5C9.9 18.4 5.6 14.1 5.6 6.5c0-.9.6-1.8 1.5-2.2Z" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ThermostatIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 14.2V5a2 2 0 1 1 4 0v9.2a4 4 0 1 1-4 0Z" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 17.6v.01M12 6.5h4M12 9.5h3" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

export function GaugeIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 17a8 8 0 1 1 14 0" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="m12 14 4-5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M8 17h8" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}
