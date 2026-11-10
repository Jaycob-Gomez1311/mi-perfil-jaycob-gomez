// Mi Perfil Estudiantil - Paso 3: Estructura base
import React from 'react';
import {
  StyleSheet, Text, View, Image, Pressable, SafeAreaView, StatusBar, ScrollView
} from 'react-native';
// 👆 Agregamos ScrollView

export default function App() {

  // 🖱️ Función que se ejecuta al presionar un botón
  const manejarContacto = () => {
    alert('📩 ¡Gracias por tu interés! (Aquí iría tu email)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* 📜 ScrollView: permite scroll si el contenido es largo */}
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* 👇 TODO tu contenido va DENTRO del ScrollView */}

        {/* 🖼️ Foto */}
        <View style={styles.photoContainer}>
          <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/248085065?v=4' }}
            style={styles.photo}
          />
        </View>

        {/* 👤 Info personal */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Jaycob Gómez</Text>
          <Text style={styles.title}>Licenciatura en Informática - UASD</Text>
          <Text style={styles.bio}>
            🚀 Aprendiendo apps móviles con Expo.{'\n'}
            💡 Mi meta: crear algo útil.
          </Text>
        </View>

        {/* 🏷️ Badges */}
        <View style={styles.skillsContainer}>
          <Text style={styles.sectionTitle}>Mis habilidades</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>✨ React Native</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🎨 Diseño UI</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>🐳 Docker</Text>
          </View>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>📱 Expo Go</Text>
          </View>
        </View>

        {/* 🔗 Botones */}
        <View style={styles.actionsContainer}>
          <Pressable style={styles.buttonPrimary} onPress={manejarContacto}>
            <Text style={styles.buttonPrimaryText}>📩 Contáctame</Text>
          </Pressable>

          <Pressable
            style={styles.buttonSecondary}
            onPress={() => alert('🔗 Próximamente: mi portafolio')}
          >
            <Text style={styles.buttonSecondaryText}>🌐 Mi portafolio</Text>
          </Pressable>
        </View>

        {/* 🦶 Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Creado con ❤️ en Snack.expo.dev{'\n'}
            📅 {new Date().getFullYear()}
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',  // 🟢 Verde suave
    // backgroundColor: '#FFF3E0',  // 🟠 Naranja suave
    // backgroundColor: '#E3F2FD',  // 🔵 Azul suave
  },

  // 📜 ESTILOS PARA SCROLLVIEW
  scrollContent: {
    paddingBottom: 30,  // 📏 Espacio extra al final para que no quede pegado
  },

  // 🖼️ ESTILOS PARA LA FOTO
  photoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  photo: {
    width: 100,            // 📏 De 120 a 100
    height: 100,
    borderRadius: 50,      // 🔴 ¡Siempre la mitad del ancho!
    borderWidth: 4,        // 📐 Grosor del borde
    borderColor: '#2196F3',// 🎨 Color del borde (azul)
  },

  // 👤 ESTILOS PARA EL NOMBRE
  name: {
    fontSize: 28,          // 👆 De 24 a 28
    fontWeight: 'bold',    // 💪 Texto en negrita
    color: '#1a1a1a',      // 🎨 Color casi negro
    marginBottom: 8,       // 📏 Espacio debajo del nombre
  },

  // 👤 INFORMACIÓN PERSONAL
  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,   // 📏 Espacio a los lados
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    color: '#2196F3',        // 🎨 Azul para destacar
    fontWeight: '500',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#666666',        // 🎨 Gris para texto secundario
    textAlign: 'center',     // ↔️ Centra el texto
    lineHeight: 20,          // 📏 Espacio entre líneas
  },

  // 🏷️ HABILIDADES (BADGES)
  skillsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  badge: {
    backgroundColor: '#E3F2FD',  // 🎨 Fondo azul muy claro
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,            // 🔘 Forma de píldora
    marginBottom: 8,
    alignSelf: 'flex-start',     // ↔️ Alinea a la izquierda
  },
  badgeText: {
    fontSize: 14,
    color: '#1565C0',            // 🎨 Azul oscuro para texto
    fontWeight: '500',
  },

  // 🔗 BOTONES DE ACCIÓN
  actionsContainer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  buttonPrimary: {
    backgroundColor: '#2196F3',  // 🎨 Azul principal
    paddingVertical: 18,         // 👆 Aumenta de 14 a 18
    paddingHorizontal: 32,       // 📏 Espacio a los lados
    borderRadius: 12,            // 🔘 Bordes redondeados
    alignItems: 'center',        // ↔️ Centra el texto dentro del botón
  },
  buttonPrimaryText: {
    color: '#ffffff',            // 🎨 Texto blanco
    fontSize: 16,
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: '#ffffff',  // 🎨 Fondo blanco
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,              // 📐 Borde de 2 píxeles
    borderColor: '#2196F3',      // 🎨 Borde azul
  },
  buttonSecondaryText: {
    color: '#2196F3',            // 🎨 Texto azul
    fontSize: 16,
    fontWeight: '600',
  },

  // 🦶 FOOTER
  footer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});