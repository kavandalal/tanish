"use strict";
exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 20185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DELETE: () => (/* binding */ DELETE),
/* harmony export */   GET: () => (/* binding */ GET),
/* harmony export */   POST: () => (/* binding */ POST),
/* harmony export */   deleteImage: () => (/* binding */ deleteImage),
/* harmony export */   getImage: () => (/* binding */ getImage)
/* harmony export */ });
/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98221);
/* harmony import */ var _error_handler_error_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72616);
/* harmony import */ var _error_handler_custom_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23650);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91654);
/* harmony import */ var _error_handler_bad_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15029);
// import connectMongoDB from '@/lib/mongodb';
// import Post from '@/model/post';
// import postType from '@/model/post.types';

// import BadRequestError from '@/error-handler/bad-request';


// import InternalServerError from '@/error-handler/internal-server';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { checkMongooseRef } from '@/lib/server-helper';
// import { headers } from 'next/headers';


const { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } = __webpack_require__(21841);
const { getSignedUrl } = __webpack_require__(10904);
const Bucket = process.env.BUCKET_NAME;
const AWS_REGION = process.env.AWS_REGION;
const expiresIn = 5 * 60;
const s3Config = {
    region: AWS_REGION
};
const s3Client = new S3Client(s3Config);
async function POST(req) {
    try {
        let { ext, type } = await req.json();
        const baseFolder = type;
        const fileName = `${(0,nanoid__WEBPACK_IMPORTED_MODULE_2__/* .nanoid */ .x0)(10)}.${ext}`;
        const Key = `${baseFolder}/${fileName}`;
        const command = new PutObjectCommand({
            Bucket,
            Key
        });
        const url = await getSignedUrl(s3Client, command, {
            expiresIn
        });
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.json({
            ok: true,
            packet: {
                s3Data: {
                    url,
                    source: Key
                }
            }
        });
    } catch (err) {
        if (err instanceof _error_handler_custom_error__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z) {
            return (0,_error_handler_error_handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(err);
        } else {
            throw err;
        }
    }
}
const getImage = async ({ source })=>{
    if (!source) throw new _error_handler_bad_request__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z("Image Source is required");
    const command = new GetObjectCommand({
        Bucket,
        Key: source
    });
    const url = await getSignedUrl(s3Client, command, {
        expiresIn
    });
    return url;
};
async function GET(req) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const source = searchParams.get("source") || false;
        const url = source && await getImage({
            source
        });
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.json({
            ok: true,
            packet: url
        });
    } catch (err) {
        if (err instanceof _error_handler_custom_error__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z) {
            return (0,_error_handler_error_handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(err);
        } else {
            throw err;
        }
    }
}
const deleteImage = async ({ source })=>{
    if (!source) throw new _error_handler_bad_request__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z("Image Source is required");
    const Key = source;
    s3Client.send(new DeleteObjectCommand({
        Bucket,
        Key
    })).then(()=>console.log("S3 file deleted!", Key));
    return true;
};
async function DELETE(req) {
    try {
        const searchParams = req.nextUrl.searchParams;
        const source = searchParams.get("source") || false;
        const Key = source;
        s3Client.send(new DeleteObjectCommand({
            Bucket,
            Key
        })).then(()=>console.log("S3 file deleted!", Key));
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.json({
            ok: true
        });
    } catch (err) {
        if (err instanceof _error_handler_custom_error__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z) {
            return (0,_error_handler_error_handler__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(err);
        } else {
            throw err;
        }
    }
}


/***/ })

};
;