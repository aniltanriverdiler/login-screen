import Feather from "@expo/vector-icons/Feather";
import React, { useRef } from "react";
import { TextInput, TouchableWithoutFeedback, View } from "react-native";

const Input = (props: TextInput["props"] & { iconName?: string }) => {
  const inputRef = useRef<TextInput | null>(null);

  return (
    <View className="px-6 mb-5">
      <TouchableWithoutFeedback
        onPress={() => {
          inputRef?.current?.focus();
        }}
      >
        <View className="flex flex-row items-center bg-white border border-gray-300 rounded-xl">
          <View className="absolute w-[32px] aspect-square items-center justify-center ml-1.5">
            <Feather
              name={(props.iconName as any) ?? "mail"}
              size={24}
              color="gray"
            />
          </View>
          <TextInput
            placeholder="Enter your email"
            {...props}
            ref={inputRef}
            placeholderTextColor={"gray"}
            className="text-gray-500 font-dm font-semibold pl-12 my-1.5"
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Input;
