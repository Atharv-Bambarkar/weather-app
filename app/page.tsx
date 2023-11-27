'use client'
import CityPicker from "@/components/CityPicker";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#d7f512] to-[#69c066] p-10 flex flex-col justify-center">
      <Card className="max-w-4xl mx-auto rounded-xl bg-white" >
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">Powered by Open AI, Next.js 14, Tailwind CSS, Tremor 2.0 & More!</Subtitle>   
        <Divider className="my-10"></Divider> 
        <Card className="rounded-xl bg-gradient-to-br from-[#d7f512] to-[#69c066]" >
          <CityPicker></CityPicker>
        </Card>
      </Card>
    </div>
  );
}
