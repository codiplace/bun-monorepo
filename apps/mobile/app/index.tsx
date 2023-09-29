import { Pressable, StyleSheet, Text, View } from 'react-native'
import { api } from 'backend-api'

async function load() {
	api['hello-world'].get().then((res) => {
		console.log('Response from backend', res.data)
	})
}

export default function Page() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.title}>Hello World</Text>
				<Text style={styles.subtitle}>This is the first page of your app.</Text>

				<Pressable onPress={load} style={styles.button}>
					<Text style={styles.buttonText}>Get /hello-world</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
	},
	main: {
		flex: 1,
		justifyContent: 'center',
		maxWidth: 960,
		marginHorizontal: 'auto',
	},
	title: {
		fontSize: 64,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 36,
		color: '#38434D',
	},
	button: {
		marginTop: 32,
		padding: 16,
		borderRadius: 8,
		backgroundColor: '#F5F5F5',
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		color: '#38434D',
	},
})
