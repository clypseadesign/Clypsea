import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MotiView } from 'moti';
import { colors, typography, spacing } from '../theme/theme';

const steps = [
    { id: '1', num: '01', title: 'Discover', desc: "We dive deep into your brand, understanding your goals, audience, and the unique challenges you face." },
    { id: '2', num: '02', title: 'Design', desc: "We craft visually striking and intuitive designs that communicate your brand's essence and captivate users." },
    { id: '3', num: '03', title: 'Develop', desc: "We bring designs to life with robust, modern technologies, ensuring performance and seamless interactions." },
    { id: '4', num: '04', title: 'Grow', desc: "We launch your project and drive continuous growth through targeted digital marketing strategies." },
];

export default function ProcessSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerTitle}>How We Work</Text>

            <View style={styles.timeline}>
                {steps.map((step, index) => (
                    <MotiView
                        key={step.id}
                        from={{ opacity: 0, translateX: -30 }}
                        animate={{ opacity: 1, translateX: 0 }}
                        transition={{ type: 'timing', delay: index * 200 + 300, duration: 800 }}
                        style={styles.step}
                    >
                        <View style={styles.stepHeader}>
                            <Text style={styles.num}>{step.num}</Text>
                            <Text style={styles.title}>{step.title}</Text>
                        </View>
                        <Text style={styles.desc}>{step.desc}</Text>
                        {index !== steps.length - 1 && <View style={styles.line} />}
                    </MotiView>
                ))}
            </View>

            <MotiView
                from={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', delay: 1000 }}
                style={styles.statementContainer}
            >
                <Text style={styles.statementText}>WE DON'T DO <Text style={{ color: colors.accent }}>BORING.</Text></Text>
                <Text style={styles.statementText}>WE BUILD BRANDS THAT CAN'T BE IGNORED.</Text>
            </MotiView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing.xxl * 2,
        paddingHorizontal: spacing.container,
        backgroundColor: colors.surface,
    },
    headerTitle: {
        ...typography.title2,
        marginBottom: spacing.xxl,
    },
    timeline: {
        paddingLeft: spacing.md,
    },
    step: {
        marginBottom: spacing.xl * 1.5,
        position: 'relative',
    },
    stepHeader: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: spacing.sm,
    },
    num: {
        ...typography.heading,
        fontSize: 48,
        color: colors.border,
        marginRight: spacing.md,
        position: 'absolute',
        left: -spacing.xl * 1.5,
        top: -spacing.md,
        zIndex: 0,
    },
    title: {
        ...typography.title3,
        fontSize: 32,
        zIndex: 1,
    },
    desc: {
        ...typography.body,
        color: colors.textMuted,
        lineHeight: 24,
        maxWidth: '90%',
        zIndex: 1,
        marginTop: spacing.sm,
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: colors.border,
        marginTop: spacing.xl * 1.5,
    },
    statementContainer: {
        marginTop: spacing.xxl * 3,
        alignItems: 'center',
        paddingVertical: spacing.xxl,
    },
    statementText: {
        ...typography.title1,
        fontSize: 40,
        lineHeight: 44,
        textAlign: 'center',
        letterSpacing: -1,
        marginBottom: spacing.sm,
    }
});
