import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataFavoritos = async (key) => {
    try{
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
    }
}

export const storeDataFavoritos = async (value, key) => {
    try{
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (error) {
    }
}
export const getDataBorrados = async (key) => {
    try{
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
    }
}

export const storeDataBorrados = async (value, key) => {
    try{
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (error) {
    }
}

// para sacar de la papelera y traerlos a home
export const getDataRestaurados = async (key) => {
    try{
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
    }
}

export const storeDataRestaurados = async (value, key) => {
    try{
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (error) {
    }
}