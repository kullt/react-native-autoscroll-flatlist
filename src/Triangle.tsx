import React from "react";
import {StyleSheet, View} from "react-native";

interface Props {
    size: number;
    color: string;
    direction: "up" | "down" | "left" | "right";
}

export default class Triangle extends React.PureComponent<Props> {
    static defaultProps: Pick<Props, "size" | "color" | "direction"> = {
        size: 8,
        color: "#000000",
        direction: "down",
    };

    render() {
        const {size, color, direction} = this.props;
        const directionMapper = {
            up: "0",
            down: "180deg",
            left: "270deg",
            right: "90deg",
        };
        const borderStyle = {
            borderLeftWidth: size,
            borderRightWidth: size,
            borderBottomWidth: size * 1.5,
            borderBottomColor: color,
            transform: [
                {
                    rotate: directionMapper[direction!],
                },
            ],
        };
        return <View style={[styles.triangle, borderStyle]} />;
    }
}

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
    },
});
