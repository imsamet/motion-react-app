const svg = () => {
  const baseSvg = (
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="logo-footer-a">
          <path fill="#fff" d="M0 0h84v71H0z" />
        </clipPath>
        <clipPath id="logo-header-a">
          <path fill="currentColor" transform="translate(0 10)" d="M0 0h36v30H0z" />
        </clipPath>
      </defs>
      <g fill="red">
        <circle cx="12" cy="12" r="10" fill="#1A5ED4" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.442 8.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7.625 9.5H5.75L8.875 17h1.88l3.125-7.5h-1.875l-2.19 5.256L7.625 9.5ZM16.38 17V9.5h-1.875V17h1.875Z"
          fill="#fff"
        />
      </g>
    </svg>
  );
  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="logo-footer-a">
          <path fill="#fff" d="M0 0h84v71H0z" />
        </clipPath>
        <clipPath id="logo-header-a">
          <path fill="currentColor" transform="translate(0 10)" d="M0 0h36v30H0z" />
        </clipPath>
      </defs>
      <symbol id="apple" viewBox="0 0 20 25">
        <g fill="none">
          <path
            d="M20 18.875c-.547 1.197-.808 1.731-1.513 2.789-.981 1.476-2.365 3.317-4.08 3.333-1.524.014-1.916-.98-3.984-.969-2.067.01-2.5.986-4.024.972-1.715-.016-3.026-1.677-4.01-3.155-2.744-4.131-3.031-8.978-1.338-11.554 1.203-1.833 3.101-2.904 4.888-2.904 1.818 0 2.959.985 4.462.985 1.458 0 2.346-.986 4.449-.986 1.588 0 3.272.855 4.47 2.331-3.928 2.13-3.29 7.675.68 9.158ZM14.116 4.217c.864-1.094 1.518-2.639 1.28-4.217-1.41.095-3.056.981-4.02 2.136-.872 1.048-1.593 2.603-1.313 4.114 1.538.047 3.129-.861 4.053-2.033Z"
            fill="currentColor"
          />
        </g>
      </symbol>
      <symbol id="arrow-down-xs" viewBox="0 0 10 9">
        <g fill="none">
          <path
            d="M1 3.945 4.375 7.72c.16.178.386.28.625.28m0 0V0m0 8a.838.838 0 0 0 .625-.28L9 3.945"
            fill="none"
            display="var(--is-visible--md-up)"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            d="m2 3.818 2.425 2.94A.667.667 0 0 0 4.939 7H5m0 0V0m0 7h.06a.667.667 0 0 0 .515-.242L8 3.818"
            display="var(--is-visible--sm-down)"
            fill="none"
            stroke="currentColor"
          />
        </g>
      </symbol>
      <symbol id="arrow-down" viewBox="0 0 20 20">
        <g fill="none">
          <path
            display="var(--is-visible--xxl-up)"
            d="m5 11.227 4.078 4.449a1 1 0 0 0 .737.324H10m0 0V4m0 12h.185a1 1 0 0 0 .737-.324L15 11.227"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--md-xl)"
            d="m5.83 11.023 3.349 3.653a1 1 0 0 0 .737.324h.08m0 0V5m0 10h.082a1 1 0 0 0 .737-.324l3.348-3.653"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--sm-down)"
            d="m7 10.818 2.425 2.94a.667.667 0 0 0 .514.242H10m0 0V6m0 8h.06a.667.667 0 0 0 .515-.242L13 10.818"
            stroke="currentColor"
          />
        </g>
      </symbol>
      <symbol id="arrow-left" viewBox="0 0 20 20">
        <g fill="none">
          <path
            display="var(--is-visible--xxl-up)"
            d="m8.773 14.999-4.449-4.078A1 1 0 0 1 4 10.184V10m0 0h12m-12 0v-.185a1 1 0 0 1 .324-.737l4.449-4.078"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--md-xl)"
            d="m9.477 14.165-3.653-3.348a1 1 0 0 1-.324-.737v-.081m0 0h10m-10 0v-.081a1 1 0 0 1 .324-.737l3.653-3.349"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--sm-down)"
            d="m9.182 7-2.94 2.425A.667.667 0 0 0 6 9.939V10m0 0h8m-8 0v.06c0 .2.089.388.242.515L9.182 13"
            stroke="currentColor"
          />
        </g>
      </symbol>
      <symbol id="arrow-right-adapt" viewBox="0 0 13 12">
        <g fill="none">
          <path
            d="m7.227 11 4.449-4.078A1 1 0 0 0 12 6.185V6m0 0H0m12 0v-.185a1 1 0 0 0-.324-.737L7.227 1"
            fill="none"
            stroke="currentColor"
            display="var(--is-visible--md-up)"
            stroke-width="1.2"
          />
          <path
            d="m6.818 9 2.94-2.425A.667.667 0 0 0 10 6.061V6m0 0H2m8 0v-.06a.667.667 0 0 0-.242-.515L6.818 3"
            fill="none"
            stroke="currentColor"
            display="var(--is-visible--sm-down)"
          />
        </g>
      </symbol>
      <symbol id="arrow-right-lg" viewBox="0 0 20 20">
        <g fill="none">
          <path
            d="m11.227 15 4.449-4.078a1 1 0 0 0 .324-.737V10m0 0H4m12 0v-.185a1 1 0 0 0-.324-.737L11.227 5"
            stroke="currentColor"
            stroke-width="1.2"
          />
        </g>
      </symbol>
      <symbol id="arrow-right-xs" viewBox="0 0 20 20">
        <g fill="none">
          <path
            d="m9.945 14 3.775-3.375A.838.838 0 0 0 14 10m0 0H6m8 0a.838.838 0 0 0-.28-.625L9.945 6"
            stroke="currentColor"
            stroke-width="1.2"
          />
        </g>
      </symbol>
      <symbol id="arrow-right" viewBox="0 0 20 20">
        <g fill="none">
          <path
            display="var(--is-visible--xxl-up)"
            d="m11.227 15 4.449-4.078a1 1 0 0 0 .324-.737V10m0 0H4m12 0v-.185a1 1 0 0 0-.324-.737L11.227 5"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--md-xl)"
            d="m11.023 14.17 3.653-3.349a1 1 0 0 0 .324-.737v-.08m0 0H5m10 0v-.082a1 1 0 0 0-.324-.737l-3.653-3.348"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--sm-down)"
            d="m10.818 13 2.94-2.425a.667.667 0 0 0 .242-.514V10m0 0H6m8 0v-.06a.667.667 0 0 0-.242-.515L10.818 7"
            stroke="currentColor"
          />
        </g>
      </symbol>
      <symbol id="arrow-up" viewBox="0 0 20 20">
        <g fill="none">
          <path
            display="var(--is-visible--md-up)"
            d="M14 10.055 10.625 6.28A.838.838 0 0 0 10 6m0 0v8m0-8a.838.838 0 0 0-.625.28L6 10.055"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--sm-down)"
            d="m13 9.182-2.425-2.94A.667.667 0 0 0 10.061 6H10m0 0v8m0-8h-.06a.667.667 0 0 0-.515.242L7 9.182"
            stroke="currentColor"
          />
        </g>
      </symbol>
      <symbol id="close-lg" viewBox="0 0 30 30">
        <g fill="none">
          <path
            display="var(--is-visible--md-up)"
            d="m7 7 16.97 16.97M7 23.97 23.97 7"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--sm-down)"
            d="m9.343 9.343 11.314 11.314M9.343 20.657 20.657 9.343"
            stroke="currentColor"
            stroke-width="1.2"
          />
        </g>
      </symbol>
      <symbol id="close-md" viewBox="0 0 20 20">
        <g fill="none">
          <path d="M14.243 5.757 10 10m-4.242 4.243L10 10m0 0 4.243 4.243M10 10 5.758 5.757" stroke="currentColor" />
        </g>
      </symbol>
      <symbol id="close" viewBox="0 0 20 20">
        <g fill="none">
          <path
            display="var(--is-visible--xxl-up)"
            d="M5.757 5.757 10 10m4.243 4.243L10 10m0 0-4.243 4.243M10 10l4.243-4.243"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--md-xl)"
            d="M13.536 6.464 10 10m-3.536 3.536L10 10m0 0 3.536 3.536M10 10 6.464 6.464"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--sm-down)"
            d="M12.829 7.172 10 10m-2.828 2.828L10 10m0 0 2.829 2.828M10 10 7.172 7.172"
            stroke="currentColor"
          />
        </g>
      </symbol>
      <symbol id="dropdown" viewBox="0 0 20 20">
        <g fill="none">
          <circle cx="10" cy="10" r="10" transform="rotate(90 10 10)" fill="#EAEEF1" />
          <path
            d="m7 10.318 2.425 2.94a.667.667 0 0 0 .514.242H10m0 0v-7m0 7h.06a.667.667 0 0 0 .515-.242L13 10.318"
            stroke="#041D2C"
          />
        </g>
      </symbol>
      <symbol id="facebook" viewBox="0 0 20 20">
        <g fill="none">
          <path
            d="M0 10.056C0 15.028 3.611 19.162 8.333 20l.056-.045a5.502 5.502 0 0 1-.056-.01v-7.096h-2.5v-2.793h2.5V7.82c0-2.514 1.611-3.91 3.89-3.91.721 0 1.5.111 2.221.223v2.57h-1.277c-1.223 0-1.5.614-1.5 1.397v1.955h2.666l-.444 2.793h-2.222v7.095a5.476 5.476 0 0 1-.056.011l.056.045C16.389 19.162 20 15.028 20 10.056 20 4.526 15.5 0 10 0S0 4.525 0 10.056Z"
            fill="currentColor"
          />
        </g>
      </symbol>
      <symbol id="google" viewBox="0 0 20 20">
        <g fill="none">
          <path
            d="M19.89 8.181h-9.687v4.092h5.49c-.877 2.727-3.046 3.636-5.535 3.636a6.069 6.069 0 0 1-2.77-.665 5.972 5.972 0 0 1-2.147-1.851 5.827 5.827 0 0 1-.726-5.412 5.904 5.904 0 0 1 1.584-2.337 6.023 6.023 0 0 1 2.5-1.352 6.084 6.084 0 0 1 2.852-.06 6.033 6.033 0 0 1 2.558 1.244l3.017-2.831A10.195 10.195 0 0 0 12.744.332 10.296 10.296 0 0 0 7.862.257a10.206 10.206 0 0 0-4.353 2.18 10.002 10.002 0 0 0-2.816 3.93 9.865 9.865 0 0 0-.627 4.772 9.91 9.91 0 0 0 1.707 4.507 10.1 10.1 0 0 0 3.645 3.2A10.27 10.27 0 0 0 10.158 20c5.596 0 10.657-3.636 9.732-11.819Z"
            fill="currentColor"
          />
        </g>
      </symbol>
      <symbol id="logo-footer" viewBox="0 0 84 71">
        <g fill="none">
          <g clip-path="url(#logo-footer-a)">
            <path
              d="M35.013 39.602h13.974c6.262 8.964 13.566 15.987 23.342 18.25v-18.23h11.67V71c-21.257-.653-38.268-10.417-48.986-31.398Z"
              fill="#1AA8D4"
            />
            <path
              d="M48.987 39.602H35.013c-6.262 8.964-13.566 15.987-23.342 18.25v-18.23H0V71c21.258-.653 38.269-10.417 48.987-31.398Z"
              fill="#00299D"
            />
            <path
              d="M48.987 31.398H35.013c-6.262-8.964-13.566-15.986-23.342-18.25v18.23H0V0c21.258.654 38.269 10.417 48.987 31.398Z"
              fill="#1A5ED4"
            />
            <path
              d="M35.013 31.398h13.974c6.262-8.964 13.566-15.986 23.342-18.25v18.23h11.67V0C62.743.654 45.732 10.417 35.014 31.398Z"
              fill="#1A5ED4"
            />
          </g>
        </g>
      </symbol>
      <symbol id="logo-header" viewBox="0 0 190 50">
        <g fill="none">
          <g clip-path="url(#logo-header-a)">
            <path
              d="M20.994 23.267h-5.988c-2.684-3.792-5.815-6.755-10.004-7.711v7.703H0V10c7.333.223 13.483 2.939 18 8.61 4.517-5.671 10.667-8.387 18-8.61v13.259h-5.002v-7.7c-4.185.957-7.316 3.92-10.004 7.712"
              fill="#1A5ED4"
            />
            <path
              d="M15.006 26.733h5.988c2.684 3.788 5.815 6.755 10.004 7.711v-7.703H36V40c-9.11-.276-16.4-4.402-20.994-13.267Z"
              fill="#1AA8D4"
            />
            <path
              d="M20.994 26.733h-5.988c-2.684 3.788-5.815 6.755-10.004 7.711v-7.703H0V40c9.11-.276 16.4-4.402 20.994-13.267Z"
              fill="#00299D"
            />
          </g>
          <path
            d="M56.36 31.2c1.54 0 2.88-.92 3.44-1.96V31h2.42V15.7H59.8v6.44c-.58-1.04-1.64-1.82-3.34-1.82-2.72 0-4.7 2.12-4.7 5.46v.16c0 3.4 1.98 5.26 4.6 5.26Zm.6-1.92c-1.56 0-2.72-1.1-2.72-3.4v-.16c0-2.26 1.04-3.5 2.82-3.5 1.76 0 2.82 1.14 2.82 3.44v.16c0 2.34-1.24 3.46-2.92 3.46ZM64.556 31h2.42V20.54h-2.42V31Zm1.18-12.18c.8 0 1.44-.6 1.44-1.38 0-.8-.64-1.4-1.44-1.4-.8 0-1.44.6-1.44 1.4 0 .78.64 1.38 1.44 1.38Zm7.17 12.38c2.68 0 4.18-1.22 4.18-3.34 0-2.22-1.46-2.82-3.92-3.2-1.66-.28-2.16-.58-2.16-1.34 0-.74.62-1.24 1.66-1.24 1.12 0 1.66.44 1.86 1.4h2.24c-.26-2.36-1.96-3.16-4.1-3.16-1.96 0-3.92 1.04-3.92 3.14 0 1.96 1.02 2.74 3.78 3.18 1.54.26 2.24.58 2.24 1.44 0 .88-.58 1.34-1.88 1.34-1.42 0-1.96-.62-2.08-1.68h-2.28c.1 2.22 1.68 3.46 4.38 3.46Zm10.283 0c2.84 0 4.66-1.7 4.84-4.1h-2.22c-.14 1.48-1.24 2.24-2.52 2.24-1.78 0-2.9-1.2-2.9-3.48v-.16c0-2.16 1.18-3.44 2.84-3.44 1.28 0 2.2.58 2.4 1.98h2.34c-.28-2.88-2.46-3.92-4.78-3.92-2.92 0-5.28 2.1-5.28 5.42v.16c0 3.34 2.28 5.3 5.28 5.3Zm11.004-1.88c-1.84 0-2.9-1.34-2.9-3.48v-.16c0-2.16 1.1-3.46 2.9-3.46 1.8 0 2.88 1.32 2.88 3.48v.14c0 2.14-1.08 3.48-2.88 3.48Zm-.02 1.88c3.08 0 5.38-2.12 5.38-5.38v-.16c0-3.2-2.3-5.34-5.36-5.34-3.08 0-5.38 2.16-5.38 5.4v.16c0 3.18 2.28 5.32 5.36 5.32Zm9.316-.2h2.82l3.78-10.46h-2.38l-2.7 7.98-2.74-7.98h-2.6l3.82 10.46Zm12.002.2c2.68 0 4.46-1.2 4.8-3.4h-2.34c-.18 1.02-.94 1.6-2.4 1.6-1.8 0-2.8-1.12-2.88-3.1h7.66v-.7c0-3.74-2.34-5.28-4.94-5.28-2.98 0-5.2 2.16-5.2 5.4v.16c0 3.3 2.22 5.32 5.3 5.32Zm-2.78-6.52c.24-1.62 1.22-2.6 2.68-2.6 1.5 0 2.42.8 2.54 2.6h-5.22Zm9.181 6.32h2.42v-5.44c0-2.22 1.28-2.9 3.4-2.92v-2.26c-1.76.02-2.74.8-3.4 2.12v-1.96h-2.42V31Zm7.59 0h1.66v-6.4c0-1.88 1.4-2.8 2.76-2.8 1.44 0 2.22.76 2.22 2.6V31h1.66v-6.4c0-1.88 1.4-2.8 2.76-2.8 1.44 0 2.22.76 2.22 2.6V31h1.66v-6.48c0-3.04-1.64-4.16-3.52-4.16-1.3 0-2.86.6-3.58 1.96-.54-1.4-1.72-1.96-3.06-1.96-1.5 0-2.64.8-3.12 1.78v-1.6h-1.66V31Zm20.223.18c1.54 0 2.48-.52 3.26-1.5V31h1.66v-6.9c0-2.92-1.82-3.74-3.82-3.74-2.02 0-3.92.88-4.14 3.26h1.66c.16-1.28.96-1.88 2.4-1.88 1.6 0 2.24.7 2.24 2.36v.76h-1.5c-2.68 0-5.24.82-5.24 3.24 0 2.14 1.54 3.08 3.48 3.08Zm.16-1.32c-1.46 0-1.98-.68-1.98-1.76 0-1.54 1.54-2.06 3.64-2.06h1.44v1.3c0 1.62-1.34 2.52-3.1 2.52Zm7.42 1.14h1.66v-5.74c0-2.58 1.34-3.24 3.44-3.34v-1.56c-1.88.06-2.78.88-3.44 2.06v-1.88h-1.66V31Zm6.92 0h1.66v-5.42l4.64 5.42h2.02l-4.86-5.6 4.48-4.86h-1.94l-4.34 4.82v-9.82h-1.66V31Zm13.602.18c2.36 0 4.1-1.1 4.46-3.2h-1.66c-.22 1.22-1.16 1.82-2.78 1.82-2.14 0-3.28-1.32-3.36-3.7h7.88v-.54c0-3.74-2.28-5.2-4.7-5.2-2.88 0-4.9 2.2-4.9 5.36v.16c0 3.22 2.1 5.3 5.06 5.3Zm-3.28-6.42c.28-1.86 1.42-3.02 3.12-3.02 1.72 0 2.84.86 3 3.02h-6.12Zm12.947 6.38c.68 0 1.08-.1 1.42-.22v-1.4c-.36.14-.76.22-1.28.22-.84 0-1.3-.5-1.3-1.52v-6.28h2.44v-1.4h-2.44v-2.38h-1.66v2.38h-1.5v1.4h1.5v6.44c0 1.64.92 2.76 2.82 2.76Z"
            fill="currentColor"
          />
        </g>
      </symbol>
      <symbol id="menu" viewBox="0 0 30 30">
        <g fill="none">
          <path display="var(--is-visible--md-up)" d="M3 12h24M3 18h24" stroke="currentColor" stroke-width="1.2" />
          <path display="var(--is-visible--sm-down)" d="M7 12.5h16m-16 5h16" stroke="currentColor" stroke-width="1.2" />
        </g>
      </symbol>
      <symbol id="mobile-scroll" viewBox="0 0 41 20">
        <g fill="none">
          <path
            d="m27.818 13 2.94-2.425a.667.667 0 0 0 .242-.514V10m0 0h-8m8 0v-.06a.667.667 0 0 0-.242-.515L27.818 7M13.182 13l-2.94-2.425a.667.667 0 0 1-.242-.514V10m0 0h8m-8 0v-.06c0-.2.089-.388.242-.515L13.182 7"
            stroke="#fff"
          />
          <rect x=".5" y=".5" width="40" height="19" rx="9.5" stroke="#fff" stroke-opacity=".3" />
        </g>
      </symbol>
      <symbol id="mute-lg" viewBox="0 0 30 30">
        <g fill="none">
          <path
            display="var(--is-visible--sm-down)"
            d="m8.493 11.111-1.008.59A3 3 0 0 0 6 14.29v1.42a3 3 0 0 0 1.485 2.59l5.223 3.055a1.523 1.523 0 0 0 1.93-.328v0c.233-.276.362-.625.362-.987V9.96c0-.362-.129-.711-.363-.987v0a1.523 1.523 0 0 0-1.93-.328l-4.214 2.466Zm0 0V15.5"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            display="var(--is-visible--sm-down)"
            d="m19 12 2.293 2.293a1 1 0 0 1 0 1.414L19 18M25 12l-2.293 2.293a1 1 0 0 0 0 1.414L25 18"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
          <path
            display="var(--is-visible--md-up)"
            d="m6.047 10-1.62.996A3 3 0 0 0 3 13.551v2.898a3 3 0 0 0 1.428 2.555l6.712 4.13c.804.495 1.85.316 2.443-.418v0c.27-.334.417-.75.417-1.18V8.464c0-.429-.147-.845-.417-1.179v0a1.876 1.876 0 0 0-2.443-.419L6.047 10Zm0 0v7"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            display="var(--is-visible--md-up)"
            d="m20 11 3.293 3.293a1 1 0 0 1 0 1.414L20 19M28 11l-3.293 3.293a1 1 0 0 0 0 1.414L28 19"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </g>
      </symbol>
      <symbol id="pause-lg" viewBox="0 0 30 30">
        <g fill="none">
          <path
            display="var(--is-visible--sm-down)"
            d="M12 20V10m7 0v10"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
          <path
            display="var(--is-visible--md-up)"
            d="M11 23V7m8 0v16"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </g>
      </symbol>
      <symbol id="play-lg" viewBox="0 0 30 30">
        <g fill="none">
          <path
            display="var(--is-visible--sm-down)"
            d="m13.126 9.63 6.252 4.202a1.408 1.408 0 0 1 0 2.336l-6.252 4.203A1.365 1.365 0 0 1 11 19.238v-8.476a1.365 1.365 0 0 1 2.126-1.133Z"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--md-up)"
            d="m12.777 7.09 7.355 6.07a2.387 2.387 0 0 1 0 3.68l-7.356 6.07A1.697 1.697 0 0 1 10 21.6V8.4a1.697 1.697 0 0 1 2.777-1.31Z"
            stroke="currentColor"
            stroke-width="1.2"
          />
        </g>
      </symbol>
      <symbol id="play" viewBox="0 0 20 20">
        <g fill="none">
          <path
            display="var(--is-visible--xxl-up)"
            d="M14 9.707v.586a1 1 0 0 1-.346.756l-4.929 4.26a1 1 0 0 1-1.445-.146l-.072-.093A1 1 0 0 1 7 14.46V5.54a1 1 0 0 1 .208-.61l.072-.093a1 1 0 0 1 1.445-.146l4.929 4.26a1 1 0 0 1 .346.756Z"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--md-xl)"
            d="M13.333 9.832v.336a1 1 0 0 1-.346.756l-3.993 3.452a.903.903 0 0 1-1.494-.684V6.308a.903.903 0 0 1 1.494-.684l3.993 3.452a1 1 0 0 1 .346.756Z"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--sm-down)"
            d="M13 9.791v.418c0 .207-.09.405-.247.54l-3.52 3.043a.714.714 0 0 1-1.033-.104l-.051-.067A.714.714 0 0 1 8 13.185v-6.37c0-.158.052-.311.149-.436l.05-.067a.714.714 0 0 1 1.033-.104l3.52 3.043a.714.714 0 0 1 .248.54Z"
            stroke="currentColor"
          />
        </g>
      </symbol>
      <symbol id="search" viewBox="0 0 20 20">
        <g fill="none">
          <path
            d="M9.384 14.768A5.384 5.384 0 1 0 9.384 4a5.384 5.384 0 0 0 0 10.768ZM16.562 16.563l-3.373-3.373"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </symbol>
      <symbol id="unmute-lg" viewBox="0 0 30 30">
        <g fill="none">
          <path
            display="var(--is-visible--sm-down)"
            d="m8.493 11.111-1.008.59A3 3 0 0 0 6 14.29v1.42a3 3 0 0 0 1.485 2.59l5.223 3.055a1.523 1.523 0 0 0 1.93-.328v0c.233-.276.362-.625.362-.987V9.96c0-.362-.129-.711-.363-.987v0a1.523 1.523 0 0 0-1.93-.328l-4.214 2.466Zm0 0V15.5"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            display="var(--is-visible--sm-down)"
            d="m19 12 .172.172a4 4 0 0 1 0 5.656L19 18M22 10l.05.05a7 7 0 0 1 0 9.9L22 20"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
          <path
            display="var(--is-visible--md-up)"
            d="m6.047 10-1.62.996A3 3 0 0 0 3 13.551v2.898a3 3 0 0 0 1.428 2.555l6.712 4.13c.804.495 1.85.316 2.443-.418v0c.27-.334.417-.75.417-1.18V8.464c0-.429-.147-.845-.417-1.179v0a1.876 1.876 0 0 0-2.443-.419L6.047 10Zm0 0v7"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            display="var(--is-visible--md-up)"
            d="m21 10 .757.757a6 6 0 0 1 0 8.486L21 20"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
          <path
            display="var(--is-visible--md-up)"
            d="m24 8 .636.636a9 9 0 0 1 0 12.728L24 22"
            stroke="currentColor"
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </g>
      </symbol>
      <symbol id="vi-logo" viewBox="0 0 24 24">
        <g fill="none">
          <circle cx="12" cy="12" r="10" fill="#1A5ED4" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.442 8.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7.625 9.5H5.75L8.875 17h1.88l3.125-7.5h-1.875l-2.19 5.256L7.625 9.5ZM16.38 17V9.5h-1.875V17h1.875Z"
            fill="#fff"
          />
        </g>
      </symbol>
      <symbol id="zoom-in" viewBox="0 0 20 20">
        <g fill="none">
          <path
            display="var(--is-visible--xxl-up)"
            d="M10 4v6m0 6v-6m0 0h6m-6 0H4"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path
            display="var(--is-visible--md-xl)"
            d="M10 5v5m0 5v-5m0 0h5m-5 0H5"
            stroke="currentColor"
            stroke-width="1.2"
          />
          <path display="var(--is-visible--sm-down)" d="M10 6v4m0 4v-4m0 0h4m-4 0H6" stroke="currentColor" />
        </g>
      </symbol>
      <symbol id="zoom-out" viewBox="0 0 20 20">
        <g fill="none">
          <path display="var(--is-visible--xxl-up)" d="M16 10H4" stroke="currentColor" stroke-width="1.2" />
          <path display="var(--is-visible--md-xl)" d="M15.5 10.5h-10" stroke="currentColor" stroke-width="1.2" />
          <path display="var(--is-visible--sm-down)" d="M14 10H6" stroke="currentColor" />
        </g>
      </symbol>
    </svg>
  );
};
