import { BaseLoader } from "./styles";

export function Loader() {
  return (
    <BaseLoader>
      <span className="loader">
        <span className="loader-inner"></span>
      </span>
    </BaseLoader>
  )
}