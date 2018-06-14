/* --------------------
/* Add Delivery Address                      
/* --------------------
/**
* @api {post} /users/address Add Delivery Address
* @apiName addDeliveryAddress
* @apiGroup Users
* @apiPermission User
* @apiHeader {String} [x-access-key] Users unique access-key.
*
* @apiParam {String} title Address title
* @apiParam {String} block Block
* @apiParam {String} street Street
* @apiParam {String} houseNo House number
* @apiParam {String} floorNo Floor number
* @apiParam {String} flatNo Flat number
* @apiParam {String} avenue Avenue
* @apiParam {Number} areaId Area id
* @apiParam {String} name Name of the user
* @apiParam {String} mobile Mobile number of the user
*
* @apiParamExample {json} Request-Example:
{
	"title": "Experion Technologies",
	"block": "Kazhakkoottam",
	"street": "Technopark",
	"houseNo": "2/3121",
	"floorNo": "4",
	"flatNo": "1/343",
	"avenue": "Tech Avenue",
    "areaId": 1,
	"name": "Sachin",
	"mobile": "9567902528"
}
*
* @apiSuccess {Number} id Delivery adddress id
* @apiSuccess {String} title Address title
* @apiSuccess {String} block Block
* @apiSuccess {String} street Street
* @apiSuccess {String} houseNo House number
* @apiSuccess {String} floorNo Floor number
* @apiSuccess {String} flatNo Flat number
* @apiSuccess {String} avenue Avenue
* @apiSuccess {Number} areaId Area id
* @apiSuccess {String} areaName Area name
* @apiSuccess {String} name Name of the user
* @apiSuccess {String} mobile Mobile number of the user
*
* @apiSuccessExample {json} Success-Response:
*  HTTP/1.1 200 OK
{
    "message": "Success",
    "status": 200,
    "data": {
        "id": 14,
        "title": "Experion Technologies",
        "block": "Kazhakkoottam",
        "street": "Technopark",
        "houseNo": "2/3121",
        "floorNo": "4",
        "flatNo": "1/343",
        "avenue": "Tech Avenue",
        "areaId": 1,
        "areaName": "Bneid Al-Qar",
        "name": "Sachin",
        "mobile": "9567902528"
    }
}
*
* @apiErrorExample {json} Error-Response:
* HTTP/1.1 400 Bad Request
{
    "message": "Bad Request",
    "status": 400
}
*/