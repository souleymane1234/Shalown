import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"

function Facebook(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={52}
      height={52}
      viewBox="0 0 52 52"
      {...props}
    >
      <G data-name="Groupe 17399">
        <G data-name="Groupe 17394">
          <G data-name="Groupe 17398">
            <G data-name="Groupe 17397">
              <G data-name="Groupe 17396">
                <G data-name="Groupe 17395">
                  <Rect
                    data-name="Rectangle 59"
                    width={52}
                    height={52}
                    rx={10}
                    fill="#3abdb7"
                  />
                </G>
              </G>
            </G>
          </G>
        </G>
        <G data-name="Groupe 17146">
          <Path
            data-name="Icon awesome-facebook-f"
            d="M32.474 28.239l.773-5.036h-4.832v-3.267a2.518 2.518 0 012.839-2.72h2.2v-4.288a26.787 26.787 0 00-3.9-.34c-3.979 0-6.58 2.412-6.58 6.778v3.838h-4.426v5.036h4.424v12.172h5.444V28.239z"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  )
}

export default Facebook

