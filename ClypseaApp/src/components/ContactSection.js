import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { MotiView } from 'moti';
import { colors, typography, spacing } from '../theme/theme';
import Button from './Button';

const { width } = Dimensions.get('window');

export default function ContactSection() {
    return (
        <View style={styles.container}>
            <MotiView
                from={{ opacity: 0, translateY: 30 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'timing', duration: 800 }}
            >
                <Text style={styles.headerTitle}>Let's Create Together.</Text>
                <Text style={styles.subtitle}>Ready to push the boundaries? Reach out to us.</Text>
            </MotiView>

            <MotiView
                from={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: 'spring', delay: 400 }}
                style={styles.formContainer}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Your Name"
                    placeholderTextColor={colors.textMuted}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Your Email"
                    placeholderTextColor={colors.textMuted}
                    keyboardType="email-address"
                />
                <TextInput
                    style={[styles.input, styles.textArea]}
                    placeholder="Your Message"
                    placeholderTextColor={colors.textMuted}
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                />

                <View style={styles.buttonWrapper}>
                    <Button title="Send Message" onPress={() => { }} />
                </View>
            </MotiView>

            <View style={styles.footer}>
                <Text style={styles.footerText}>hello@clypsea.com</Text>
                <Text style={styles.footerText}>+1 234 567 890</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing.xxl * 2,
        paddingHorizontal: spacing.container,
        minHeight: width > 600 ? 500 : 700,
        justifyContent: 'center',
    },
    headerTitle: {
        ...typography.title1,
        marginBottom: spacing.sm,
    },
    subtitle: {
        ...typography.subtitle,
        marginBottom: spacing.xl * 2,
    },
    formContainer: {
        gap: spacing.lg,
    },
    input: {
        ...typography.body,
        borderBottomWidth: 1,
        borderColor: colors.border,
        paddingVertical: spacing.md,
        fontSize: 18,
        color: colors.text,
    },
    textArea: {
        minHeight: 120,
        marginTop: spacing.sm,
    },
    buttonWrapper: {
        marginTop: spacing.xl,
        alignSelf: 'flex-start',
    },
    footer: {
        marginTop: spacing.xxl * 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderColor: colors.border,
        paddingTop: spacing.xl,
    },
    footerText: {
        ...typography.body,
        fontWeight: '700',
        color: colors.accent,
    }
});
