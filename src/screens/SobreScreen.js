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

                    <View style={styles.div}>
                        <View style={styles.textos}>
                            <Text style={styles.textosTitulo}>Locais selecionados:</Text>
                            <Text style={styles.textosDescricao}>
                                Atrações turísticas cuidadosamente selecionadas com imagens de alta
                                qualidade.
                            </Text>
                        </View>
                        <View style={styles.textos}>
                            <Text style={styles.textosTitulo}>Guia de jantar:</Text>
                            <Text style={styles.textosDescricao}>
                                Uma lista completa dos melhores restaurantes e estabelecimentos
                                gastronômicos locais.
                            </Text>
                        </View>
                        <View style={styles.textos}>
                            <Text style={styles.textosTitulo}>Navegação Inteligente:</Text>
                            <Text style={styles.textosDescricao}>
                                Interface simples e intuitiva com dados de localização detalhados.
                            </Text>
                        </View>
                    </View>
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
    div: {
        backgroundColor: '#D9C3D8',
        borderRadius: 10,
        padding: 10,
        gap: 20,
        marginBottom: 30
    },
    textos: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textosTitulo: {
        fontWeight: 'bold',
        fontSize: 18,
        width: '50%',
        paddingRight: 15,
    },
    textosDescricao: {
        flex: 1,
        fontSize: 15,
        lineHeight: 22,
        flexWrap: 'wrap',
    },
});
