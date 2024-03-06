import { SVGProps, LegacyRef, FC } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  refProp?: LegacyRef<SVGSVGElement> | undefined;
}

export const Logo: FC<IconProps> = (props) => {
  const { refProp, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="119"
      height="32"
      fill="none"
      ref={refProp}
      {...otherProps}
    >
      <g clipPath="url(#A)">
        <g fillRule="evenodd" fill="#F9FAFB">
          <path d="M53.23 18.871c0 .218.177.395.395.395h7.206c.218 0 .395.177.395.395v1.473c0 .218-.177.395-.395.395H53.23h-1.872c-.218 0-.395-.177-.395-.395v-1.868-5.733-1.87c0-.218.177-.395.395-.395h1.872 7.601c.218 0 .395.177.395.395v1.475c0 .218-.177.395-.395.395h-7.206c-.218 0-.395.177-.395.395v4.943zm22.919 0c0 .218.177.395.395.395h7.206c.218 0 .395.177.395.395v1.473c0 .218-.177.395-.395.395h-7.601-1.868c-.218 0-.395-.177-.395-.395v-1.868-5.733-1.87c0-.218.177-.395.395-.395h1.868 7.601c.218 0 .395.177.395.395v1.475c0 .218-.177.395-.395.395h-7.206c-.218 0-.395.177-.395.395v.944c0 .218.177.395.395.395h7.206c.218 0 .395.177.395.395v1.473c0 .218-.177.395-.395.395h-7.206c-.218 0-.395.177-.395.395v.946zm11.447-.008c0 .218.177.395.395.395H95.2c.218 0 .395.177.395.395v1.473c0 .218-.177.395-.395.395h-7.604-1.868c-.218 0-.395-.177-.395-.395v-1.868-5.733-1.87c0-.218.177-.395.395-.395h1.868H95.2c.218 0 .395.177.395.395v1.475c0 .218-.177.395-.395.395h-7.209c-.218 0-.395.177-.395.395v.944c0 .218.177.395.395.395H95.2c.218 0 .395.177.395.395v1.473c0 .218-.177.395-.395.395h-7.209c-.218 0-.395.177-.395.395v.946zm9.194-7.201c0-.218.177-.395.395-.395h1.341l1.505-.007c.142-.001.273.075.344.197l3.674 6.363c.203.35.738.207.738-.197v-5.961c0-.218.177-.395.395-.395h1.475c.218 0 .395.177.395.395v9.472c0 .218-.177.395-.395.395h-1.502l-1.351.002c-.141 0-.272-.075-.342-.198l-3.669-6.357c-.202-.35-.737-.207-.737.197v5.96c0 .218-.177.395-.395.395h-1.475c-.218 0-.395-.177-.395-.395v-9.471zM39.901 17.53c-.218 0-.395-.177-.395-.395v-5.472c0-.218.177-.395.395-.395h9.474c.218 0 .395.177.395.395v1.473c0 .218-.177.395-.395.395h-7.206c-.218 0-.395.177-.395.395v.944c0 .218.177.395.395.395h7.206c.218 0 .395.177.395.395v5.472c0 .218-.177.395-.395.395h-9.474c-.218 0-.395-.177-.395-.395v-1.473c0-.218.177-.395.395-.395h7.206c.218 0 .395-.177.395-.395v-.944c0-.218-.177-.395-.395-.395h-7.206zm22.519-5.868c0-.218.177-.395.395-.395h9.472c.218 0 .395.177.395.395v5.472c0 .218-.177.395-.395.395h-1.185c-.152 0-.247.165-.171.296l1.71 2.962c.19.329-.048.741-.428.741h-1.53c-.141 0-.272-.075-.342-.198l-2.081-3.604c-.071-.122-.201-.198-.342-.198h-2.84c-.218 0-.395.177-.395.395v3.209c0 .218-.177.395-.395.395h-1.473c-.218 0-.395-.177-.395-.395V11.66zm2.658 1.87c-.218 0-.395.177-.395.395v.944c0 .218.177.395.395.395h4.943c.218 0 .395-.177.395-.395v-.944c0-.218-.177-.395-.395-.395h-4.943zm43.169-1.87c0-.218.177-.395.395-.395h9.474c.218 0 .395.177.395.395v1.473c0 .218-.177.395-.395.395h-7.207c-.218 0-.395.177-.395.395v.944c0 .218.177.395.395.395h7.207c.218 0 .395.177.395.395v5.472c0 .218-.177.395-.395.395h-9.474c-.218 0-.395-.177-.395-.395v-1.473c0-.218.177-.395.395-.395h7.206c.219 0 .395-.177.395-.395v-.944c0-.218-.176-.395-.395-.395h-7.206c-.218 0-.395-.177-.395-.395v-5.472z" />
        </g>
        <path
          d="M0 29.721c0 .353.307.628.658.589l2.878-.318 1.965-.197c.101-.01.178-.095.178-.197v-6.23c0-.111-.091-.2-.202-.197l-1.334.032c-.333.008-.607-.26-.607-.593V6.736c0-.375.345-.656.712-.58l1.193.246c.123.025.237-.068.237-.193V3.3c0-.091-.062-.17-.151-.192L.733 1.935C.36 1.844 0 2.127 0 2.511v27.209z"
          fill="#F9FAFB"
        />
        <path
          d="M27.585 19.457v-8.426c0-.291-.211-.538-.498-.585L14.349 8.378c-.361-.059-.687.22-.687.585v11.762c0 .324.26.588.584.593l1.91.027c.33.005.601-.262.601-.592v-1.915c0-.339.285-.61.623-.592l7.214.377c.315.016.562.276.562.592v1.672c0 .324.26.588.584.592l1.246.018c.331.005.602-.262.601-.593l-.001-1.447zm-10.291-4.34c-.305-.028-.539-.284-.539-.59v-1.927c0-.357.314-.633.669-.588l7.214.931c.296.038.517.29.517.588v1.649c0 .348-.299.622-.646.59l-7.214-.653z"
          fill="#06B6D4"
        />
        <g fill="#F9FAFB">
          <path d="M30.529 5.864c-.373-.091-.733.191-.733.576v1.405a.59.59 0 0 0 .473.58l.583.12a.59.59 0 0 0 .712-.58V6.583c0-.273-.186-.511-.452-.576l-.583-.143zm-.733 17.734c0 .322-.257.584-.578.592l-18.266.447c-.333.008-.607-.26-.607-.592V5.049c0-.375.345-.656.712-.58l15.816 3.256a.59.59 0 0 0 .712-.58V5.611c0-.273-.187-.511-.452-.576L7.542.25c-.373-.091-.733.191-.733.576v30.333c0 .353.307.628.658.589l2.878-.318 20.686-2.095c.303-.031.533-.285.533-.59V11.767c0-.29-.209-.537-.495-.585l-.583-.098c-.361-.061-.691.218-.691.584v8.183 3.746zm-8.336 5.044c-.589 0-1.065-.575-1.065-1.284s.476-1.284 1.065-1.284 1.065.575 1.065 1.284-.476 1.284-1.065 1.284z" />
        </g>
      </g>
      <defs>
        <clipPath id="A">
          <path fill="#FFFFFF" d="M0 0h118.519v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const LinkIcon: FC<IconProps> = (props) => {
  const { refProp, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="currentColor"
      ref={refProp}
      {...otherProps}
    >
      <path d="M20.534 1.834c0 .587.476 1.063 1.063 1.063h5.005L16.062 13.435v-3.102c0-.587-.476-1.062-1.062-1.062s-1.062.476-1.062 1.063V16c0 .587.476 1.063 1.063 1.063h5.667c.587 0 1.063-.476 1.063-1.062s-.476-1.062-1.062-1.062h-3.102L28.104 4.399v5.005c0 .587.476 1.062 1.063 1.062s1.063-.476 1.063-1.062v-7.57c0-.587-.476-1.063-1.062-1.063h-7.57c-.587 0-1.062.476-1.062 1.063z" />
      <path d="M25.981 9.526a3.19 3.19 0 0 0 3.172 3.065L29.167 16c0 6.678 0 10.017-2.075 12.092S21.678 30.167 15 30.167s-10.017 0-12.092-2.075S.833 22.678.833 16s0-10.017 2.075-12.092S8.322 1.834 15 1.834l3.409.014a3.19 3.19 0 0 0 3.065 3.172l-3.716 3.716c-.552-.95-1.58-1.588-2.758-1.588a3.19 3.19 0 0 0-3.187 3.188V16A3.19 3.19 0 0 0 15 19.188h5.667A3.19 3.19 0 0 0 23.854 16c0-1.178-.639-2.206-1.588-2.758l3.716-3.716z" />
    </svg>
  );
};

export const UserIcon: FC<IconProps> = (props) => {
  const { refProp, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      fillRule="evenodd"
      ref={refProp}
      {...otherProps}
    >
      <path d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 1 0 0-9.5zM8.75 6a3.25 3.25 0 0 1 6.5 0 3.25 3.25 0 0 1-6.5 0zM12 12.25c-2.314 0-4.445.526-6.025 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.003 2.62 1.276 3.662.629.513 1.51.877 2.7 1.118s2.748.369 4.774.369 3.581-.127 4.774-.369 2.07-.605 2.7-1.118c1.279-1.041 1.278-2.5 1.276-3.661V17.5c0-1.634-1.169-2.96-2.725-3.836-1.579-.888-3.711-1.414-6.025-1.414zM4.75 17.5c0-.851.621-1.775 1.961-2.528 1.316-.74 3.184-1.222 5.289-1.222s3.973.482 5.289 1.222c1.339.753 1.961 1.677 1.961 2.528 0 1.308-.04 2.044-.724 2.6-.37.302-.99.596-2.05.811s-2.502.339-4.476.339-3.419-.125-4.476-.339-1.68-.509-2.05-.811c-.683-.556-.724-1.293-.724-2.6z" />
    </svg>
  );
};

export const CloseIcon: FC<IconProps> = (props) => {
  const { refProp, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      ref={refProp}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        d="M15 29.166c-6.678 0-10.017 0-12.092-2.075S.833 21.678.833 15s0-10.017 2.075-12.092S8.322.833 15 .833s10.017 0 12.092 2.075S29.167 8.321 29.167 15s0 10.017-2.075 12.092S21.678 29.166 15 29.166zm-4.293-18.46c.415-.415 1.088-.415 1.503 0l2.79 2.79 2.79-2.79c.415-.415 1.088-.415 1.503 0s.415 1.088 0 1.503L16.503 15l2.79 2.79c.415.415.415 1.088 0 1.503s-1.088.415-1.503 0L15 16.502l-2.79 2.79c-.415.415-1.088.415-1.503 0s-.415-1.088 0-1.503l2.79-2.79-2.79-2.79c-.415-.415-.415-1.088 0-1.503z"
        fill="currentColor"
      />
    </svg>
  );
};

export const BurgerMenu: FC<IconProps> = (props) => {
  const { refProp, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      ref={refProp}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        d="M2.908 27.092C4.983 29.166 8.322 29.166 15 29.166s10.017 0 12.092-2.075S29.167 21.678 29.167 15s0-10.017-2.075-12.092S21.678.833 15 .833 4.983.833 2.908 2.908.833 8.321.833 15s0 10.017 2.075 12.092zm21.654-6.425c0 .587-.476 1.063-1.062 1.063h-17c-.587 0-1.062-.476-1.062-1.062s.476-1.062 1.063-1.062h17c.587 0 1.063.476 1.063 1.063zM23.5 16.062c.587 0 1.063-.476 1.063-1.062s-.476-1.062-1.062-1.062h-17c-.587 0-1.062.476-1.062 1.063s.476 1.063 1.063 1.063h17zm1.063-6.729c0 .587-.476 1.062-1.062 1.062h-17c-.587 0-1.062-.476-1.062-1.062S5.913 8.271 6.5 8.271h17c.587 0 1.063.476 1.063 1.063z"
        fill="currentColor"
      />
    </svg>
  );
};
