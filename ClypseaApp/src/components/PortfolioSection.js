import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { MotiView } from 'moti';
import { colors, typography, spacing } from '../theme/theme';

const { width } = Dimensions.get('window');

const projects = [
    { id: '1', title: 'Aura Branding', category: 'Creative Design', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80', size: 'large' },
    { id: '2', title: 'Nexus Web', category: 'Web Development', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80', size: 'small' },
    { id: '3', title: 'Zephyr Campaign', category: 'Digital Marketing', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80', size: 'medium' },
    { id: '4', title: 'Nova UI/UX', category: 'Design & Dev', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80', size: 'large' },
];

export default function PortfolioSection() {
    return (
        <View style={styles.container}>
            <MotiView
                from={{ opacity: 0, translateY: 30 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'timing', duration: 800, delay: 200 }}
            >
                <Text style={styles.headerTitle}>Selected Work</Text>
            </MotiView>

            <View style={styles.grid}>
                {projects.map((item, index) => (
                    <MotiView
                        key={item.id}
                        from={{ opacity: 0, translateY: 50 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'timing', delay: index * 150 + 400, duration: 800 }}
                        style={[
                            styles.itemContainer,
                            item.size === 'large' ? styles.itemLarge : styles.itemSmall,
                        ]}
                    >
                        <Pressable style={({ pressed }) => [styles.imageWrapper, pressed && styles.imagePressed]}>
                            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
                        </Pressable>
                        <View style={styles.info}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.category}>{item.category}</Text>
                        </View>
                    </MotiView>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing.xxl * 2,
        paddingHorizontal: spacing.container,
    },
    headerTitle: {
        ...typography.title2,
        marginBottom: spacing.xxl,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    itemContainer: {
        marginBottom: spacing.xl * 2,
    },
    itemLarge: {
        width: '100%',
    },
    itemSmall: {
        width: width > 600 ? '48%' : '100%',
    },
    imageWrapper: {
        overflow: 'hidden',
        borderRadius: 16,
        width: '100%',
        aspectRatio: 4 / 3,
    },
    imagePressed: {
        transform: [{ scale: 0.96 }],
        opacity: 0.9,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    info: {
        marginTop: spacing.md,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        ...typography.title3,
        fontSize: 20,
    },
    category: {
        ...typography.subtitle,
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 1,
    }
});
