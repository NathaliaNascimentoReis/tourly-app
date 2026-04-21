import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function DetalheScreen({ route }) {
    const { id } = route.params;

    return (
        <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scroll}>
            <View style={styles.main}>
                    <Text style={styles.titulo}>{id.categoria}</Text>
                    <View style={styles.card}>
                        <Image source={{ uri: id.imagem }} style={styles.imagem} />
                        <View style={styles.info}>
                            <Text style={styles.nome}>{id.nome}</Text>
                            <Text style={styles.descricao}>{id.descricao}</Text>
                            <Text style={styles.avaliacao}>Avaliação: {id.estrelas}</Text>
                            <View style={styles.local}>
                                <MaterialIcons name="location-pin" size={23} color="black" />

                                <Text style={styles.localizacao}>{id.localizacao}</Text>
                            </View>

                            <Text style={styles.descricaoCompleta}>{id.descricaoCompleta}</Text>
                        </View>
                    </View>
            </View>
                </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4ff',
    },
    main: {
        margin: 30,
    },
    scroll: {
        paddingBottom: 'auto',
    },
    card: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#D9C3D8',
    },
    titulo: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
    },
    imagem: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 10,
    },
    nome: {
        fontSize: 30,
        color: '#6F4074',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descricao: {
        color: '#000000',
        fontSize: 20,
        flexWrap: 'wrap',
    },
    avaliacao: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 600,
        marginTop: 20,
        marginBottom: 20,
    },
    local: {
        flexDirection: 'row',
    },
    localizacao: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 600,
    },
    descricaoCompleta: {
        marginTop: 30,
        color: '#000000',
        fontSize: 18,
    },
});
