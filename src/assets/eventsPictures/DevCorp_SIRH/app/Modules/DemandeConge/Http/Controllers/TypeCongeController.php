<?php

namespace App\Modules\DemandeConge\Http\Controllers;

use App\Enums\eResponseCode;
use App\Http\Controllers\Controller;
use App\Modules\DemandeConge\Models\TypeConge;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TypeCongeController extends Controller
{
    public function index(){

        return $this->resp->ok(eResponseCode::TCONG_LISTED_200_00,TypeConge::all());
    }
    public function get($id){
        $typeConge=TypeConge::find($id);
        if(!$typeConge){
            //return response()->json("departement not found", 422);
            return $this->resp->not_found(eResponseCode::TCONG_NOT_FOUND_404_00);
        }
        else {
            //return $departement;
            return $this->resp->ok(eResponseCode::TCONG_GET_200_01,$typeConge);

        }
    }
    public function create(Request $request){
        $validator=Validator::make($request->all(),[
            "name" => "required|string",
            "nombreDeJours" => "required|integer",
        ]);
        if ($validator->fails()) {
            //return response()->json($validator->errors(), 400);
            return $this->resp->not_acceptable(eResponseCode::TCONG_NOT_ACCEPTED_406_00,$validator->errors());
        }

        $typeConge =new TypeConge;
        $typeConge->name=$request->name;
        $typeConge->nombreDeJours=$request->nombreDeJours;
        $typeConge->actif=1;
        $typeConge->save();
        return $this->resp->ok(eResponseCode::TCONG_STORED_200_02,$typeConge);
    }
    public function update(Request $request){
        $validator=Validator::make($request->all(),[
            "id" => "required",
            "name" => "required|string",
            "nombreDeJours" => "required|integer",
        ]);
        if ($validator->fails()) {
            //return response()->json($validator->errors(), 400);
            return $this->resp->not_acceptable(eResponseCode::TCONG_NOT_ACCEPTED_406_00,$validator->errors());
        }
        $typeConge=TypeConge::find($request->id);

        if(!$typeConge){
            return $this->resp->not_found(eResponseCode::TCONG_NOT_FOUND_404_00);
        }
        else {
            $typeConge->name=$request->name;
            $typeConge->nombreDeJours=$request->nombreDeJours;
            $typeConge->save();
            return $this->resp->ok(eResponseCode::TCONG_UPDATED_200_03,$typeConge);
        }
    }
    public function disable(Request $request){
        $typeConge=TypeConge::find($request->id);
        if(!$typeConge){
            return $this->resp->not_found(eResponseCode::TCONG_NOT_FOUND_404_00);
        }
        else {
            $typeConge->actif=0;
            $typeConge->save();
            return $this->resp->ok(eResponseCode::TCONG_DISABLED_200_04);
        }
    }
    public function enable(Request $request){
        $typeConge=TypeConge::find($request->id);
        if(!$typeConge){
            return $this->resp->not_found(eResponseCode::TCONG_NOT_FOUND_404_00);
        }
        else {
            $typeConge->actif=1;
            $typeConge->save();
            return $this->resp->ok(eResponseCode::TCONG_ENABLED_200_04);
        }
    }
}
