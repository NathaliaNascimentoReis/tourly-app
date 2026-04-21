import {
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Text,
    Image,
    useWindowDimensions,
} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import restaurantes from '../data/restaurantes.json';

export default function RestaurantesScreen({ navigation }) {
    const { width } = useWindowDimensions();
    const numColumns = width > 600 ? 2 : 1;

    const renderItem = ({ item }) => (
        <View style={[styles.card, { width: numColumns === 2 ? '48%' : '100%' }]}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.nome}>{item.nome}</Text>
                <Text style={styles.descricao}>{item.descricao}</Text>
                <Text style={styles.avaliacao}>Avaliação: {item.estrelas}</Text>
                <View style={styles.local}>
                    <MaterialIcons name="location-pin" size={23} color="black" />
                    <Text style={styles.localizacao}>{item.localizacao}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.botao}
                onPress={() => navigation.navigate('Detalhes', { id: item })}>
                <Text style={styles.textoBotao}>Detalhes</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.textoTitulo}>Restaurantes</Text>

                <FlatList
                    key={numColumns}
                    data={restaurantes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    numColumns={numColumns}
                    columnWrapperStyle={numColumns > 1 ? styles.row : null}
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
    row: {
        flex: 1,
        justifyContent: 'space-around',
    },
    card: {
        justifyContent: 'space-between',
        marginTop: 10,
        width: '40%',
        height: 'auto',
        backgroundColor: '#D9C3D8',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 12,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 5,
        marginBottom: 10,
    },
    info: {
        width: '100%',
    },
    nome: {
        color: '#000000',
        fontSize: 21,
        fontWeight: 600,
        flexWrap: 'wrap',
    },
    descricao: {
        color: '#000000',
        fontSize: 17,
        flexWrap: 'wrap',
    },
    avaliacao: {
        color: '#000000',
        fontSize: 17,
        fontWeight: 600,
        marginTop: 10,
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
    botao: {
        justifyContent: 'space-around',
        marginTop: 30,
        backgroundColor: '#965B96',
        padding: 10,
        borderRadius: 10,
    },
    textoBotao: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 18,
    },
});
