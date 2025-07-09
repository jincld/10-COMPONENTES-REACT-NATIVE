import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, FlatList, Switch, TouchableHighlight, ScrollView, Alert, Modal, Pressable, KeyboardAvoidingView,
  TouchableWithoutFeedback, TextInput, Platform, Keyboard, ActivityIndicator
} from 'react-native';
import { useState } from 'react'; 

export default function App() {
  const componentes = [
    { id: '1', nombre: 'Loona' },
    { id: '2', nombre: 'Tomorrow X Together' },
    { id: '3', nombre: 'NewJeans' },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const [mensaje, setMensaje] = useState('Presiona el botón');

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handlePress = () => {
    setMensaje('¡Has presionado el botón!');
  };

  const [loading, setLoading] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>10 COMPONENTES</Text>

        <Text style={styles.tituloLista}>Ejemplo imagen:</Text>
        <Image source={require('./assets/imagendeprueba.png')} style={styles.imagen} />

        <StatusBar style="auto" />

        <Text style={styles.texto}>
          Para usarla la mandamos a llamar en los imports y luego creamos su etiqueta Image mandado a llamar la ruta de la imagen.
        </Text>

        <Text style={styles.tituloLista}>1. FlatList</Text>
        <Text style={styles.texto}>
          Para usarlos la mandamos a llamar en los imports y luego creamos su const con los datos para llenar en su etiqueta y los renderizamos.
        </Text>

        <FlatList
          data={componentes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text style={styles.textoLista}>• {item.nombre}</Text>}
        />

        <Text style={styles.tituloLista}>2. Switch</Text>
        <Text style={styles.texto}>
          Para usarlo lo mandamos a llamar en los imports asegurándonos de tener también el useState, así abajo llamamos su etiqueta y definimos qué hará en cada estado activado o desactivado.
        </Text>
        <View style={styles.switchContainer}>
          <Text style={styles.texto}>Estado del switch: {isEnabled ? 'Activado' : 'Desactivado'}</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#007bff' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <Text style={styles.tituloLista}>3. TouchableHighlight</Text>
        <Text style={styles.texto}>
          Para usarlo lo mandamos a llamar en los imports, creamos useStates para definir que hará el touchable cuando sea presionado.
        </Text>
        <TouchableHighlight
          style={styles.touchable}
          underlayColor="#0056b3"
          onPress={handlePress}
        >
          <Text style={styles.textoBoton}>Presióname</Text>
        </TouchableHighlight>
        <Text style={styles.texto}>{mensaje}</Text>

        <Text style={styles.tituloLista}>4. Modal 5. Pressable 6. Alert</Text>
        <Text style={styles.texto}>
          Los importamos, y creamos un estado de visibilidad para el modal. El componente Modal permite mostrar contenido encima del resto. Con Pressable podemos ejecutar acciones como abrir el modal o lanzar una alerta. Alert es una alerta que aparece en pantalla.
        </Text>

        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textoBoton}>Mostrar Modal</Text>
        </Pressable>


        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal cerrado');
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>¡Hola desde el Modal!</Text>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => Alert.alert('Alerta', 'Presionaste dentro del modal')}
              >
                <Text style={styles.textoBoton}>Mostrar Alerta</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose, { marginTop: 10 }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textoBoton}>Cerrar Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Text style={styles.tituloLista}>7. ScrollView</Text>
        <Text style={styles.texto}>
          Para usarlo lo importamos, luego en nuestro return lo incluimos envolviendo en una etiqueta todo lo que queremos que sea deslizable, esta app tiene un ScrollView en toda la pantalla.
        </Text>

        <Text style={styles.tituloLista}>8. KeyboardAvoidingView 9.Pressable</Text>
<Text style={styles.texto}>
          Este componente evita que el teclado cubra los inputs. Se usa con TextInput y se ajusta según el sistema operativo. También usamos TouchableWithoutFeedback para cerrar el teclado al tocar fuera. El pressable es un componente que puede ser presionado para hacer una acción, buena alternativa a un botón.
</Text>

<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.keyboardContainer}
>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.keyboardInner}>
      <TextInput
        style={styles.textInput}
        placeholder="Escribe tu nombre"
      />
      <View style={styles.btnContainer}>
        <Pressable onPress={() => Alert.alert('¡Gracias!', 'Nombre enviado')} style={styles.buttonClose}>
          <Text style={styles.textoBoton}>Enviar</Text>
        </Pressable>
      </View>
    </View>
  </TouchableWithoutFeedback>
</KeyboardAvoidingView>

        <Text style={styles.tituloLista}>10. ActivityIndicator</Text>
        <Text style={styles.texto}>
          Este componente muestra un ícono de carga girando. Es útil para mostrar que algo está en proceso, como una descarga o petición. Creamos una constante para cada estado del componente y las llamamos aqui asignando una acción a cada estado.
        </Text>

        <Pressable style={styles.buttonOpen} onPress={() => setLoading(true)}>
          <Text style={styles.textoBoton}>Cargar información</Text>
        </Pressable>

        {loading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.texto}>Cargando...</Text>
          </View>
        )}

        <Text style={styles.tituloLista}>¡Gracias por leer!</Text>
        <Image source={require('./assets/imagenbp.png')} style={styles.imagen} />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
  },

  container: {
    backgroundColor: '#fff',
    marginTop: 50,
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  imagen: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },

  texto: {
    fontSize: 15,
    color: 'black',
    marginBottom: 15,
  },

  tituloLista: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'blue',
  },

  textoLista: {
    fontSize: 16,
    marginBottom: 8,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  touchable: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },

  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)', // Fondo semitransparente
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    borderRadius: 10,
    padding: 12,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    marginTop: 10,
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },

  loaderContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
