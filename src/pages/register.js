import React from 'react'
import { View,Text,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

export default function Register({navigation}){
    function goToLogin(){
        navigation.navigate('Login')
    }
    return (<View style={style.container}>
        <View style={style.screen}>
        <Image style={style.image} source={require('../assets/aguia.png')} />
        </View>
        <Text style={style.titulo}></Text>
        <View style={style.form}>
        <Text style={style.label}></Text>
        <TextInput style={style.input}
        keyboardType="default"
        placeholder="Nome"
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>
        <Text style={style.label}></Text>
        <TextInput style={style.input}
        secureTextEntry = {true}
        keyboardType="email-address"
        placeholder="E-mail"
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>
        <View style={style.row}>
        <Text style={style.label}></Text>
        <TextInput style={style.cpf}
        keyboardType="number-pad"
        placeholder="CPF"
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>
        <Text style={style.label}></Text>
        <TextInput style={style.rg}
        keyboardType="number-pad"
        placeholder="RG"
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>
        </View>
        <Text style={style.label}></Text>
        <TextInput style={style.input}
        secureTextEntry = {true}
        placeholder="Cargo"
        placeholderTextColor="#999"
        autoCapitalize='none'
        autoCorrect={false}
        ></TextInput>
        <TouchableOpacity style={style.button}><Text style={style.textButton}>Cadastrar</Text></TouchableOpacity>
        <View>
            <TouchableOpacity onPress={goToLogin}>
                <Text style={style.cadastre}>voltar para o Login</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>);
} 

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection:"row",
        marginTop: 5,
        marginTop: 15,
        fontSize: 14,
        height: 45,
        
    },
    titulo: {
        fontSize: 20,
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 50,
        marginTop: 10,
        
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 3,
        marginTop: 1,
    },
    cpf: {
        width: 150,
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    rg: {
        width: 150,
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        marginLeft: 11,
        fontSize: 14,
        height: 45,
        borderRadius: 5
    
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        marginBottom: 9,
        fontSize: 14,
        height: 45,
        borderRadius: 5
    },
    button: {
        height: 45,
        backgroundColor: '#3ec46d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 15
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    cadastre:{
        textAlign: 'center',
        paddingVertical: 20
    },
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 1000,
    }

});