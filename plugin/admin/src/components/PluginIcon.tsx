import { SVGProps } from 'react'
import { DefaultTheme, useTheme } from 'styled-components'

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  /**
   * @default "currentColor"
   */
  fill?: keyof DefaultTheme['colors'] | (string & {})
  stroke?: keyof DefaultTheme['colors'] | (string & {})
}

const PluginIcon = ({
  fill: fillProp = 'currentColor',
  stroke: strokeProp,
  ...props
}: IconProps) => {
  const { colors } = useTheme()

  const fill =
    fillProp && fillProp in colors
      ? colors[fillProp as keyof DefaultTheme['colors']]
      : fillProp
  const stroke =
    strokeProp && strokeProp in colors
      ? colors[strokeProp as keyof DefaultTheme['colors']]
      : strokeProp

  return (
    <svg fill={fill} stroke={stroke} {...props} viewBox="0 0 24 24">
      <path d="M13.525,16L17.91,16L15.917,11.046L13.525,16ZM18.715,18L12.559,18L10.901,21.435C10.734,21.78 10.383,22.001 10,22.001C9.451,22.001 8.999,21.549 8.999,21C8.999,20.849 9.034,20.701 9.099,20.565L14.116,10.177C14.449,9.487 15.151,9.047 15.917,9.047C16.731,9.047 17.468,9.545 17.772,10.3L21.928,20.627C21.976,20.746 22,20.872 22,21C22,21.549 21.549,22 21,22C20.592,22 20.224,21.751 20.072,21.373L18.715,18ZM3,2L11,2C11.549,2 12,2.451 12,3C12,3.549 11.549,4 11,4L3,4C2.451,4 2,3.549 2,3C2,2.451 2.451,2 3,2ZM3,7C2.451,7 2,6.549 2,6C2,5.451 2.451,5 3,5L10.003,5C11.1,5 12.002,5.903 12.002,7C12.002,7.348 11.912,7.69 11.739,7.992C10.794,9.646 9.746,10.836 8.574,11.546C7.102,12.439 5.254,12.918 3.037,12.999C3.016,13 2.996,13.001 2.975,13.001C2.426,13.001 1.975,12.55 1.975,12.001C1.975,11.457 2.419,11.007 2.963,11.001C4.861,10.931 6.382,10.537 7.537,9.836C8.384,9.323 9.213,8.382 10.003,7L3,7Z" />
    </svg>
  )
}

export default PluginIcon
