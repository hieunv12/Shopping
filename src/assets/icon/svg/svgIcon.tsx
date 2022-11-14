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
import {Colors} from "@theme";
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
        width={Spacing.width32}
        height={Spacing.width32}
        style={style}
        viewBox="0 0 32 32"
        fill="none">
        <Circle cx={16} cy={16} r={14} fill="url(#paint0_linear_53_168)" />
        <Path
            d="M21.214 20.282l.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 004.383 0v-9.552h3.269z"
            fill="#fff"
        />
        <Defs>
            <LinearGradient
                id="paint0_linear_53_168"
                x1={16}
                y1={2}
                x2={16}
                y2={29.917}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#18ACFE" />
                <Stop offset={1} stopColor="#0163E0" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export const IconGG = ({style, width, height}: iconProps) => (
    <Svg
        width={Spacing.width32}
        height={Spacing.width32}
        style={style}
        viewBox="0 0 32 32"
        fill="none">
        <Path
            d="M30.001 16.31c0-1.15-.095-1.99-.301-2.861H16.287v5.195h7.873c-.159 1.291-1.016 3.236-2.92 4.542l-.027.174 4.24 3.22.294.029c2.699-2.443 4.254-6.036 4.254-10.298z"
            fill="#4285F4"
        />
        <Path
            d="M16.286 30c3.857 0 7.095-1.244 9.46-3.391l-4.507-3.423c-1.207.825-2.826 1.4-4.953 1.4A8.584 8.584 0 018.16 18.77l-.167.014-4.41 3.344-.058.157C5.874 26.858 10.7 30 16.286 30z"
            fill="#34A853"
        />
        <Path
            d="M8.16 18.769a8.463 8.463 0 01-.476-2.77c0-.964.174-1.897.46-2.768l-.008-.185-4.465-3.399-.146.068A13.785 13.785 0 002.001 16c0 2.256.556 4.387 1.524 6.284L8.16 18.77z"
            fill="#FBBC05"
        />
        <Path
            d="M16.286 7.413c2.683 0 4.492 1.136 5.524 2.085l4.032-3.858C23.366 3.384 20.143 2 16.286 2 10.7 2 5.874 5.142 3.524 9.715l4.62 3.516c1.158-3.375 4.365-5.818 8.142-5.818z"
            fill="#EB4335"
        />
    </Svg>
);

export const IconApple = ({style, width, height}: iconProps) => (
    <Svg
        width={Spacing.width32}
        height={Spacing.width32}
        style={style}
        viewBox="0 0 32 32"
        fill="none">
        <Path
            d="M30 16c0 7.728-6.265 14-14 14S2 23.728 2 16C2 8.265 8.265 2 16 2s14 6.265 14 14z"
            fill="#283544"
        />
        <Path
            d="M22.562 12.457c-.076.045-1.895.986-1.895 3.07.086 2.38 2.295 3.213 2.333 3.213-.038.045-.334 1.136-1.21 2.28-.694.986-1.466 1.98-2.637 1.98-1.114 0-1.514-.657-2.8-.657-1.381 0-1.772.657-2.829.657-1.171 0-2-1.047-2.733-2.023-.952-1.278-1.761-3.284-1.79-5.21-.02-1.02.19-2.023.724-2.875.752-1.19 2.095-1.997 3.561-2.023 1.124-.036 2.124.719 2.81.719.657 0 1.885-.72 3.275-.72.6.001 2.2.17 3.191 1.59zm-6.561-1.792c-.2-.932.352-1.864.866-2.458.657-.72 1.695-1.207 2.59-1.207a3.334 3.334 0 01-.952 2.511c-.58.72-1.58 1.26-2.504 1.154z"
            fill="#fff"
        />
    </Svg>
);

export const IconHome = ({style, width, height,iconFillColor}: iconProps) => (
    <Svg
        width={Spacing.width24}
        height={Spacing.height24}
        viewBox="0 0 24 24"
        fill="none"
        style={style}
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
export const IconNotifile = ({ width, height, style }: iconProps) => (
    <Svg
        width={Spacing.width26}
        height={Spacing.width26}
        viewBox="0 0 26 26"
        style={style}
        fill="none"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 3a1 1 0 10-2 0v.08a6.273 6.273 0 00-5.164 5.036l-1.375 7.331A3 3 0 007.411 19h.715a4.002 4.002 0 007.748 0h.716a3 3 0 002.949-3.553l-1.375-7.331A6.273 6.273 0 0013 3.08V3zm-1 17a2 2 0 001.732-1h-3.464A2 2 0 0012 20zm4.59-3H7.41a1 1 0 01-.983-1.184l1.375-7.332a4.272 4.272 0 018.397 0l1.374 7.332A1 1 0 0116.59 17z"
            fill={Colors.black}
        />
    </Svg>
);
export const IconSold = ({ width, height, style }: iconProps) => (
    <Svg
        width={Spacing.width15}
        height={Spacing.width15}
        viewBox="0 0 15 15"
        style={style}
        fill="none"
    >
        <Path
            d="M13.563 4.563a.604.604 0 00-.876 0L8.75 8.5 6.062 5.812a.567.567 0 00-.437-.187.567.567 0 00-.438.188l-3.75 3.75A.567.567 0 001.25 10c0 .375.25.625.625.625a.567.567 0 00.438-.188l3.312-3.312 2.688 2.688c.062.062.124.124.187.124.063.063.188.063.25.063.125 0 .313-.063.375-.188h.063l4.374-4.374a.604.604 0 000-.875z"
            fill="#000"
        />
    </Svg>
);

