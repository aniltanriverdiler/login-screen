import CheckBox from "@/components/common/check-box";
import Input from "@/components/common/input";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  return (
    <LinearGradient
      colors={["#FFF7E6", "#EFE2C8"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        {/* Login Screen Icon and Text Section */}
        <View className="flex flex-col items-center mt-12 gap-5">
          <Image
            source={require("../assets/icons/login-icon.png")}
            className="w-[90px] h-[90px] rounded-3xl"
          />
          <Text className="font-dmBold text-[34px] leading-[40px] tracking-[-0.5px]">
            Welcome Back
          </Text>
          <Text className="font-dm font-semibold text-center w-[270px] text-gray-600">
            Adopting a pet from a local animal shelter will be your best option.
          </Text>
        </View>

        {/* Input Section */}
        <View className="mt-12">
          <Input />
          <Input iconName="lock" placeholder="Password" />
        </View>

        {/* Input Text Section */}
        <View className="flex flex-row justify-between mt-1 mx-7">
          <CheckBox />
          <Text className="font-dmBold text-base text-[#388C70]">
            Forgot Password ?
          </Text>
        </View>

        {/* Login Button Section */}
        <TouchableOpacity className="bg-[#388C70] mx-7 mt-6 rounded-full">
          <Text className="font-dmBold text-center text-lg text-white p-3">
            Login
          </Text>
        </TouchableOpacity>

        {/* Button Text Section */}
        <View className="flex-row items-center gap-4 my-6 mx-7">
          <View className="h-[1px] flex-1 bg-neutral-500"></View>
          <Text className="text-neutral-500 text-lg">Or</Text>
          <View className="h-[1px] flex-1 bg-neutral-500"></View>
        </View>

        {/* Login section with Google and Apple accounts */}
        <TouchableOpacity className="bg-white mx-7 rounded-2xl">
          <View className="flex flex-row items-center justify-center gap-4 p-3 border border-gray-200">
            <Image
              source={require("../assets/icons/google-icon.png")}
              className="w-[24px] h-[24px]"
            />
            <Text className="font-dmBold text-neutral-500 text-lg">
              Log in with Google
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white mx-7 rounded-2xl mt-5">
          <View className="flex flex-row items-center justify-center gap-4 p-3 border border-gray-200">
            <Image
              source={require("../assets/icons/apple-logo-icon.png")}
              className="w-[24px] h-[24px]"
            />
            <Text className="font-dmBold text-neutral-500 text-lg">
              Log in with Apple
            </Text>
          </View>
        </TouchableOpacity>

        {/* Register Link Section */}
        <View className="flex flex-row justify-center items-center gap-1 mt-20">
          <Text className="font-dmBold text-neutral-500 text-lg">
            Don't have an account?
          </Text>
          <Text className="font-dmBold text-[#388C70] text-lg">Sign Up</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
