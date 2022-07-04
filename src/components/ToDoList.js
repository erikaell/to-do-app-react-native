import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { ListItem } from "react-native-elements";

// Import Axios
import axios from 'axios'
import { TouchableOpacity } from "react-native-web";

export default function ToDoList() {
    //Init State
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [idDelete, setIdDelete] = useState(null);



    // Create LifeCycle
    //Function Exception
    useEffect(() => {
        getTodos()
    }, [])

    // Create Function to fetch
    const getTodos = () => {
        setIsLoading(true);
        axios
            .get('https://api.kontenbase.com/query/api/v1/1c55b5c1-2ad0-458c-9f34-b4c5e5fcc640/todo')
            .then((res) => {
                setTodos(res.data)
                setIsLoading(false);
            })
            .catch(() => {
                alert('Error Fetch Data')
                setIsLoading(false);
            })
    }

    const handleDelete = (id) => {
        setIdDelete(id);
        axios
        .delete(`https://api.kontenbase.com/query/api/v1/1c55b5c1-2ad0-458c-9f34-b4c5e5fcc640/todo/${id}`)
    };

    // const handleUpdate 
    // let style = item.name
    // ? {
    //     textDecorationLine: "line-through",
    //   }
    // : {
    //     textDecorationLine: "none",
    //   };


    //   Create Component List
    const _renderItem = ({ item }) => {
        return (
            <ListItem
                key={item._id.toString()}
                bottomDivider>
                <ListItem.Content style={{ flexDirection: 'row' }}>
                    <ListItem.Title h5 numberOfLines={1}>{item.name}</ListItem.Title>
                    <TouchableOpacity style={{ marginLeft: 10, backgroundColor: 'black', borderRadius: 2, width: 15 }}><Text h4 style={{ color: 'white', textAlign: 'center' }}>V</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { handleDelete(item._id); }} style={{ marginLeft: 10, backgroundColor: 'black', borderRadius: 2, width: 15 }}><Text h4 style={{ color: 'white', textAlign: 'center' }}>X</Text></TouchableOpacity>
                </ListItem.Content>
            </ListItem>
        )
    }


    return (
        <View style={style.container}>
            <View>
                <FlatList
                    data={todos}
                    renderItem={_renderItem}
                    keyExtractor={(item) => item._id.toString()}
                    refreshing={isLoading}
                    onRefresh={getTodos}
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        width: 300,
        flexDirection: "column",
    },
});
