import { Schema, model, models } from "mongoose";

const profileScheme = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    realState: {
        type: String,
        required: true,
    },
    constractionDate: {
        type: Date,
        required: true,
    },
    gategorie: {
        type: String,
        enum: ["villa", "apartment", "store", "office"],
        required: true,
    },
    rules: {
        type: [String],
        default: [],
    },
    amenities: {
        type: [String],
        default: [],
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    published: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Profile = models.Profile || model("Profile", profileScheme);

export default Profile;