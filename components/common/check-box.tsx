import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Pressable
      onPress={() => setChecked(!checked)}
      className="flex-row items-center gap-3"
    >
      <View
        className={`w-5 h-5 rounded-md border 
          ${checked ? "bg-[#388C70] border-[#388C70]" : "border-[#388C70]"}
          items-center justify-center`}
      >
        {checked && <Feather name="check" size={14} color="white" />}
      </View>

      <Text className="font-dmBold text-base text-neutral-500">
        Remember me
      </Text>
    </Pressable>
  );
};

export default CheckBox;
