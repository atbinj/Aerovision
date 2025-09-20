export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 20"
    width="120"
    height="24"
    {...props}
    className="fill-current"
  >
    <text
      x="0"
      y="15"
      fontFamily="Space Grotesk, sans-serif"
      fontSize="16"
      fontWeight="bold"
    >
      Aerovision
    </text>
  </svg>
);
