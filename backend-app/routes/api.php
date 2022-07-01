<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('addMenu', [MenuController::class, 'SaveMenu']);
Route::get('GetMenu', [MenuController::class, 'GetMenu']);
Route::get('DeleteMenu/{id}', [MenuController::class, 'DeleteMenu']);
Route::get('UpdateMenu/{id}', [MenuController::class, 'UpdateMenu']);
Route::post('UpdateMenuAct/{id}', [MenuController::class, 'UpdateMenuAct']);
