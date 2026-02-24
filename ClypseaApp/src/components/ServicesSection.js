import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { MotiView } from 'moti';
import { colors, typography, spacing } from '../theme/theme';

const { width } = Dimensions.get('window');

const services = [
    { id: '1', num: '01', title: 'Creative Design', desc: 'Branding, graphic design, UI/UX, and social media design that captivates and converts.' },
    { id: '2', num: '02', title: 'Digital Marketing', desc: 'Data-driven strategies, engaging content, and targeted campaigns to scale your digital presence.' },
    { id: '3', num: '03', title: 'Web Development', desc: 'Immersive, high-performance websites built with modern technologies and creative interactions.' },
];

export default function ServicesSection() {
    return (
        <View style={styles.container}>
            <MotiView
                from={{ opacity: 0, translateX: -50 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ type: 'timing', duration: 800, delay: 200 }}
            >
                <Text style={styles.headerTitle}>Our Expertise</Text>
                <Text style={styles.headerDesc}>We blend creativity with technology to build modern brand experiences.</Text>
            </MotiView>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                snapToInterval={width * 0.8 + spacing.md}
                decelerationRate="fast"
            >
                {services.map((item, index) => (
                    <MotiView
                        key={item.id}
                        from={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', delay: index * 200 + 400 }}
                        style={styles.card}
                    >
                        <Text style={styles.number}>{item.num}</Text>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.desc}>{item.desc}</Text>
                    </MotiView>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing.xxl * 2,
        backgroundColor: colors.surface,
    },
    headerTitle: {
        ...typography.title2,
        paddingHorizontal: spacing.container,
        marginBottom: spacing.sm,
    },
    headerDesc: {
        ...typography.subtitle,
        paddingHorizontal: spacing.container,
        marginBottom: spacing.xl,
        maxWidth: '80%',
    },
    scrollContent: {
        paddingHorizontal: spacing.container,
        paddingBottom: spacing.xl,
        gap: spacing.md,
    },
    card: {
        width: width * 0.8,
        backgroundColor: colors.background,
        padding: spacing.xl,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: colors.border,
        minHeight: 250,
        justifyContent: 'space-between',
    },
    number: {
        ...typography.heading,
        fontSize: 24,
        color: colors.accent,
    },
    title: {
        ...typography.title3,
        marginBottom: spacing.sm,
        marginTop: spacing.xl,
    },
    desc: {
        ...typography.body,
        color: colors.textMuted,
        lineHeight: 24,
    }
});
