import Svg, { Path } from "react-native-svg";

import { useTheme } from "~/hooks/useTheme";
import type { Icon } from "./type";

export function PlaylistAdd({ size = 24, color }: Icon) {
  const { foreground } = useTheme();
  const usedColor = color ?? foreground;
  return (
    <Svg width={size} height={size} viewBox="0 -960 960 960" fill={usedColor}>
      <Path d="M164.54-333.23q-11.64 0-19.86-8.23-8.22-8.22-8.22-19.86 0-11.45 8.22-19.66t19.86-8.21h224.04q11.44 0 19.66 8.22 8.22 8.23 8.22 19.68 0 11.64-8.22 19.85t-19.66 8.21H164.54Zm0-158.39q-11.64 0-19.86-8.22-8.22-8.23-8.22-19.87 0-11.44 8.22-19.65 8.22-8.22 19.86-8.22h381.62q11.44 0 19.66 8.23 8.22 8.22 8.22 19.67 0 11.64-8.22 19.85t-19.66 8.21H164.54Zm0-157.57q-11.64 0-19.86-8.23-8.22-8.22-8.22-19.86 0-11.45 8.22-19.66t19.86-8.21h381.62q11.44 0 19.66 8.22 8.22 8.23 8.22 19.67 0 11.64-8.22 19.86-8.22 8.21-19.66 8.21H164.54Zm513.52 473.54q-11.64 0-19.85-8.23-8.21-8.22-8.21-19.85v-129.5H520.5q-11.63 0-19.86-8.23-8.22-8.22-8.22-19.86 0-11.45 8.22-19.66 8.23-8.21 19.86-8.21H650v-130.5q0-11.44 8.23-19.67 8.22-8.22 19.86-8.22 11.45 0 19.66 8.22 8.21 8.23 8.21 19.67v130.5h130.5q11.44 0 19.66 8.22 8.23 8.23 8.23 19.68 0 11.64-8.23 19.85-8.22 8.21-19.66 8.21h-130.5v129.5q0 11.63-8.22 19.85-8.23 8.23-19.68 8.23Z" />
    </Svg>
  );
}
