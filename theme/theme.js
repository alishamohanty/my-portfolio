import { extendTheme } from "@chakra-ui/react"
import Manrope from '@fontsource/manrope'

const theme = extendTheme({
  fonts: {
    heading: Manrope,
    body: "Inter",
  },
})
export default theme