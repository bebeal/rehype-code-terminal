import { SVGProps } from "react";


export const CarbonIcons = {
  Copy: (props: SVGProps<SVGSVGElement>) => (
    <svg id="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <title>copy</title>
      <path
        d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"
        transform="translate(0)"
      />
      <path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z" transform="translate(0)" />
    </svg>
  ),

  CopySuccess: (props: SVGProps<SVGSVGElement>) => (
    <svg fill={'currentColor'} viewBox="0 0 32 32" {...props}>
      <title>copy-success</title>
      <path stroke="none" fill="currentColor" d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z" />
      <path stroke="none" fill="currentColor" d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z" />
        <path
          stroke="none"
          fill="currentColor"
          d="m14.73 21.134-2.2194-2.1771 1.3125-1.3325 1.2242 1.1919c0.6733 0.65553 1.3893 1.3354 1.5911 1.5108l0.36688 0.31894 6.8473-6.689 1.3359 1.3359-4.0317 3.9806c-2.2174 2.1893-4.0712 3.9934-4.1195 4.0091-0.04831 0.01567-1.0866-0.95119-2.3072-2.1486z"
          fillRule="evenodd"
          strokeOpacity="0"
        />
      </svg>
  ),

  Download: (props: SVGProps<SVGSVGElement>) => (
    <svg
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <title>download</title>
      <path d="M26,24v4H6V24H4v4H4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2h0V24Z" />
      <polygon points="26 14 24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14" />
    </svg>
  ),
};
