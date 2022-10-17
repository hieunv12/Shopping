import React from 'react';
import Svg, {
    ClipPath,
    Defs,
    G,
    Path,
    Circle,
    Rect,
    Stop,
    Ellipse,
    LinearGradient,
    RadialGradient,
    Text,
    Image,
    TSpan,
    Mask,
} from 'react-native-svg';
import {Spacing} from "@assets";
export type iconProps = {
    width?: string | number;
    height?: string | number;
    iconFillColor?: string;
    style?: any;
    onPress?: any;
    circleFillIcon?: any;
};
export const IconFacebook = ({style, width, height}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.width24}
        style={style}
        viewBox="0 0 24 24"
        fill="none">
        <G clipPath="url(#clip0_26_53)">
            <Path
                d="M12 24.002c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12s-12 5.372-12 12c0 6.627 5.373 12 12 12z"
                fill="#1977F3"
            />
            <Path
                d="M16.671 15.471l.532-3.47h-3.328v-2.25c0-.949.464-1.875 1.956-1.875h1.513V4.923s-1.373-.235-2.686-.235c-2.74 0-4.533 1.66-4.533 4.67v2.644H7.077v3.47h3.048v8.385a12.255 12.255 0 003.75 0V15.47h2.796z"
                fill="#fff"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_26_53">
                <Path fill="#fff" d="M0 0H24V24H0z" />
            </ClipPath>
        </Defs>
    </Svg>
);
export const IconHome = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.height24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M12 18v-3M10.07 2.82L3.14 8.37c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91l-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const IconProfile = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width20}
        height={Spacing.width20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Path
            d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z"
            fill={iconFillColor}
        />
    </Svg>
);

export const IconCategory = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.width24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M5 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3H5C3 2 2 3 2 5v2c0 2 1 3 3 3zM17 10h2c2 0 3-1 3-3V5c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3zM17 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3h-2c-2 0-3 1-3 3v2c0 2 1 3 3 3zM5 22h2c2 0 3-1 3-3v-2c0-2-1-3-3-3H5c-2 0-3 1-3 3v2c0 2 1 3 3 3z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export const IconCart = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.width24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M7.5 7.67V6.7c0-2.25 1.81-4.46 4.06-4.67a4.5 4.5 0 014.94 4.48v1.38M9 22h6c4.02 0 4.74-1.61 4.95-3.57l.75-6C20.97 9.99 20.27 8 16 8H8c-4.27 0-4.97 1.99-4.7 4.43l.75 6C4.26 20.39 4.98 22 9 22z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M15.495 12h.01M8.495 12h.008"
            stroke={iconFillColor}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export const IconSetting = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.width24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l-.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 01-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export const IconProfiles = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.width24}
        viewBox="0 0 24 24"
        fill="none"
    >
        <Path
            d="M12.12 13.582a.963.963 0 00-.24 0 3.27 3.27 0 01-3.16-3.27c0-1.81 1.46-3.28 3.28-3.28a3.276 3.276 0 01.12 6.55zM18.74 20.182a9.934 9.934 0 01-6.74 2.62c-2.6 0-4.96-.99-6.74-2.62.1-.94.7-1.86 1.77-2.58 2.74-1.82 7.22-1.82 9.94 0 1.07.72 1.67 1.64 1.77 2.58z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M12 22.802c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
            stroke={iconFillColor}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export const IconUserName = ({ width, height, style }: iconProps) => (
    <Svg
        width={Spacing.width80}
        height={Spacing.width80}
        viewBox="0 0 80 80"
        style={style}
        fill="none"
    >
        <G clipPath="url(#clip0_1177_15835)">
            <Rect width={80} height={80} rx={40} fill="#DDD" />
            <Path
                d="M40 18.333c-9.619 0-17.416 7.798-17.416 17.417 0 9.619 7.797 17.417 17.416 17.417 9.62 0 17.417-7.798 17.417-17.417 0-9.619-7.798-17.417-17.417-17.417zM29 58.667c-9.619 0-17.416 7.797-17.416 17.416C11.584 85.703 19.38 93.5 29 93.5h22c9.62 0 17.417-7.798 17.417-17.417 0-9.619-7.798-17.416-17.417-17.416H29z"
                fill="#EFEFEF"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_1177_15835">
                <Rect width={80} height={80} rx={40} fill="#fff" />
            </ClipPath>
        </Defs>
    </Svg>
);
