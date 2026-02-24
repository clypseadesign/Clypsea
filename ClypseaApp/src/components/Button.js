import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { colors, typography, spacing } from '../theme/theme';

export default function Button({ title, onPress, variant = 'solid', style }) {
    return (
        <MotiView
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', damping: 15 }}
            style={style}
        >
            <Pressable
                onPress={onPress}
                style={({ pressed }) => [
                    styles.button,
                    variant === 'outline' ? styles.outline : styles.solid,
                    pressed && { opacity: 0.8 }
                ]}
            >
                <Text style={[
                    styles.text,
                    variant === 'outline' ? styles.textOutline : styles.textSolid
                ]}>
                    {title}
                </Text>
            </Pressable>
        </MotiView>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.xl,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    solid: {
        backgroundColor: colors.accent,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.accent,
    },
    text: {
        ...typography.body,
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    textSolid: {
        color: colors.background,
    },
    textOutline: {
        color: colors.accent,
    },
});
