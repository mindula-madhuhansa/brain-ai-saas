import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Replicate from "replicate";

import { checkApiLimit, increaseApiLimit } from "@/lib/apiLimits";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    const body = await request.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();

    if (!freeTrial) {
      return new NextResponse("Free trial has expired", { status: 403 });
    }

    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt,
        },
      }
    );

    await increaseApiLimit();

    return NextResponse.json(response);
  } catch (error) {
    console.log("[VIDEO ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
