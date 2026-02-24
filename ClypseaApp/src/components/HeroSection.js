import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { MotiView, MotiText } from 'moti';
import { colors, typography, spacing } from '../theme/theme';
import Button from './Button';

const { width, height } = Dimensions.get('window');

export default function HeroSection() {
    return (
        <View style={styles.container}>
            {/* Background Shapes simulation */}
            <View style={[styles.shape, styles.shape1]} />
            <View style={[styles.shape, styles.shape2]} />

            <View style={styles.content}>
                <MotiView
                    from={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: 'timing', duration: 1000, delay: 200 }}
                    style={styles.titleContainer}
                >
                    <Text style={styles.title}>WE DESIGN</Text>
                    <Text style={styles.title}>DIGITAL</Text>
                    <Text style={[styles.title, styles.accent]}>EXPERIENCES.</Text>
                </MotiView>

                <MotiView
                    from={{ opacity: 0, translateY: 20 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ type: 'timing', duration: 800, delay: 600 }}
                >
                    <Text style={styles.subtitle}>
                        A multi-service creative agency pushing the boundaries of design, marketing, and development.
                    </Text>
                </MotiView>

                <MotiView
                    from={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', delay: 800 }}
                    style={styles.buttonContainer}
                >
                    <Button title="Explore Our Work" variant="outline" onPress={() => { }} />
                </MotiView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: height * 0.85,
        paddingHorizontal: spacing.container,
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
    },
    shape: {
        position: 'absolute',
        borderRadius: 500,
        opacity: 0.15,
    },
    shape1: {
        width: width * 1.2,
        height: width * 1.2,
        backgroundColor: colors.accent,
        top: -width * 0.4,
        right: -width * 0.5,
    },
    shape2: {
        width: width,
        height: width,
        backgroundColor: '#4a00e0',
        bottom: -width * 0.3,
        left: -width * 0.3,
    },
    content: {
        zIndex: 10,
    },
    titleContainer: {
        marginBottom: spacing.xl,
    },
    title: {
        ...typography.title1,
        fontSize: width > 600 ? 72 : 54, // Responsive scaling
        lineHeight: width > 600 ? 76 : 58,
        letterSpacing: -1,
    },
    accent: {
        color: colors.accent,
    },
    subtitle: {
        ...typography.subtitle,
        maxWidth: 300,
        lineHeight: 24,
    },
    buttonContainer: {
        marginTop: spacing.xl * 1.5,
    }
});
