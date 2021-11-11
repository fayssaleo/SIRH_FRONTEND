<?php
Route::post('/actualites',[\App\Modules\Actualite\Http\Controllers\ActualiteController::class, 'create']);
Route::post('/showCategorie',[\App\Modules\Actualite\Http\Controllers\ActualiteController::class, 'showCategorie']);