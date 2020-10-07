<?php

use Aws\Credentials\Credentials;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use Aws\Signature\SignatureV4;



function send_message_to_connection($connection_id,$message){
    $url = Config::get('app.aws_ws_gateway').'/'.$connection_id;
    $headers = ['Content-Type' => 'application/x-www-form-urlencoded'];
    $credentials = new Credentials(
        Config::get('app.aws_access_key_id'), Config::get('app.aws_secret_access_key')
    );
    $request = new Request(
        'POST', $url, ['Content-Type' => 'application/json'], json_encode($message)
    ); 
    $signer = new SignatureV4('execute-api', Config::get('app.aws_region')); 
    $request = $signer->signRequest($request, $credentials);
    $client = new Client([ 'headers' => $headers]);
    $response = $client->send($request);
    $result = $response->getBody();
}