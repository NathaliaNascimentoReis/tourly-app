import { View, Text, StyleSheet } from "react-native";

export default function ContatoScreen() {
  return (
     <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>

      <Text style={styles.subtitulo}>Entre em contato!</Text>

      <Text style={styles.descricao}>
        Tem perguntas ou sugestões? Nossa equipe está pronta para ajudá-lo a explorar melhor a cidade.
      </Text>

      <View style={styles.card}>
        <View style={styles.linha}>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.valor}>
            Sede da Prefeitura - Departamento de Turismo
          </Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.label}>E-mail:</Text>
          <Text style={styles.valor}>suporte@tourly.com.br</Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.valor}>+55 (19) 9999-9999</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1ECE2",
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  subtitulo: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
  },

  descricao: {
    textAlign: "center",
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#D9C2DB",
    borderRadius: 12,
    padding: 15,
  },

  linha: {
    marginBottom: 15,
  },

  label: {
    fontWeight: "bold",
    marginBottom: 3,
  },

  valor: {
    color: "#333",
  },
});
