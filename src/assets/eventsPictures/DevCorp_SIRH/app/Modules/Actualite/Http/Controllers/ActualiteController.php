<?php

namespace App\Modules\Actualite\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Modules\Actualite\Models\Actualite;
use App\Modules\Categorie\Models\Categorie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ActualiteController extends Controller
{

    public function create(){

    }
    public function showCategorie(Request $request){
        $actualite=Categorie::find($request->id)->actualites;
        return $actualite;
    }
}


/*
  $validator=Validator::make($request->all(),[
            "titre"=>'string|required',
            "contenu"=>'string|required',
            "image"=>'string|required',
            "createdBy"=>'string|required',
            "updatedBy"=>'string|required',
            "categorie_id"=>'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
      /*  $categorie=Categorie::find(($request->categorie_id));

        $actualite = Actualite::create($request->except('categorie_id'));
        $actualite->categories()->sync($categorie);*/
/* $categorie=new Categorie();
 $categorie->libelle="dddd";
 $categorie->actif=true;
 $categorie->createdBy="ana";
 $categorie->updatedBy="ana";
 $categorie->type="ana";

 $categorie->save();

$categorie=Categorie::find(1);
$actualite=new Actualite();
$actualite->titre="ssss";
$actualite->contenu="ssss";
$actualite->image="ssss";
$actualite->createdBy="ssss";
$actualite->updatedBy="ssss";
$actualite->save();
$actualite->categories()->save($categorie);
return $actualite;
 */