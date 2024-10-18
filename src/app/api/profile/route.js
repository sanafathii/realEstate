import Profile from "@/models/profile";
import User from "@/models/user";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectDB();
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
        } = await req.json();

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

export async function PATCH(req) {
    try {
        await connectDB();
        const {
            _id,
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
        } = await req.json();

        const session = await getServerSession(req);
        if (!session) {
            return NextResponse.json({ error: "لطفا حساب کاربری خود شوید." }, { status: 401 });
        }
        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            return NextResponse.json({ error: "حساب کاربری یافت نشد" }, { status: 404 });
        }

        if (!_id ||
            !title ||
            !description ||
            !location ||
            !phoneNumber ||
            !realState ||
            !price ||
            !gategorie
        ) {
            return NextResponse.json({ error: "لطفا اطلاعات معتبر وارد کنید" }, { status: 400 });
        }

        const profile = await Profile.findOne({ _id });

        if (user._id.equals(profile.useId)) {
            return NextResponse.json({ error: "دسترسی شما به این آگهی محدود شده است" }, { status: 403 });
        }

        profile.title = title;
        profile.description = description;
        profile.location = location;
        profile.phoneNumber = phoneNumber;
        profile.price = price;
        profile.realState = realState;
        profile.gategorie = gategorie;
        profile.constractionDate = constractionDate;
        profile.amenities = amenities;
        profile.rules = rules;
        await profile.save();
        return NextResponse.json({ massage: "آگهی بت موفقیت ویرایش شد." }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "مشکلی در سرور رخ داده است." }, { status: 500 });
    }
}