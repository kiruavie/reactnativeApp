import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const Task = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  //handle input value
  const handleInputValue = (inputTask: string) => {
    setTask(inputTask);
  };

  // add task btn
  const handleAddTask = () => {
    setTaskList((prevTask) => [...prevTask, task]);
    alert("task added succesfully");
    setTask("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputValue}
          style={styles.inputBox}
          placeholder="Add your task"
        />
        <Button onPress={handleAddTask} title="Add Task" />
      </View>

      <View>
        <Text style={styles.border}></Text>
        <Text style={styles.textTiltle}>Your Tasks : </Text>
      </View>

      <View>
        {taskList.map((mytask, index) => (
          <Text style={styles.taskList} key={index}>
            {mytask}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  inputBox: {
    width: "75%",
    borderWidth: 1,
    borderColor: "skyblue",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 20,
  },
  textTiltle: {
    marginTop: 10,
    color: "orange",
    fontSize: 26,
    fontWeight: "bold",
  },
  border: {
    borderBottomWidth: 1,
  },
  taskList: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "skyblue",
    color: "white",
  },
});

export default Task;
