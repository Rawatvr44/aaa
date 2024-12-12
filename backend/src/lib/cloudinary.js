import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";

dotenv.config({ path: "backend\\.env" });

cloudinary.config({
	cloud_name: "dlkvqsrpb",
	api_key:983968776221864,
	api_secret:"QekHY2wNux5b5ys2fT9RtxbeDI4",
});
export default cloudinary;