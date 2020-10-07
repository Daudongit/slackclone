<?php

use Illuminate\Http\Request;
use Aws\ApiGatewayManagementApi\ApiGatewayManagementApiClient;

use Aws\Credentials\Credentials;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request as GRequest;
use Aws\Signature\SignatureV4;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/websocket/connect/', function (Request $request) {
    Log::info("successfully connected");
    return ['success'];
});

Route::post('/websocket/send/', function (Request $request) {
    Log::info("sending messages ...");
    send_message_to_connection($request->connectionId,["message","Just say Hi"]);
    return ["success"=>true];
});