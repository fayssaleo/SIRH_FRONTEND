<?php
use \App\Modules\DemandeConge\Http\Controllers\TypeCongeController;
use \App\Modules\DemandeConge\Http\Controllers\DemandeCongeController;
//Collaborateurs

Route::group([
    'middleware' => 'api',
    'prefix' => 'api'

], function ($router) {
    Route::post('/typeConges/', [TypeCongeController::class, 'create']);
    Route::get('/typeConges/', [TypeCongeController::class, 'index']);
    Route::get('/typeConges/{id}', [TypeCongeController::class, 'get']);
    Route::post('/typeConges/disable', [TypeCongeController::class, 'disable']);
    Route::post('/typeConges/enable', [TypeCongeController::class, 'enable']);
    Route::post('/typeConges/update', [TypeCongeController::class, 'update']);
});


Route::group([
    'middleware' => 'api',
    'prefix' => 'api'
], function ($router) {
    Route::post('/demanceConges/', [DemandeCongeController::class, 'create']);
    Route::get('/demanceConges/', [DemandeCongeController::class, 'index']);
    Route::get('/demanceConges/{id}', [DemandeCongeController::class, 'get']);
    Route::post('/demanceConges/delete', [DemandeCongeController::class, 'destroy']);
    Route::post('/demanceConges/update', [DemandeCongeController::class, 'update']);
});