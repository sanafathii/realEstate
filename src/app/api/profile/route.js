import Profile from "@/models/profile";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        const {
            title,
            description,
            location,
            phoneNumber,
            price,
            realState,
            constractionDate,
            gategorie,
            amenities,
            rules,
        } = body;

        const session = await getServerSession(req);
        if (!session) {
            return NextResponse.json({ error: "لطفا حساب کاربری خود شوید." }, { status: 401 });
        }
        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            return NextResponse.json({ error: "حساب کاربری یافت نشد" }, { status: 404 });
        }

        if (!title ||
            !description ||
            !location ||
            !phoneNumber ||
            !realState ||
            !price ||
            !gategorie
        ) {
            return NextResponse.json({ error: "لطفا اطلاعات معتبر وارد کنید" }, { status: 400 });
        }

        const newProfile = await Profile.create({
            title,
            description,
            location,
            phoneNumber,
            realState,
            constractionDate,
            amenities,
            rules,
            price: +price,
            gategorie,
            userId: new Types.ObjectId(user._id),
        });
        return NextResponse.json({ message: "آگهی جدید اضافه شد." }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "مشکلی در سرور رخ داده است." }, { status: 500 });
    }
}