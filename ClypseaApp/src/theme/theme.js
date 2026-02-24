export const colors = {
    background: '#0d0d0d',
    surface: '#1a1a1a',
    text: '#f0f0f0',
    textMuted: '#888888',
    accent: '#d6ff00', // Vibrant Neon Yellow/Green
    border: 'rgba(255,255,255,0.1)',
    black: '#000000',
};

export const typography = {
    heading: {
        fontFamily: 'System', // Usually custom fonts, but keeping system bold for ease unless loading specific fonts
        fontWeight: '900',
        textTransform: 'uppercase',
    },
    body: {
        fontFamily: 'System',
        fontSize: 16,
        color: colors.text,
    },
    title1: {
        fontSize: 48,
        fontWeight: '900',
        color: colors.text,
        lineHeight: 52,
    },
    title2: {
        fontSize: 32,
        fontWeight: '800',
        color: colors.text,
    },
    title3: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.text,
    },
    subtitle: {
        fontSize: 18,
        color: colors.textMuted,
    }
};

export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    container: 24,
};

export const globalStyles = {
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    }
};
