import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MotiView } from 'moti';

// Theme
import { colors, globalStyles } from '../theme/theme';

// Components
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();

    return (
        <View style={[globalStyles.container, { paddingTop: insets.top }]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                <MotiView
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'timing', duration: 1000 }}
                >
                    <HeroSection />
                    <ServicesSection />
                    <PortfolioSection />
                    <ProcessSection />
                    <ContactSection />
                </MotiView>
            </ScrollView>
        </View>
    );
}
