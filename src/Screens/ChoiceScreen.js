import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native'

const choices = [
  'Tous les composants sont séparés, et la majorité réutilisable (boutons, formulaire, message d\'erreur, etc.)',
  'Utilisation du composant StyleSheet et non de style directement dans le rendu',
  'Utilisation de JSX',
  'Utilisation des hooks (uniquement useState et useEffect ici)',
  'Désactivation de showsVerticalScrollIndicator par choix personnel',
  'En situation réelle, j\'aurais utilisé React Navigation pour la navigation',
  'En situation réelle, j\'aurais utilisé axios pour les requêtes',
  'En situation réelle et sous réserve d\'approbation, j\'aurais utilisé React Native Elements pour enrichir la charte graphique',
  'En situation réelle et sous réserve d\'approbation, j\'aurais utilisé Font Awesome pour enrichir la charte graphique avec des icônes',
  'En situation réelle, j\'aurais isolé toutes les couleurs pour pouvoir changer rapidement les couleurs de l\'interface si besoin',
  'En situation réelle, certains composants hériteraient d\'un parent propre à l\'application (Ce qui est dans ./Components/Button et ./Components/FlashMessage notamment)',
  'En situation réelle, il y aurait évidemment une gestion des erreurs HTTP - mais aucune raison ici',
]

const ChoiceScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <Text style={[
        styles.text,
        styles.text_bold,
      ]}>
        Conformément aux spécifications, aucune autre librairie que React Native n'est utilisée.
      </Text>
      {choices.map((choice, i) => {
        return (
          <Text
            key={i}
            style={styles.text}
          >
            - {choice}{i === choices.length - 1 ? '.' : ' ;'}
          </Text>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text_bold: {
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    marginTop: 5,
  },
})

export default ChoiceScreen
