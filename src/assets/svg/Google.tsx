import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function Google(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={52}
      height={52}
      viewBox="0 0 52 52"
      {...props}
    >
      <G data-name="Groupe 17393">
        <G data-name="Groupe 17392">
          <Rect
            data-name="Rectangle 60"
            width={52}
            height={52}
            rx={10}
            fill="#3abdb7"
          />
        </G>
        <G data-name="Groupe 17147">
          <Path
            data-name="Icon awesome-google"
            d="M39.688 26.825c0 7.938-5.436 13.587-13.463 13.587a13.912 13.912 0 010-27.824 13.379 13.379 0 019.329 3.637l-3.786 3.644c-4.955-4.78-14.165-1.189-14.165 6.631a8.715 8.715 0 008.622 8.785c5.509 0 7.573-3.949 7.9-6h-7.9v-4.782H39.47a12.2 12.2 0 01.218 2.322z"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  )
}

export default Google



