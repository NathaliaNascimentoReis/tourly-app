import { View, StyleSheet, FlatList, Text, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import pontosTuristicos from '../data/locais.json';

export default function LocaisScreen() {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.descricao} numberOfLines={2}>
                    {item.descricao}
                </Text>
                <Text style={styles.avaliacao}>Avaliação: {item.estrelas}/5</Text>
                <View style={styles.local}>
                    <MaterialIcons name="location-pin" size={23} color="black" />
                    <Text style={styles.localizacao} numberOfLines={2}>
                        {item.localizacao}
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="menu" size={35} color="white" />
                <Text style={styles.titulo}>Tourly</Text>
                <MaterialIcons name="person" size={35} color="white" />
            </View>

            <View style={styles.main}>
                <Text style={styles.textoTitulo}>Restaurantes</Text>

                <FlatList
                    data={pontosTuristicos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4ff',
    },
    header: {
        width: '100%',
        height: '10%',
        backgroundColor: '#6F4074',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '3%',
        alignItems: 'center',
    },
    titulo: {
        color: '#fff',
        fontSize: 25,
    },
    main: {
        flex: 1,
        margin: '3%',
    },
    textoTitulo: {
        color: '#000000',
        fontSize: 27,
        fontWeight: 600,
    },
    card: {
        marginTop: 10,
        width: '100%',
        height: 'auto',
        backgroundColor: '#D9C3D8',
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        padding: '3%',
    },
    image: {
        width: '25%',
        height: 200,
        borderRadius: 5,
    },
    info: {
        paddingLeft: '2%',
    },
    nome: {
        color: '#000000',
        fontSize: 21,
        fontWeight: 600,
    },
    descricao: {
        color: '#000000',
        fontSize: 18,
        marginTop: '1%',
    },
    avaliacao: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 600,
        marginTop: '10%',
    },
    local: {
        flexDirection: 'row',
    },
    localizacao: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 600,
    },
});
