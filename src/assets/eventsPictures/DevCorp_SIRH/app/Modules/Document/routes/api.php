<?php
Route::post('/documents',[\App\Modules\Document\Http\Controllers\DocumentController::class, 'create']);
