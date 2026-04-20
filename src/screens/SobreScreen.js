import { ScrollView, StyleSheet, View, Text } from 'react-native';
import textoIntroducao from '../data/sobreIntroducao.json';
import textoMissao from '../data/sobreMissao.json';

export default function Sobre() {
    return (
        <View style={styles.app}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.main}>
                    <Text style={styles.titulo}>Sobre</Text>
                    <Text style={styles.introducaoTexto}>{textoIntroducao.texto}</Text>
                    <Text style={styles.missaoTexto}>{textoMissao.texto}</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#F1ECE2',
    },
    scroll: {
        flexGrow: 1,
    },
    main: {
        margin: 30,
        gap: 20,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000000',
    },
    introducaoTexto: {
        fontSize: 18,
        color: '#000000',
        flexWrap: 'wrap',
    },
    missaoTexto: {
        fontWeight: 600,
        fontSize: 18,
        color: '#6F4074',
        flexWrap: 'wrap',
    },
});
